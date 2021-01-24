import React from "react";
import {useStoreContext} from "../../utils/GlobalState";
import google from "../../pages/images/googlebooks.png"
import books from "../../pages/images/row-different-colorful-books-vector-flat-illustration-educational-entertainment-textbooks-multicolored-covers-203771386.jpg"
import Image from "react-bootstrap/Image"
import Jumbotron from "react-bootstrap/Jumbotron"
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function NavBar() {
  const [store] = useStoreContext();

  return (
    <div className="mb-0">
      <Jumbotron className="mb-0" style={{
        "padding": "90px",
        "position": "relative", "zIndex": "1",
        backgroundImage: `url(${books})`, backgroundSize: '400px 180px'
      }}>
      </Jumbotron>
      <h3 className="mb-0" style={{"position": "relative", "top": "-170px", "left": "50px", "zIndex": "2", "textShadow": "2px 2px 4px #9f9f9f"}}>Google Book Search</h3>
      <Navbar style={{"position": "relative", "top": "-37px"}} className="p-2 mb-0 shadow" bg="light" expand="lg">
        <Navbar.Brand href="/">GoogleBookSearch</Navbar.Brand>
        {/* {store.loading ? <a className="navbar-brand ml-auto">Loading...</a> : <></>} */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#savedBooks">Saved</Nav.Link>
            <Nav.Link href="#searchBooks">Search</Nav.Link>
            <Nav.Link href="#searchResults">Results</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;

// import React from "react";
// import {useStoreContext} from "../../utils/GlobalState";
// import google from "../../pages/images/googlebooks.png"
// import books from "../../pages/images/row-different-colorful-books-vector-flat-illustration-educational-entertainment-textbooks-multicolored-covers-203771386.jpg"
// import Image from "react-bootstrap/Image"
// import Jumbotron from "react-bootstrap/Jumbotron"
// function Nav() {
//   const [store] = useStoreContext();

//   return (
//     <div>
//       <Jumbotron className="mb-2 shadow" style={{
//         "padding": "90px",
//         "position": "relative", "zIndex": "1",
//         backgroundImage: `url(${books})`, backgroundSize: '400px 180px'
//       }}>
//       </Jumbotron>
//       <Image src={{google}} style={{"position": "relative", "top": "-170px", "left": "50px", "zIndex": "2", "textShadow": "2px 2px 4px #9f9f9f"}}/>
//       {/* <h3 style={{"position": "relative", "top": "-170px", "left": "50px", "zIndex": "2", "textShadow": "2px 2px 4px #9f9f9f"}}>Google Book Search</h3> */}
//     </div>

//   );
// }

// export default Nav;

