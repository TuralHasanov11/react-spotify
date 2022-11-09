import React from 'react';
import { Link } from 'react-router-dom';

export default function DetailsHeader({ artistId, artist, song }) {
  return (
    <div className="relative w-full flex flex-col">
      <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28" />

      <div className="absolute inset-0 flex items-center">
        <img
          alt="profile"
          src={
          artistId ? artist?.artists[artistId].attributes?.artwork?.url
            .replace('{w}', '500')
            .replace('{h}', '500')
            : song?.images?.coverart
}
          className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black"
        />

        <div className="ml-5">
          <p className="font-bold sm:text-3xl text-xl text-white">
            {artistId ? artist?.artists[artistId].attributes?.name : song?.title}
          </p>
          {!artistId && (
          <Link to={`/artists/${song?.artists[0]?.adamid}`}>
            <p className="text-base text-gray-400 mt-2">{song?.subtitle}</p>
          </Link>
          )}

          <p className="text-base text-gray-400 mt-2">
            {artistId
              ? artist?.artists[artistId].attributes?.genreNames[0]
              : song?.genres?.primary}
          </p>
        </div>
      </div>

      <div className="w-full sm:h-44 h-24" />
    </div>
  );
}
