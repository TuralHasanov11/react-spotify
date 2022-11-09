import React from 'react';
import SongBar from './SongBar';

export default function RelatedSongs({ songs, artistId, isPlaying, activeSong, handlePauseClick, handlePlayClick }) {
  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-3xl text-white">Related Songs:</h1>

      <div className="mt-6 w-full flex flex-col">
        {songs?.map((song, index) => (
          <SongBar
            key={`${artistId}-${song.key}-${index}`}
            song={song}
            index={index}
            artistId={artistId}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePauseClick={handlePauseClick}
            handlePlayClick={handlePlayClick}
          />
        ))}
      </div>
    </div>
  );
}
