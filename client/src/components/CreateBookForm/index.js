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
    API.saveBook({
      title: titleRef.current.value,
      body: bodyRef.current.value,
      author: authorRef.current.value
    })
      .then(result => {
        dispatch({
          type: ADD_BOOK,
          book: result.data
        });
      })
      .catch(err => console.log(err));

    titleRef.current.value = "";
    bodyRef.current.value = "";
  };

  return (
    <div>
      <div className="jumbotron">
        <img
          className="img-fluid img-thumbnail"
          src={bookSearchImage}
        />
      </div>
      <h1>Create a blog book</h1>
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
