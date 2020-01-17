import { createSelector } from 'reselect';

const selectHome = state => state.home;

const makeSelectShows = () =>
  createSelector(selectHome, homeState => homeState.data);

const makeFilteredShows = () =>
  createSelector(selectHome, homeState => homeState.filtered_shows);

const makeNoShows = () =>
  createSelector(selectHome, homeState => homeState.no_shows);

const makeFavorites = () =>
  createSelector(selectHome, homeState => homeState.favorites);

export {
  selectHome,
  makeSelectShows,
  makeFilteredShows,
  makeNoShows,
  makeFavorites,
};
