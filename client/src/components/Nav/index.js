import React from "react";
import {useStoreContext} from "../../utils/GlobalState";
import {Link} from "react-router-dom";

import awards from "../../pages/images/omdb_shoppies_banner.jpg"
import Image from "react-bootstrap/Image"
import Jumbotron from "react-bootstrap/Jumbotron"
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function NavBar() {
  const [state, dispatch] = useStoreContext();

  return (
    <div className="mb-0 text-center">

      <Jumbotron className="mb-0" style={{
        "position": "relative", "zIndex": "1", height: '128px',
        backgroundImage: `url(${awards})`, backgroundSize: '1635px 120px', opacity: '50%'
      }}>
      </Jumbotron>
      <h1 className="mb-0" style={{"position": "relative", "top": "-100px", "zIndex": "2", "color": "white", "textShadow": "5px 3px 5px #000000"}}>
        <Link style={{textDecoration: 'none', color: 'white'}} to='/'>The Shoppies</Link></h1>
      {window.location.href === "http://localhost:3000/submit" ? <div></div> :
        state.nominations.length >= 5 ? <h5 style={{"position": "relative", "top": "-30px", "margin-right": "40px", "margin-left": "40px"}} >
          You have 5 Nominees! Submit your nominations.
        </h5>
          :
          <h5 style={{"position": "relative", "top": "-30px", "margin-right": "40px", "margin-left": "40px"}} >
            Search for Movies,  click to View Details,  Nominate your 5 favorite Movies,  & Submit your Nominations...
        </h5>
      }
    </div>
  );
}

export default NavBar;