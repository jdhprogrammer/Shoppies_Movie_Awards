import React, {useRef} from "react";
import {useStoreContext} from "../../utils/GlobalState";
import {ADD_BOOK, LOADING, UPDATE_SEARCH_BOOKS} from "../../utils/actions";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import API from "../../utils/API";
import bookSearchImage from "../../pages/images/book_search.jpg";

function SearchBookForm() {
  const titleRef = useRef();
  const authorRef = useRef();
  const subjectRef = useRef();
  const [state, dispatch] = useStoreContext();

  const searchFunction = result => {
    let bookResults = result.data.items
    let bookData = []
    console.log(bookResults)
    bookResults.forEach(item => {
      let info = item.volumeInfo
      if (
        !info.authors ||
        !info.title ||
        !info.description ||
        !info.imageLinks ||
        !info.imageLinks.smallThumbnail ||
        !info.description ||
        !info.infoLink
      ) {
        return
      }
      else {
        let book = {
          title: info.title,
          author: info.authors[0],
          description: info.description,
          image: info.imageLinks.smallThumbnail,
          link: info.infoLink,
          id: item.id,
        }
        dispatch({
          type: ADD_BOOK,
          book: book
        });
      };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({type: LOADING});
    dispatch({type: UPDATE_SEARCH_BOOKS, books: []});
    let searchOption = e.target.name;


    switch (searchOption) {
      case "title":
        API.searchTitle(titleRef.current.value.toLowerCase().trim())
          .then(searchFunction)
          .catch(err => console.log(err));
        break;
      case "author":
        API.searchAuthor(authorRef.current.value.toLowerCase().trim())
          .then(searchFunction)
          .catch(err => console.log(err));
        break;
      case "subject":
        API.searchSubject(subjectRef.current.value.toLowerCase().trim())
          .then(searchFunction)
          .catch(err => console.log(err));
        break;
      default:
        break;
    }
    titleRef.current.value = "";
    subjectRef.current.value = "";
    authorRef.current.value = "";
  };

  return (
    <div id="searchBooks" className="text-center">
      <h3 className="">Search Google Books</h3>
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
      <Form onSubmit={handleSubmit} name="author" >
        <InputGroup className="mb-3 shadow">
          <FormControl
            placeholder="Search by Author..."
            aria-label="Search by Author..."
            aria-describedby="basic-addon2" ref={authorRef}
          />
          <InputGroup.Append>
            <Button type="submit" variant="info">Search</Button>
          </InputGroup.Append>
        </InputGroup>
      </Form>
      <Form onSubmit={handleSubmit} name="subject">
        <InputGroup className="mb-3 shadow">
          <FormControl placeholder="Search By Subject..."
            aria-label="Search By Subject..."
            aria-describedby="basic-addon2" ref={subjectRef} />
          <InputGroup.Append>
            <Button type="submit" variant="success">Search</Button>
          </InputGroup.Append>
        </InputGroup>
      </Form>
      <div className="jumbotron shadow" style={{"padding": "10px"}}>
        <img
          className="img-fluid img-thumbnail"
          src={bookSearchImage}
          style={{"width": "435px"}}
        />
      </div>
    </div>
  );
}

export default SearchBookForm;

// style={{"background-color": `rgb(255, 255, 255, 0.5)`}}
