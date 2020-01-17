import { FILTER_RESULTS, LOAD_SHOWS } from './constants';

export function filterResults(value) {
  return {
    type: FILTER_RESULTS,
    value,
  };
}

export function loadShows(data) {
  return {
    type: LOAD_SHOWS,
    data,
  };
}
