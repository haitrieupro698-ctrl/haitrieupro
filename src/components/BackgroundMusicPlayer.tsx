import React, { useState, useEffect, useRef } from 'react';
import { Music, Volume2, VolumeX, Sparkles, Upload } from 'lucide-react';

interface BackgroundMusicPlayerProps {
  defaultAudioSrc?: string;
}

export const BackgroundMusicPlayer: React.FC<BackgroundMusicPlayerProps> = ({
  defaultAudioSrc = '/audio/background-music.mp3',
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.3); // 30% volume as requested
  const [audioSrc, setAudioSrc] = useState<string>(defaultAudioSrc);
  const [trackName, setTrackName] = useState<string>('Hải Triều AI - Nhạc Nền Tri Ân');
  const [showControls, setShowControls] = useState<boolean>(false);
  const [hasInteracted, setHasInteracted] = useState<boolean>(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const wasPlayingBeforeVideoRef = useRef<boolean>(false);

  // Initialize audio element
  useEffect(() => {
    const audio = new Audio(audioSrc);
    audio.loop = true; // Loop continuously
    audio.volume = 0.3; // Default 30% volume
    audio.preload = 'auto';
    audioRef.current = audio;

    // Attempt autoplay immediately
    const startAutoplay = () => {
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((_error) => {
          // Browser prevented autoplay without user interaction.
          // Listen to first user touch/scroll/click/keydown to start playing immediately.
          const handleFirstInteraction = () => {
            if (audioRef.current && !isVideoPlaying) {
              audioRef.current
                .play()
                .then(() => {
                  setIsPlaying(true);
                  setHasInteracted(true);
                })
                .catch((e) => {
                  console.warn('Playback error on first touch:', e);
                });
            }
            // Remove listeners after first interaction
            window.removeEventListener('click', handleFirstInteraction);
            window.removeEventListener('touchstart', handleFirstInteraction);
            window.removeEventListener('scroll', handleFirstInteraction);
            window.removeEventListener('keydown', handleFirstInteraction);
          };

          window.addEventListener('click', handleFirstInteraction, { passive: true, once: true });
          window.addEventListener('touchstart', handleFirstInteraction, { passive: true, once: true });
          window.addEventListener('scroll', handleFirstInteraction, { passive: true, once: true });
          window.addEventListener('keydown', handleFirstInteraction, { passive: true, once: true });
        });
    };

    startAutoplay();

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, [audioSrc]);

  // Sync volume & mute changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  // Handle Video auto-pause so music doesn't clash with video audio
  useEffect(() => {
    const handleMediaPlay = (event: Event) => {
      const target = event.target as HTMLElement;
      // If a video element plays, pause or mute background music
      if (target && target.tagName === 'VIDEO') {
        if (isPlaying) {
          wasPlayingBeforeVideoRef.current = true;
          if (audioRef.current) {
            audioRef.current.pause();
            setIsPlaying(false);
          }
        }
        setIsVideoPlaying(true);
      }
    };

    const handleMediaPause = (event: Event) => {
      const target = event.target as HTMLElement;
      if (target && target.tagName === 'VIDEO') {
        setIsVideoPlaying(false);
        // Resume background music if it was playing before
        if (wasPlayingBeforeVideoRef.current && audioRef.current) {
          audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
          wasPlayingBeforeVideoRef.current = false;
        }
      }
    };

    // Custom events for YouTube iframe / modals
    const handleCustomVideoState = (e: any) => {
      const isVideoActive = e.detail?.isPlaying;
      setIsVideoPlaying(isVideoActive);
      if (isVideoActive) {
        if (isPlaying) {
          wasPlayingBeforeVideoRef.current = true;
          if (audioRef.current) {
            audioRef.current.pause();
            setIsPlaying(false);
          }
        }
      } else {
        if (wasPlayingBeforeVideoRef.current && audioRef.current) {
          audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
          wasPlayingBeforeVideoRef.current = false;
        }
      }
    };

    window.addEventListener('play', handleMediaPlay, true);
    window.addEventListener('pause', handleMediaPause, true);
    window.addEventListener('ended', handleMediaPause, true);
    window.addEventListener('website-video-state', handleCustomVideoState);

    return () => {
      window.removeEventListener('play', handleMediaPlay, true);
      window.removeEventListener('pause', handleMediaPause, true);
      window.removeEventListener('ended', handleMediaPause, true);
      window.removeEventListener('website-video-state', handleCustomVideoState);
    };
  }, [isPlaying]);

  // User click toggle button
  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.warn('Playback error:', err);
        });
    }
  };

  // Support custom MP3 upload/file selection from user
  const handleCustomFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setAudioSrc(url);
      setTrackName(file.name.replace(/\.[^/.]+$/, ''));
      if (audioRef.current) {
        audioRef.current.src = url;
        audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
      }
    }
  };

  return (
    <aside 
      aria-label="Trình phát nhạc nền"
      className="fixed bottom-5 left-5 z-40 flex items-center select-none"
    >
      {/* Hidden file input for custom MP3 upload */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleCustomFileChange}
        accept="audio/mp3,audio/mpeg,audio/wav,audio/*"
        className="hidden"
      />

      {/* Main Floating Music Button (Bottom Left) */}
      <div className="relative group">
        <button
          onClick={togglePlay}
          onContextMenu={(e) => {
            e.preventDefault();
            setShowControls(!showControls);
          }}
          title={isPlaying ? 'Bấm để tắt nhạc nền' : 'Bấm để bật nhạc nền'}
          aria-label={isPlaying ? 'Tắt nhạc nền' : 'Bật nhạc nền'}
          className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-xl cursor-pointer ${
            isPlaying
              ? 'bg-gradient-to-r from-orange-500 to-rose-500 text-white ring-4 ring-orange-400/30 shadow-orange-500/40 scale-105'
              : 'bg-white/95 text-slate-700 hover:text-slate-900 border border-slate-200/90 shadow-slate-300/40 hover:bg-slate-50'
          }`}
        >
          {/* Animated Music Note / Wave Icon */}
          <div className="relative flex items-center justify-center">
            {isPlaying ? (
              <div className="relative">
                <Music className="w-5 h-5 animate-bounce drop-shadow" />
                {/* Visual pulse rings */}
                <span className="absolute -inset-1 rounded-full bg-white/30 animate-ping pointer-events-none" />
              </div>
            ) : (
              <VolumeX className="w-5 h-5 text-slate-400" />
            )}
          </div>
        </button>

        {/* Small soundwave equalizer badge when playing */}
        {isPlaying && (
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-rose-500 border-2 border-white"></span>
          </span>
        )}

        {/* Small Hover Tooltip with Status and Volume Control */}
        <div className="absolute bottom-14 left-0 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-200 p-3 min-w-[210px] opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 text-xs">
          <div className="flex items-center justify-between gap-2 mb-2 pb-1.5 border-b border-slate-100">
            <div className="flex items-center gap-1.5 font-bold text-slate-800 truncate">
              <Music className="w-3.5 h-3.5 text-orange-500 shrink-0" />
              <span className="truncate max-w-[130px]">{trackName}</span>
            </div>
            <span
              className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                isPlaying
                  ? 'bg-emerald-50 text-emerald-600 border border-emerald-200'
                  : 'bg-slate-100 text-slate-500'
              }`}
            >
              {isPlaying ? 'Đang phát' : 'Đã tạm dừng'}
            </span>
          </div>

          {/* Volume Slider (default 30%) */}
          <div className="flex items-center gap-2 mb-2">
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="text-slate-500 hover:text-slate-800 cursor-pointer"
              title={isMuted ? 'Bật âm' : 'Tắt âm'}
            >
              {isMuted || volume === 0 ? (
                <VolumeX className="w-4 h-4 text-rose-500" />
              ) : (
                <Volume2 className="w-4 h-4 text-slate-600" />
              )}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={isMuted ? 0 : volume}
              onChange={(e) => {
                const val = parseFloat(e.target.value);
                setVolume(val);
                if (isMuted && val > 0) setIsMuted(false);
              }}
              className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
            />
            <span className="text-[10px] text-slate-500 font-mono w-7 text-right">
              {Math.round((isMuted ? 0 : volume) * 100)}%
            </span>
          </div>

          {/* Action to change MP3 file */}
          <button
            onClick={() => fileInputRef.current?.click()}
            className="w-full flex items-center justify-center gap-1.5 py-1 px-2 rounded-lg bg-slate-50 hover:bg-orange-50 text-slate-600 hover:text-orange-600 border border-slate-200 text-[11px] font-medium transition-colors cursor-pointer"
          >
            <Upload className="w-3 h-3" />
            <span>Đổi file MP3 khác</span>
          </button>
        </div>
      </div>
    </aside>
  );
};
