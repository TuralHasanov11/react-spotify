import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';

import { setActiveSong, setSongs, playSong, pauseSong } from '../redux/features/playerSlice';
import { useGetSongDetailsQuery, useGetSongRelatedQuery } from '../redux/services/shazamCore';

export default function SongDetails() {
  const dispatch = useDispatch();
  const params = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data: songs, isFetching: isFetchingRelatedSongs, error } = useGetSongRelatedQuery({ song: params.song });
  const { data: song, isFetching: isFetchingSongDetails } = useGetSongDetailsQuery({ song: params.song });

  if (isFetchingSongDetails && isFetchingRelatedSongs) return <Loader title="Searching song details" />;

  if (error) return <Error />;

  const handlePauseClick = () => {
    dispatch(pauseSong());
  };

  const handlePlayClick = (track, index) => {
    dispatch(setSongs(songs));
    dispatch(setActiveSong({ song: track, index }));
    dispatch(playSong());
  };

  return (
    <div className="flex flex-col">
      <DetailsHeader
        artistId={params.artist}
        song={song}
      />

      <div className="mb-10">
        <h2 className="text-white text-3xl font-bold">Lyrics:</h2>

        <div className="mt-5">
          {song?.sections[1].type === 'LYRICS'
            ? song?.sections[1]?.text.map((line, i) => (
              <p key={`lyrics-${line}-${i}`} className="text-gray-400 text-base my-1">{line}</p>
            ))
            : (
              <p className="text-gray-400 text-base my-1">Sorry, No lyrics found!</p>
            )}
        </div>
      </div>

      <RelatedSongs
        songs={songs}
        artistId={params.artist}
        isPlaying={isPlaying}
        activeSong={activeSong}
        handlePauseClick={handlePauseClick}
        handlePlayClick={handlePlayClick}
      />

    </div>
  );
}
