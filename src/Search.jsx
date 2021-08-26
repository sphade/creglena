import { Button } from "@material-ui/core";
import PeopleIcon from "@material-ui/icons/People";
import React from "react";
import "./search.css";
import { Link } from "react-router-dom";

function Search() {
  return (
    <>
      <div className="search">
        <div className="week">
          <p>monday</p>
          <p>tuesday</p>
          <p>wednesday</p>
          <p>thursday</p>
          <p>friday</p>
          <p>saturday</p>
          <p>sunday</p>
        </div>
        <div className="day">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
          <p>8</p>
          <p>9</p>
          <p>10</p>
          <p>11</p>
          <p>12</p>
          <p>13</p>
          <p>14</p>
          <p>15</p>
          <p>16</p>
          <p>17</p>
          <p>18</p>
          <p>19</p>
          <p>20</p>
          <p>21</p>
          <p>22</p>
          <p>23</p>
          <p>24</p>
          <p>25</p>
          <p>26</p>
          <p>27</p>
          <p>28</p>
          <p>29</p>
          <p>30</p>
        </div>
      </div>{" "}
      <div className="left">
        <h2>number of guess</h2>
        <PeopleIcon />
        <input min={2} defaultValue={3} type="number" name="" id="" />
        <Link to='/search'> <Button>search airbnb</Button></Link>
       
      </div>
    </>
  );
}

export default Search;
