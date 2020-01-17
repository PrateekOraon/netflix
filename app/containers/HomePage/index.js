import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { addToFav, removeFromFav } from './actions';
import { makeSelectShows, makeFilteredShows, makeNoShows } from './selectors';
import reducer from './reducer';
import saga from './saga';
import HomePage from './HomePage';

const mapDispatchToProps = dispatch => ({
  addToFav: item => dispatch(addToFav(item)),
  removeFromFav: item => dispatch(removeFromFav(item)),
});

const mapStateToProps = createStructuredSelector({
  shows: makeSelectShows(),
  filtered_shows: makeFilteredShows(),
  no_show: makeNoShows(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(withReducer, withSaga, withConnect)(HomePage);
export { mapDispatchToProps };
