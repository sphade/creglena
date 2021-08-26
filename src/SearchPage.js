import { Button } from "@material-ui/core";
import React from "react";
import "./searchpage.css";
import SearchResult from "./SearchResult";
import r8 from "./img/r8.jpg";
import r4 from "./img/r4.jpg";
import r9 from "./img/r9.jpg";
import r7 from "./img/r7.jpg";
import r5 from "./img/r5.jpg";


function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p> 62 stays .26 august to 30 august . 2 guest</p>
        <h1>stay nearby</h1>
        <Button variant="outlined">cancellation flexibility</Button>
        <Button variant="outlined">types of place</Button>
        <Button variant="outlined">price</Button>
        <Button variant="outlined">rooms and beds</Button>
        <Button variant="outlined">cancellation flexibilitymore filters</Button>
      </div>
      <SearchResult
        img={r8}
        location="EKO"
        title="the ominix room"
        description="the best for the rich"
        star="4.999"
        price="460,000"
        total="900,000"
      />
      <SearchResult
        img={r4}
        location="JAMES PARK, IGUNDO"
        title="the ominix room"
        description="the best for the rich"
        star="2.9"
        price="50,000"
        total="90,000"
      />
      <SearchResult
        img={r7}
        location="ANAMBRA"
        title="ALPHA"
        description="ONE MAN LUXARY"
        star="4.999"
        price="80,00"
        total="90,000"
      />{" "}
      <SearchResult
        img={r9}
        location="private room in the center of lagos"
        title="the ominix room"
        description="the best for the rich"
        star="4.999"
        price="460,000"
        total="900,000"
      />{" "}
      <SearchResult
        img={r5}
        location="private room in the center of lagos"
        title="the ominix room"
        description="the best for the rich"
        star="4.999"
        price="460,000"
        total="900,000"
      />
    </div>
  );
}

export default SearchPage;
