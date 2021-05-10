import React from "react";
import {useStoreContext} from "../../utils/GlobalState";

import awards from "../../pages/images/omdb_shoppies_banner.jpg"
import Image from "react-bootstrap/Image"
import Jumbotron from "react-bootstrap/Jumbotron"
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function NavBar() {
  const [store] = useStoreContext();

  return (
    <div className="mb-0 text-center">

      <Jumbotron className="mb-0" style={{

        "position": "relative", "zIndex": "1", height: '128px',
        backgroundImage: `url(${awards})`, backgroundSize: '1635px 120px', opacity: '50%'
      }}>
      </Jumbotron>
      <h1 className="mb-0" style={{"position": "relative", "top": "-100px", "zIndex": "2", "color": "white", "textShadow": "5px 3px 5px #000000"}}>The Shoppies</h1>

    </div>
  );
}

export default NavBar;

      // <Navbar style={{"position": "relative", "top": "-45px"}} className="p-2 mb-0 shadow" bg="light" expand="lg">
      //   <Navbar.Brand href="/">Shoppie Movie Awards</Navbar.Brand>
      //   {/* {store.loading ? <a className="navbar-brand ml-auto">Loading...</a> : <></>} */}
      //   <Navbar.Toggle aria-controls="basic-navbar-nav" />
      //   <Navbar.Collapse id="basic-navbar-nav">
      //     <Nav className="mr-auto">
      //       <Nav.Link href="#nominees">Nominees</Nav.Link>
      //       <Nav.Link href="#searchMovies">Search</Nav.Link>
      //       <Nav.Link href="#searchResults">Results</Nav.Link>
      //     </Nav>
      //   </Navbar.Collapse>
      // </Navbar>