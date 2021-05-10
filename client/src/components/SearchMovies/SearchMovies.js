import React, {useRef} from "react";
import {Link} from 'react-router-dom';
import {useStoreContext} from "../../utils/GlobalState";
import {ADD_MOVIE, LOADING, UPDATE_MOVIES, UPDATE_SEARCH_MOVIES, REMOVE_MOVIE, REMOVE_FAVORITE} from "../../utils/actions";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import {Row, Col} from "react-bootstrap"
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import API from "../../utils/API";
import movieSearchImage from "../../pages/images/movie_search.png";

function SearchMovies() {
  const titleRef = useRef();
  const [state, dispatch] = useStoreContext();

  const searchFunction = result => {
    let movieResults = result.data.Search
    let movieIds = []

    console.log(movieResults)
    movieResults.forEach(result => {
      if (movieIds.includes(result.imdbID)) {
        return
      }
      else {
        movieIds.push(result.imdbID);
        API.getMovieDetails(result.imdbID)
          .then(details => {
            console.log(details)
            let movie = {
              Title: details.data.Title,
              Year: details.data.Year,
              Type: details.data.Type,
              Poster: details.data.Poster,
              ID: details.data.imdbID,
              Runtime: details.data.Runtime,
              Genre: details.data.Genre,
              Director: details.data.Director,
              Writer: details.data.Writer,
              Actors: details.data.Actors,
              Plot: details.data.Plot,
              Language: details.data.Language,
              Country: details.data.Country,
              Awards: details.data.Awards,
              Poster: details.data.Poster,
              Ratings: details.data.Ratings,
              Metascore: details.data.Metascore,
              imdbRating: details.data.imdbRating,
              imdbVotes: details.data.imdbVotes,
              imdbID: details.data.imdbID,
              Type: details.data.Type,
              DVD: details.data.DVD,
              BoxOffice: details.data.BoxOffice,
              Production: details.data.Production,
              Website: details.data.Website,
              Response: details.data.Response,
            }

            dispatch({
              type: ADD_MOVIE,
              movie: movie
            });
          })
      }
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({type: LOADING});
    dispatch({type: UPDATE_SEARCH_MOVIES, movies: []});
    let searchOption = e.target.name;


    switch (searchOption) {
      case "title":
        API.searchTitle(titleRef.current.value.toLowerCase().trim())
          .then(searchFunction)
          .catch(err => console.log(err));
        break;

      default:
        break;
    }
    titleRef.current.value = "";
  };

  const submitNominations = () => {
    state.nominations.forEach(nominee => {
      removeMovie(nominee._id)
    })
    dispatch({type: LOADING});
    dispatch({type: UPDATE_MOVIES, nominations: []});
    // alert("Thank You for Submitting your Shoppie Movie Award Nominations! Check back next week to find out Who the Winners Are. =)")
  }

  const removeMovie = id => {
    API.deleteMovie(id)
      .then(() => {
        dispatch({
          type: REMOVE_MOVIE,
          _id: id
        });
      })
      .catch(err => console.log(err));
    removeFavorite()
  };

  const removeFavorite = () => {
    dispatch({
      type: REMOVE_FAVORITE,
      id: state.currentMovie.ID
    });
  }

  return (
    <div id="nominations" className="text-center">
      <Row xs={{order: 4}} md={{order: 4}}>
        <Col xs={12} >
          <h3 className="">Search Movies</h3>
          <Form name="title" onSubmit={handleSubmit}>
            <InputGroup className="mb-3 shadow">
              <FormControl placeholder="Search By Title..."
                aria-label="Search By Title..."
                aria-describedby="basic-addon2" ref={titleRef} />
              <InputGroup.Append>
                <Button type={"submit"} variant="primary">Search</Button>
              </InputGroup.Append>
            </InputGroup>
          </Form>
        </Col>
      </Row>
      {state.nominations.length >= 5 ?
        <Row xs={{order: 3}} md={{order: 2}}>
          <Col xs={12} >
            <><strong>You have 5 Nominees!  </strong>
              <Button className="m-2 mb-4 p-2 shadow" variant="warning"
                onClick={() => submitNominations()}>
                <Link style={{textDecoration: 'none', color: 'black'}} to='/submit'>Submit Nominations</Link>
              </Button></>
          </Col>
        </Row> : <div></div>}
      <Row xs={{order: 2}} md={{order: 3}}>
        <Col xs={12}>
          <div className="jumbotron shadow" style={{"padding": "10px"}}>
            <img
              className="img-fluid img-thumbnail"
              src={movieSearchImage}
              style={{"width": "435px"}}
            />
          </div>
        </Col>
      </Row >
    </div>
  );
}

export default SearchMovies;

