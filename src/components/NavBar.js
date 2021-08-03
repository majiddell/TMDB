import react, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SearchSharpIcon from "@material-ui/icons/SearchSharp";
import { Icon } from "@material-ui/core";
import SvgIcon from "@material-ui/core/SvgIcon";

import { FetchSearched } from "../actions/movieAction";
import { useDispatch } from "react-redux";

function Nav() {
  const dispatch = useDispatch();

  const [searched, setsearched] = useState("");

  function inputHandler(e) {
    setsearched(e.target.value);

    console.log(e);
  }

  const submitSearched = (e) => {
    dispatch(FetchSearched(searched));
    setsearched("");
    e.preventDefault();
  };
  return (
    <>
      <Navbar>
        <img
          className="logo"
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg"
        ></img>

        <form>
          <input
            value={searched}
            onChange={inputHandler}
            type="text"
            placeholder="Search"
            aria-label="Search"
          ></input>

          <button onClick={submitSearched} type="submit">
            Search
          </button>
        </form>
      </Navbar>
    </>
  );
}

const Navbar = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Courgette&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Raleway:wght@100;200;300&display=swap");
  z-index: 3;

  width: 100%;
  position: fixed;
  top: 0;
  padding: 1vw;
  background-color: #00000037;
  .logo {
    width: 5vw;
    object-fit: cover;
    position: fixed;
    left: 1vw;
  }

  form {
    display: flex;
    float: right;
    margin-right: 6vw;
    justify-content: center;
    align-items: center;
    button {
      width: 10vw;
      height: 5vh;
      background-color: transparent;
      border: none;
      color: #90cea1;
      font-size: 20px;

      :hover {
        text-decoration: none;
        transition: 0.4s ease;
        //font-size:larger;
        &:hover {
          color: gray;
        }

        cursor: pointer;
      }
    }

    input {
      border-radius: 2px;

      width: 18vw;
      font-size: 20px;
      background-color: #707070a9;
      text-decoration: none;
      border: 0px;
      padding: 2px 4px;
      color: #ffffffa7;
      :focus {
        box-shadow: 0;
        border-bottom: 2px;
        outline: none;
      }
    }
  }
`;
export default Nav;
