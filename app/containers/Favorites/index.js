import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeFavorites } from 'containers/HomePage/selectors';
import { removeFromFav } from '../HomePage/actions';

import reducer from '../HomePage/reducer';
import saga from '../HomePage/saga';
import Favorites from './Favorites';

const mapStateToProps = createStructuredSelector({
  favorites: makeFavorites(),
});

const mapDispatchToProps = dispatch => ({
  removeFromFav: item => dispatch(removeFromFav(item)),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(withConnect, withReducer, withSaga)(Favorites);
