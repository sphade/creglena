import React, { useState } from "react";
import "./banner.css";
import { Button } from "@material-ui/core";
import Search from "./Search";
import { Link } from "react-router-dom";
function Banner() {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="banner">
      <div className="banner__search">
        {showSearch && <Search />}
        <Button
          onClick={() => setShowSearch(!showSearch)}
          variant="outlined"
          className="banner__searchButton"
        >
          {showSearch ? "hide" : "Search Dates"}
        </Button>
      </div>

      <div className="banner__info">
        <h1>Get out and strech your imagination</h1>
        <h5>
          plan a different kind of getway to uncover the hidden gems near you
        </h5>
        <Link to="search">
          <Button variant="outlined" className='btn'>Explore Nearby</Button>
        </Link>
      </div>
    </div>
  );
}

export default Banner;
