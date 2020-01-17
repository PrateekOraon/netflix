import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import Iframe from 'react-iframe';
import { loadState } from '../../localStorage';

export default class FeaturePage extends React.Component {
  state = {
    mount: 0,
    added: false,
  };

  componentDidMount() {
    const persistedState = loadState();
    if (persistedState && persistedState.favorites) {
      this.setState({
        added: Object.keys(persistedState.favorites).includes(
          this.props.data.imdbID,
        ),
      });
    }
  }

  render() {
    const show = this.props.data;
    return (
      <div
        className="feature-page"
        onMouseEnter={() => {
          this.setState({ mount: 1 });
          // document.getElementsByClassName('play').opacity = 1;
        }}
        onMouseLeave={() => {
          this.setState({ mount: 0 });
          // document.getElementsByClassName('play').opacity = 0;
        }}
      >
        <div className="poster">
          <img
            src={require(`../../images/posters/${show.poster}`)}
            alt={show.title}
          />
        </div>
        <div className="back">
          <h4>{show.title}</h4>
          <div>{`(${show.year})`}</div>
          <div className="description">{show.description}</div>
        </div>
        {/* <Link
          className="play"
          to={{
            pathname: `/features/${show.trailer}`,
            show: show,
          }}
        ></Link> */}

        {this.state.mount ? (
          <Iframe
            url={`https://www.youtube-nocookie.com/embed/${show.trailer}?autoplay=1&controls=0&mute=1&enablejsapi=1&loop=1`}
            width="100%"
            height="100%"
            id="myId"
            className="play"
            display="initial"
            allowFullScreen
            frameborder="0"
          />
        ) : null}

        <Link
          className="link"
          to={{
            pathname: `/features/${show.trailer}`,
            show: show,
          }}
        >
          <div>{show.title}</div>
        </Link>
        {window.location.pathname.startsWith('/favorites') ? null : this.state
            .added ? (
          <img
            className="remove_from_list"
            onClick={() => {
              this.props.removeFromFav(show);
              this.setState({ added: false });
              window.location.reload();
            }}
            src={require('../../images/minus.png')}
            alt="Remove from your list"
            title="Remove from your list"
          />
        ) : (
          <img
            className="add_to_list"
            src={require('../../images/plus.png')}
            alt="Add to your List"
            title="Add to your List"
            onClick={() => {
              this.props.addToFav(show);
              this.setState({ added: true });
              window.location.reload();
            }}
          />
        )}
      </div>
    );
  }
}
