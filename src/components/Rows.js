import Row from "./Row";
import { motion, MotionConfig } from "framer-motion";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import Item from "../components/Item";
import FetchtvDetail from "../actions/tvDetailAction";

import FetchPersonDetail from "../actions/personDetailAction";
import FetchMovieDetail from "../actions/movieDetailAction";

import facebook from "../icons/whatsapp.svg";
import whatsapp from "../icons/facebook.svg";
import instagram from "../icons/instagram.svg";
import pinterst from "../icons/pinterst.svg";
import twitter from "../icons/twitter.svg";
import longLogo from "../icons/longLogo.svg";
import { SlowFadeIn } from "../animations";
import { fastFadeIn } from "../animations";

function Rows() {
  function baseURL(size) {
    return `https://image.tmdb.org/t/p/w${size}`;
  }

  const { popular, top_rated, now_playing, trending, isloading, searched } =
    useSelector((state) => state.movies);
  const { onTheAir, popularSeries } = useSelector((state) => state.series);

  const dispatch = useDispatch();

  function openPage(type, id) {
    if (type === "movie") dispatch(FetchMovieDetail(id));
    if (type === "tv") dispatch(FetchtvDetail(id));
    if (type === "person") dispatch(FetchPersonDetail(id));
  }

  let r = 0;

  function getRandom(t) {
    r = Math.floor(Math.random() * t.length);
    return r;
  }

  function cutText(text) {
    const newtext = text.substring(0, 120) + "...";
    return newtext;
  }

  function getName(res, type) {
    if (type === "movie") return res.title;
    if (type === "tv") return res.name;
    if (type === "person") return res.name;
  }

  function getImage(res, type) {
    console.log(type);
    if (type === "movie" || type === "tv") return res.poster_path;

    if (type === "person") return res.profile_path;
  }

  return (
    <StyledRows>
      {!isloading && (
        <Link
          to={`/${trending[r].media_type}/${trending[r].id}`}
          onClick={() => openPage(trending[r].media_type, trending[r].id)}
        >
          <motion.img
            variants={SlowFadeIn}
            initial="hidden"
            animate="show"
            className="image"
            src={`${baseURL(1280)}${
              trending[getRandom(trending)].backdrop_path
            }`}
            alt="poster"
          ></motion.img>
          <motion.div
            variants={SlowFadeIn}
            initial="hidden"
            animate="show"
            className="title"
          >
            <h2>{trending[r].original_title}</h2>
            <p>{cutText(trending[r].overview)}</p>
          </motion.div>
        </Link>
      )}
      {searched.length > 0 && (
        <>
          <StyledSearched variants={fastFadeIn} initial="hidden" animate="show">
            <div className="container">
              <h1>Search Results</h1>

              <div className="row">
                {searched.map((res) => (
                  <>
                    {(res.poster_path || res.profile_path) && (
                      <div className="col" key={res.id}>
                        <Item
                          img={`${baseURL(400)}${getImage(
                            res,
                            res.media_type
                          )}`}
                          id={res.id}
                          score={res.vote_average}
                          name={getName(res, res.media_type)}
                          overview={res.overview}
                          type={res.media_type}
                        ></Item>
                      </div>
                    )}
                  </>
                ))}
              </div>
            </div>
          </StyledSearched>
        </>
      )}

      <h1>popular movies</h1>
      <Row key="ROW1" content={popular} type="movie" />

      <h1>now playing movies</h1>
      <Row key="ROW2" content={now_playing} type="movie" />

      <h1>top rated movies</h1>
      <Row key="ROW3" content={top_rated} type="movie" />

      <h1>On The Air Series</h1>
      <Row key="ROW4" content={onTheAir} type="tv" />

      <h1>Popular Series</h1>
      <Row key="ROW5" content={popularSeries} type="tv" />

      <StyledFooter className="container-fluid">
        <div className="row">
          <div className="col-md-6  icons">
            <img src={facebook}></img>
            <img src={pinterst}></img>
            <img src={whatsapp}></img>
            <img src={twitter}></img>
            <img src={instagram}></img>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 links">
            <h3 col>Get the TMDB App</h3>
            <h3>Help</h3>
            <h3>TMDB Pro</h3>
            <h3>Privacy Policy</h3>
            <h3>Jobs</h3>
          </div>
        </div>

        <div className="row">
          <img className="tmdblogo" src={longLogo}></img>
        </div>
      </StyledFooter>
    </StyledRows>
  );
}

const StyledFooter = styled(motion.div)`
  display: flex;
  width: 100%;
  flex-direction: column;
  background-color: #0e0e0e;
  justify-content: space-around;
  align-items: center;

  .row {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .icons {
      margin-top: 3vh;

      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-evenly;
    }

    div {
      display: flex;
      color: black;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    img {
      width: 50px;
      margin: 1vw;
    }

    .links {
      margin-top: 3vh;

      color: white;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;

      h3 {
        margin: 1vw;
      }
    }

    .tmdblogo {
      width: 350px;
      margin: 2vw;
    }
  }
`;

const StyledSearched = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    width: 200px;
    margin: 0.5vw 1vh 3vw 1vh;
  }
  .row {
    display: flex;
    justify-content: baseline;
    align-items: center;
    flex-wrap: wrap;
  }
`;

const StyledRows = styled(motion.div)`
  h1 {
    padding: 6vh 1vw 1vh 1vw;
  }

  .image {
    width: 100%;
  }
  .title {
    font-family: "Noto Sans SC", sans-serif;
    color: #000000;
    position: absolute;
    top: 15vw;
    left: 10vw;
    width: 30%;
    font-size: 24px;
    text-shadow: 20px #ff0000;

    h2 {
      font-size: 4vw;
      color: #b30000;
    }
    P {
      font-size: 2vw;
      color: #b9b9b9;
      text-shadow: 1px 1px #3f3f3f;
    }
  }
`;

export default Rows;
