import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { 
  getFirestore, 
  doc, 
  getDocFromServer, 
  collection, 
  addDoc, 
  setDoc,
  getDoc, 
  getDocs, 
  query, 
  orderBy, 
  limit, 
  onSnapshot,
  where,
  updateDoc
} from 'firebase/firestore';
import firebaseConfig from '../firebase-applet-config.json';

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// CRITICAL: getFirestore with firestoreDatabaseId from firebase-applet-config.json
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);
export const auth = getAuth(app);

// Test connection on boot as mandated by skill
export async function testConnection() {
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
  } catch (error) {
    if (error instanceof Error && error.message.includes('the client is offline')) {
      console.error('Please check your Firebase configuration.');
    }
  }
}
testConnection();

// Operation types for strict JSON error handling
export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
    tenantId?: string | null;
    providerInfo?: {
      providerId?: string | null;
      email?: string | null;
    }[];
  };
}

export function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null): never {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo: auth.currentUser?.providerData?.map(provider => ({
        providerId: provider.providerId,
        email: provider.email,
      })) || []
    },
    operationType,
    path,
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

export interface FirestoreOrder {
  id?: string;
  orderCode: string;
  customerName: string;
  customerPhone: string;
  customerEmail?: string;
  productId: string;
  productName: string;
  amount: number;
  status: 'pending' | 'confirmed' | 'delivered';
  note?: string;
  userId?: string;
  emailSent?: boolean;
  createdAt: string;
  updatedAt?: string;
}

// Save Order to Firestore
export async function createOrderInFirestore(order: Omit<FirestoreOrder, 'id'>): Promise<string> {
  const collectionPath = 'orders';
  try {
    const docRef = await addDoc(collection(db, collectionPath), order);
    return docRef.id;
  } catch (error) {
    handleFirestoreError(error, OperationType.CREATE, collectionPath);
  }
}

// Update Order status in Firestore
export async function updateOrderStatusInFirestore(orderId: string, status: 'pending' | 'confirmed' | 'delivered', emailSent?: boolean): Promise<void> {
  const docPath = `orders/${orderId}`;
  try {
    const docRef = doc(db, 'orders', orderId);
    const updateData: Record<string, any> = {
      status,
      updatedAt: new Date().toISOString(),
    };
    if (emailSent !== undefined) {
      updateData.emailSent = emailSent;
    }
    await updateDoc(docRef, updateData);
  } catch (error) {
    handleFirestoreError(error, OperationType.UPDATE, docPath);
  }
}

// Subscribe to recent orders (Admin / user view)
export function subscribeToOrders(
  onUpdate: (orders: FirestoreOrder[]) => void,
  userEmail?: string | null
): () => void {
  const pathForOnSnapshot = 'orders';
  try {
    const ordersCol = collection(db, pathForOnSnapshot);
    const q = query(ordersCol, orderBy('createdAt', 'desc'), limit(30));

    return onSnapshot(
      q,
      (snapshot) => {
        const orders: FirestoreOrder[] = [];
        snapshot.forEach((docSnap) => {
          orders.push({ id: docSnap.id, ...(docSnap.data() as Omit<FirestoreOrder, 'id'>) });
        });
        onUpdate(orders);
      },
      (error) => {
        handleFirestoreError(error, OperationType.GET, pathForOnSnapshot);
      }
    );
  } catch (error) {
    handleFirestoreError(error, OperationType.GET, pathForOnSnapshot);
  }
}
