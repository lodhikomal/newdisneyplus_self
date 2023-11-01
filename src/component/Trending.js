import React from "react";
import styled from "styled-components";
import { selectTrending } from "../features/detailSlice.js";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Reccomends() {
  const movies = useSelector(selectTrending);
  console.log(movies, "show");
  return (
    <Container>
      <h4>Trending</h4>
      <Content>
        {movies &&
          movies.map((movie, key) => {
            return (
              <>
                <Wrap key={key}>
                  <Link to={`/detail/` + movie.id}>
                    <img src={movie.cardImg} alt={movie.title}></img>
                  </Link>
                </Wrap>
              </>
            );
          })}
      </Content>
    </Container>
  );
}
// console.log(movies, "show");
export default Reccomends;

const Container = styled.div`
  padding-left: 0px 0px 26px;
`;
const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

const Wrap = styled.div`
  display: grid;
  gap: 25px;

  margin: auto;

  img {
    inset: 0px;
    height: 100%;
    width: 100%;
    max-width: 300px;
    border-radius: 5px;
    cursor: pointer;
    object-fit: cover;

    &:hover {
      border: 3px solid white;
      transition: width 0.3s ease-in-out 0.1s, background-color 0.5s linear;
      transform: scale(1);
    }
  }
`;
