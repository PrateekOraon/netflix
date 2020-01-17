import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import Feature from '../FeaturePage/Loadable';

export default class HomePage extends React.PureComponent {
  render() {
    const {
      addToFav,
      no_show,
      shows,
      filtered_shows,
      removeFromFav,
    } = this.props;

    return (
      <div className="home-page">
        {filtered_shows[0] ? (
          filtered_shows.map(item => (
            <Feature
              key={item.imdbID}
              data={item}
              addToFav={() => addToFav(item)}
              removeFromFav={() => removeFromFav(item)}
            />
          ))
        ) : no_show ? (
          <div className="no-contents">{no_show}</div>
        ) : (
          shows.map(item => (
            <Feature
              key={item.imdbID}
              data={item}
              addToFav={() => addToFav(item)}
              removeFromFav={() => removeFromFav(item)}
            />
          ))
        )}
      </div>
    );
  }
}
