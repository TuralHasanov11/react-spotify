import { createSlice } from '@reduxjs/toolkit';

const playerSlice = createSlice({
  name: 'player',

  initialState: {
    songs: [],
    topCharts: [],
    currentIndex: 0,
    isActive: false,
    isPlaying: false,
    activeSong: {},
    genreListId: '',
  },

  reducers: {
    setSongs: (state, action) => {
      if (action.payload?.tracks?.hits) {
        state.songs = action.payload?.tracks.hits;
      } else if (action.payload?.properties) {
        state.songs = action.payload?.tracks;
      } else {
        state.songs = action.payload;
      }
    },

    setActiveSong: (state, action) => {
      state.activeSong = action.payload.song;
      state.currentIndex = action.payload.index;
      state.isActive = true;
    },

    nextSong: (state, action) => {
      if (state.songs[action.payload]?.track) {
        state.activeSong = state.songs[action.payload]?.track;
      } else {
        state.activeSong = state.songs[action.payload];
      }

      state.currentIndex = action.payload;
      state.isActive = true;
    },

    prevSong: (state, action) => {
      if (state.songs[action.payload]?.track) {
        state.activeSong = state.songs[action.payload]?.track;
      } else {
        state.activeSong = state.songs[action.payload];
      }

      state.currentIndex = action.payload;
      state.isActive = true;
    },

    playSong: (state) => {
      state.isPlaying = true;
    },

    pauseSong: (state) => {
      state.isPlaying = false;
    },

    selectGenreListId: (state, action) => {
      state.genreListId = action.payload;
    },

    setTopCharts(state, action) {
      state.topCharts = action.payload;
    },
  },
});

export const { setActiveSong, setSongs, nextSong, prevSong, playSong, pauseSong, setTopCharts, selectGenreListId } = playerSlice.actions;

export default playerSlice.reducer;
