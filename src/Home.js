import React from "react";
import Card from "./Card";
import Banner from "./Banner";
import r1 from "./img/r1.jpg";
import r2 from "./img/r2.jpg";
import r3 from "./img/r3.jpg";
import r4 from "./img/r4.jpg";
import r5 from "./img/r5.jpg";
import r6 from "./img/r6.jpg";

import "./home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      
        <Banner /><Link to="search">
      <div className="home__section">
       
          <Card
            src={r1}
            description="this is just a demo"
            title="THE 999 CLUB"
          />
          <Card
            src={r2}
            description="this is just a demo"
            title="the room elopez"
            price="$200"
          />
          <Card
            src={r3}
            description="this is just a demo"
            title="CALI BACKONY"
            price="$200"
          />
        </div></Link>
      <Link to='search'>
        <div className="home__section">
          <Card
            src={r4}
            description="this is just a demo"
            title="some house"
            price="$200"
          />
          <Card
            src={r5}
            description="this is just a demo"
            title="some house"
            price="$200"
          />
          <Card
            src={r6}
            description="this is just suppose to be simple"
            title="some house"
            price="$200"
          />
          
        </div>
     </Link>
    </div>
  );
}

export default Home;
