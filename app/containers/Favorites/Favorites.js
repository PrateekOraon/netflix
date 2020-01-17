import React from 'react';
import './style.scss';
import Feature from '../FeaturePage/Loadable';
import { loadState } from '../../localStorage';

const persistedState = loadState();

export default class Favorites extends React.PureComponent {
  render() {
    const { removeFromFav } = this.props;

    return (
      <>
        <div>Refresh</div>
        <div className="home-page">
          {persistedState &&
            persistedState.favorites &&
            Object.keys(persistedState.favorites).map(item => (
              <Feature
                key={item}
                data={persistedState.favorites[item]}
                removeFromFav={item => {
                  removeFromFav(item);
                  window.location.reload();
                }}
              />
            ))}
        </div>
      </>
    );
  }
}
