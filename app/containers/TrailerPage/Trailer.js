/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import Iframe from 'react-iframe';
import './style.scss';

export default class Trailer extends React.Component {
  state = {
    imdb_rating: null,
  };

  componentDidMount() {
    const response = fetch(
      `https://www.omdbapi.com/?i=${this.props.location.show.imdbID}&apikey=15680846`,
    );
    response
      .then(response => response.json())
      .then(res => this.setState({ imdb_rating: res.imdbRating }))
      .catch(err => console.log('Error::::', err));
  }

  render() {
    const { trailerId } = this.props.match.params;
    const { show } = this.props.location;
    return (
      <div className="trailer">
        <div className="details">
          <div>
            <img
              src={require(`../../images/posters/${show.poster}`)}
              alt={show.description}
            />
          </div>
          <div>
            <h4>{show.title}</h4>
            <div>{`(${show.year})`}</div>
            <div>{`${this.state.imdb_rating}/10`}</div>
            <div>{show.description}</div>
          </div>
        </div>
        <Iframe
          url={`https://www.youtube-nocookie.com/embed/${trailerId}`}
          width="100%"
          height="100%"
          id="myId"
          className="iframe"
          display="initial"
          position="relative"
          allowFullScreen
        />
      </div>
    );
  }
}
