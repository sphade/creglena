import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";
import React from "react";
import "./SearchResult.css";

function SearchResult({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) {
  return (
    <div className="searchresult">
      <img src={img} alt="" />
      <FavoriteBorderIcon className="searchresult__heart" />
      <div className="searchresult__info">
        <div className="info__top">
          <p>{location}</p>
          <p>{title} </p>
          <p>__</p>
          <p>{description}</p>
        </div>
        <div className="info__bottom">
          <div className="stars">
            <StarIcon className="star" />
            <p>
              <strong>{star}</strong>
            </p>
          </div>
          <div className="price">
            <h2>{price}</h2>
            <p>{total} </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
