import React, { useState, useRef } from 'react';
import { Volume2, VolumeX, Disc, Music, ChevronDown } from 'lucide-react';

export const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [showPlaylist, setShowPlaylist] = useState(false);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playlist = [
    { title: "Canopy Rainfall & Wind", src: "https://actions.google.com/sounds/v1/weather/rain_heavy_loud.ogg", duration: "Ambient" },
    { title: "Morning Bird Sanctuary", src: "https://actions.google.com/sounds/v1/environments/woodland_birds.ogg", duration: "Nature" },
    { title: "Deep Forest Stream Flow", src: "https://actions.google.com/sounds/v1/water/river_stream.ogg", duration: "Relaxing" }
  ];

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(err => {
        console.log("Audio playback user gesture required", err);
      });
    }
  };

  const selectTrack = (index: number) => {
    setCurrentTrack(index);
    setShowPlaylist(false);
    if (audioRef.current) {
      audioRef.current.src = playlist[index].src;
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  return (
    <div className="relative inline-flex items-center gap-3 bg-forest-900/90 border border-emerald-500/20 rounded-full px-4 py-2 text-xs font-mono text-emerald-300 shadow-lg backdrop-blur-md">
      <audio
        ref={audioRef}
        src={playlist[currentTrack].src}
        loop
      />

      {/* Animated Equalizer Waveform */}
      <div className="flex items-center gap-0.5 h-3 w-4">
        <span className={`w-0.5 bg-emerald-400 rounded-full transition-all duration-300 ${isPlaying ? 'h-3 animate-pulse' : 'h-1'}`} />
        <span className={`w-0.5 bg-emerald-400 rounded-full transition-all duration-300 ${isPlaying ? 'h-2 animate-bounce' : 'h-1.5'}`} style={{ animationDelay: '0.1s' }} />
        <span className={`w-0.5 bg-emerald-400 rounded-full transition-all duration-300 ${isPlaying ? 'h-3.5 animate-pulse' : 'h-1'}`} style={{ animationDelay: '0.2s' }} />
      </div>

      {/* Play/Pause Button */}
      <button
        onClick={togglePlay}
        className="flex items-center gap-2 hover:text-emerald-100 transition-colors focus:outline-none"
        aria-label={isPlaying ? "Pause ambient sound" : "Play ambient sound"}
      >
        <Disc className={`w-4 h-4 text-emerald-400 ${isPlaying ? 'animate-spin-slow' : ''}`} />
        <span className="truncate max-w-[140px] sm:max-w-[180px] text-emerald-200">
          {playlist[currentTrack].title}
        </span>
      </button>

      {/* Playlist Toggle */}
      <button
        onClick={() => setShowPlaylist(!showPlaylist)}
        className="p-1 hover:bg-forest-800 rounded-full transition-colors text-emerald-400"
      >
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showPlaylist ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Menu */}
      {showPlaylist && (
        <div className="absolute top-full right-0 mt-2 w-64 bg-forest-900 border border-emerald-500/30 rounded-xl p-2 shadow-2xl z-50 backdrop-blur-xl">
          <p className="px-3 py-1.5 text-[10px] uppercase tracking-wider text-emerald-500 font-bold border-b border-forest-800 mb-1">
            Eco Audio Soundscapes
          </p>
          {playlist.map((track, idx) => (
            <button
              key={idx}
              onClick={() => selectTrack(idx)}
              className={`w-full text-left px-3 py-2 rounded-lg text-xs flex items-center justify-between transition-colors ${
                currentTrack === idx ? 'bg-forest-800 text-emerald-300 font-semibold' : 'hover:bg-forest-850 text-emerald-100/70'
              }`}
            >
              <span className="truncate">{track.title}</span>
              <span className="text-[10px] text-emerald-500 font-mono">{track.duration}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
