import react from "react";

import Button from "react-bootstrap/Button";
import { motion } from "framer-motion";
import styled from "styled-components";

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { movie_byID_URL } from "../api";

import { FetchSelected } from "../actions/movieAction";
import { FetchMovieDetail } from "../actions/movieDetailAction";
import star from "../svg/star.svg";
import halfStar from "../svg/halfStar.svg";
import emtyStar from "../svg/emptyStar.svg";
import FetchtvDetail from "../actions/tvDetailAction";
import FetchPersonDetail from "../actions/personDetailAction";

function Item({ img, id, score, name, overview, type }) {
  console.log("new item");

  function getStars(score) {
    const stars = [];

    let s = Math.floor(score / 2);
    let r = score / 2 - Math.floor(score / 2);

    for (let index = 0; index < s; index++) {
      stars.push(<img style={{ width: "18px" }} src={star} key={index}></img>);
    }
    if (r >= 0.5)
      stars.push(<img style={{ width: "18px" }} src={halfStar} key={6}></img>);

    let l = stars.length;

    for (let index = 0; index < 5 - l; index++) {
      stars.push(
        <img style={{ width: "18px" }} src={emtyStar} key={index + 10}></img>
      );
    }

    return stars;
  }

  const dispatch = useDispatch();

  function openMoviePage() {
    dispatch(FetchMovieDetail(id));
  }

  function openTVPage() {
    dispatch(FetchtvDetail(id));
  }

  function openPersonPage() {
    dispatch(FetchPersonDetail(id));
  }

  return (
    <Link style={{ textDecoration: "none" }} to={`/${type}/${id}`}>
      {type === "movie" && (
        <StyledItem className="card" onClick={openMoviePage}>
          <div className="card-body">
            <img src={img} alt="poster" className="card-img-top"></img>
            <h4 className="card-title">{name}</h4>
            {type === "movie" && (
              <p className="card-text">
                {overview.length > 0 ? `${overview.substring(0, 100)}...` : ""}
              </p>
            )}
            {type === "person" && (
              <p className="card-text">{`${overview.substring(0, 100)}`}</p>
            )}
            <p className="card-text">{getStars(score)}</p>
          </div>
        </StyledItem>
      )}

      {type === "tv" && (
        <StyledItem className="card" onClick={() => openTVPage()}>
          <div className="card-body">
            <img src={img} alt="poster" className="card-img-top"></img>
            <h4 className="card-title">{name}</h4>

            <p className="card-text">
              {overview.length > 0 ? `${overview.substring(0, 100)}...` : ""}
            </p>

            <p className="card-text">{getStars(score)}</p>
          </div>
        </StyledItem>
      )}

      {type === "person" && (
        <StyledItem className="card" onClick={() => openPersonPage()}>
          <div className="card-body">
            <img src={img} alt="poster" className="card-img-top"></img>
            <h4 className="card-title">{name}</h4>
          </div>
        </StyledItem>
      )}
    </Link>
  );
}

export const StyledItem = styled(motion.div)`
  background-color: transparent;
  padding: 5px;
  img {
    width: 210px;
    object-fit: cover;
    margin: 0 5px;

    :hover {
      width: 220px;
      transition: ease-in-out;
      transition-duration: 0.2s;
      margin: 0;
    }

    @media only screen and (max-width: 601px) {
      width: 140px;

      object-fit: cover;
      margin: 0 5px;
    }
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h4 {
    margin: 3px;
  }
  P {
    font-size: 16px;
    line-height: 2.8vh;
  }
`;

export default Item;
