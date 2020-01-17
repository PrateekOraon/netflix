import { NO_SHOWS, ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE } from './constants';

export function noShowsFound() {
  return {
    type: NO_SHOWS,
    message: 'No Results Found',
  };
}

export function addToFav(data) {
  return {
    type: ADD_TO_FAVORITE,
    data,
  };
}

export function removeFromFav(data) {
  return {
    type: REMOVE_FROM_FAVORITE,
    data,
  };
}
