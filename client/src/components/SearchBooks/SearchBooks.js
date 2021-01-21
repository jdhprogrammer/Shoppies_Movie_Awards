import React, {useRef} from "react";
import {useStoreContext} from "../../utils/GlobalState";
import {ADD_BOOK, LOADING} from "../../utils/actions";
import API from "../../utils/API";
import bookSearchImage from "../../pages/images/book_search.jpg"

function CreateBookForm() {
  const titleRef = useRef();
  const bodyRef = useRef();
  const authorRef = useRef();
  const [state, dispatch] = useStoreContext();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({type: LOADING});
    API.searchBooks({
      title: titleRef.current.value,
      body: bodyRef.current.value,
      author: authorRef.current.value
    })
      .then(result => {
        let bookResults = result.data.items
        let bookData = []
        console.log(bookResults)
        // console.log(result.data.items[0].volumeInfo.authors[0])
        bookResults.forEach(item => {
          let info = item.volumeInfo
          // console.log(info.authors[0])
          if (!info.authors) {
            return
          }
          else {
            let book = {
              title: info.title,
              author: info.authors[0],
              description: info.description,
              image: info.imageLinks.smallThumbnail,
              link: info.infoLink,
              _id: item.id,
            }
            dispatch({
              type: ADD_BOOK,
              book: book
            });
          };
        });
      })
      .catch(err => console.log(err));


    titleRef.current.value = "";
    bodyRef.current.value = "";
    authorRef.current.value = "";
  };

  // searchBooks = query => {
  //   API.search(query)
  //     .then(res => dispatch({result: res.data}))
  //     .catch(err => console.log(err));
  // };
  // searchAuthor = query => {
  //   API.search(query)
  //     .then(res => this.setState({ result: res.data }))
  //     .catch(err => console.log(err));
  // };
  // searchSubject = query => {
  //   API.search(query)
  //     .then(res => this.setState({ result: res.data }))
  //     .catch(err => console.log(err));
  // };

  return (
    <div>
      <div className="jumbotron">
        <img
          className="img-fluid img-thumbnail"
          src={bookSearchImage}
        />
      </div>
      <h1>Search Google Books</h1>
      <form className="form-group mt-5 mb-5" onSubmit={handleSubmit}>
        <input className="form-control mb-5" required ref={titleRef} placeholder="Title" />
        <textarea className="form-control mb-5" required ref={bodyRef} placeholder="Body" />
        <input className="form-control mb-5" ref={authorRef} placeholder="Screen name" />
        <button className="btn btn-success mt-3 mb-5" disabled={state.loading} type="submit">
          Save Book
        </button>
      </form>
    </div>
  );
}

export default CreateBookForm;
