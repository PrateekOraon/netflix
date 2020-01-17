import { CHANGE_USERNAME } from './constants';
import { saveState, loadState } from '../../localStorage';

import * as data from './data.json';

const { shows } = data;
const persistedState = loadState();

const initialState = {
  data: shows,
  filtered_shows: [],
  no_shows: '',
  favorites: {},
};

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_SHOWS':
      return { ...state, filtered_shows: action.data, no_shows: '' };
    case 'NO_SHOWS':
      return { ...state, filtered_shows: [], no_shows: action.message };
    case 'ADD_TO_FAVORITE': {
      if (persistedState && persistedState.favorites) {
        state.favorites = persistedState.favorites;
      }
      state.favorites[action.data.imdbID] = action.data;
      saveState(state);
      return { ...state };
    }
    case 'REMOVE_FROM_FAVORITE': {
      state.favorites = persistedState.favorites;
      state.favorites[action.data.imdbID] = undefined;
      saveState(state);
      return { ...state };
    }
    default:
      return { ...state };
  }
}

export default homeReducer;
