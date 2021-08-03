import react, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import FetchMovie from "../actions/movieAction";
import { Link } from "react-router-dom";

import Rows from "../components/Rows";
import { motion } from "framer-motion";
import styled from "styled-components";

import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import FetchMovieDetail from "../actions/movieDetailAction";
import FetchtvDetail from "../actions/tvDetailAction";
import { fastFadeIn } from "../animations";

import Col from "react-bootstrap/Col";
function Person() {
  function baseURL(size) {
    return `https://image.tmdb.org/t/p/w${size}`;
  }

  const { detail, selected_isloading, credit, image } = useSelector(
    (state) => state.person
  );

  function getImage(Images) {
    const result = [];

    for (let i = 0; i < Images.length; i++) {
      if (
        Images[i].backdrop_path &&
        !Images[i].backdrop_path.includes("https")
      ) {
        result.push(Images[i]);
      }

      if (i === 20) {
        break;
      }
      console.log(result);
    }
    return result;
  }

  const dispatch = useDispatch();
  function openPage(type, id) {
    if (type === "movie") dispatch(FetchMovieDetail(id));
    if (type === "tv") dispatch(FetchtvDetail(id));
  }

  return (
    <>
      {" "}
      {!selected_isloading && (
        <motion.div variants={fastFadeIn} initial="hidden" animate="show">
          <div>
            <div className="container">
              <h1 style={{ margin: "2vw" }}>{detail.name}</h1>

              <Carousel>
                {getImage(image.data.cast).map((img) => (
                  <Carousel.Item key={image.data.cast.id}>
                    <img
                      className="d-block w-100"
                      src={`${baseURL(1280)}${img.backdrop_path}`}
                      alt="First slide"
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>

            <StyledBiography className="container">
              <p>{detail.biography}</p>
              <h3>{`place of birth : ${detail.place_of_birth}`}</h3>
              <h3>{`known for  ${detail.known_for_department}`}</h3>
              <h3>{`birthday : ${detail.birthday}`}</h3>
            </StyledBiography>
          </div>

          <StyledPlayed className="container">
            <hr className="hr col-12"></hr>
            {credit.cast.map((cast) => (
              <>
                {cast.poster_path && cast.character && (
                  <Link
                    key={cast.id}
                    to={`/${cast.media_type}/${cast.id}`}
                    onClick={() => openPage(cast.media_type, cast.id)}
                  >
                    <StyledCard key={cast.id}>
                      <img src={`${baseURL(200)}${cast.poster_path}`}></img>
                      <h4>{` ${cast.character}`}</h4>
                    </StyledCard>
                  </Link>
                )}
              </>
            ))}
          </StyledPlayed>
        </motion.div>
      )}
    </>
  );
}

const StyledCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px;
  img {
    height: 300px;
    object-fit: cover;
  }
  h4 {
    width: 200px;
    margin: 1vh auto;
  }
`;

const StyledBiography = styled(motion.div)`
  p {
    font-size: 16px;
    margin: 2vh 1vw;
  }

  h3 {
    font-size: 18px;
    color: gray;
    margin: 1vh 1vw;
  }
`;

const StyledPlayed = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  hr {
    margin: 3vh;
    border: 2px solid;
    border-color: #ffffff;
    color: #ffffff;
  }
`;

export default Person;
