import react from "react";
import Item from "./Item";
import { motion } from "framer-motion";
import styled from "styled-components";

//img, key, score, name
const baseURL = "https://image.tmdb.org/t/p/w400";

function Row({ content, type }) {
  return (
    <StyledRow>
      {content.map((item) => (
        <div key={item.id}>
          {type === "movie" && item.poster_path && (
            <Item
              img={`${baseURL}${item.poster_path}`}
              name={item.original_title}
              score={item.vote_average}
              id={item.id}
              overview={item.overview}
              type={type}
            />
          )}

          {type === "tv" && item.poster_path && (
            <Item
              img={`${baseURL}${item.poster_path}`}
              name={item.name}
              score={item.vote_average}
              id={item.id}
              overview={item.overview}
              type={type}
            />
          )}
        </div>
      ))}
    </StyledRow>
  );
}

export const StyledRow = styled(motion.div)`
  display: flex;

  overflow-x: scroll;
  position: relative;

  ::-webkit-scrollbar {
    height: 5px; /* height of horizontal scrollbar ← You're missing this */
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
  }
`;

export default Row;
