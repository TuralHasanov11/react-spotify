import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';

import { useGetArtistDetailsQuery } from '../redux/services/shazamCore';

export default function ArtistDetails() {
  const params = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data: artist, isFetching: isFetchingArtistDetails, error } = useGetArtistDetailsQuery(params?.artist);

  if (isFetchingArtistDetails) return <Loader title="Loading artist details..." />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <DetailsHeader
        artistId={params?.artist}
        artist={artist}
      />

      <RelatedSongs
        songs={Object.values(artist?.songs)}
        artistId={params?.artist}
        isPlaying={isPlaying}
        activeSong={activeSong}
      />
    </div>
  );
}
