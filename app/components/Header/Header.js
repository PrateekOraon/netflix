import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { Link } from 'react-router-dom';
import Netflix from './images/netflix-logo.png';
import './style.scss';
import { filterResults } from './actions';
import reducer from '../../containers/HomePage/reducer';
import saga from '../../containers/HomePage/saga';

const Header = props => (
  <div className="header">
    <div className="nav-bar">
      <img className="logo" src={Netflix} alt="logo" />
      <a className="router-link" href="/">
        Home
      </a>
      <a className="router-link" href="/favorites">
        My List
      </a>
      <input
        className="search-box"
        type="text"
        name="search"
        placeholder="Title,movie,genres..."
        onChange={props.onChange}
      />
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  onChange: evt => dispatch(filterResults(evt.target.value)),
});

const withConnect = connect(null, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(withReducer, withSaga, withConnect)(Header);
