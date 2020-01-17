import { put, select, takeLatest } from 'redux-saga/effects';
import { FILTER_RESULTS } from '../../components/Header/constants';
import { noShowsFound } from './actions';
import { loadShows } from '../../components/Header/actions';

export function* getRepos(action) {
  const shows = yield select(makeSelectShows());
  const filtered_shows = shows.filter(item => {
    const title = item.title.toLowerCase();
    return title.includes(action.value.toLowerCase(), 0);
  });

  if (filtered_shows[0]) {
    yield put(loadShows(filtered_shows));
  } else {
    yield put(noShowsFound());
  }
}

export default function* githubData() {
  yield takeLatest(FILTER_RESULTS, getRepos);
}
