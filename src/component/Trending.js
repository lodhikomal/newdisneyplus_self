import React from "react";
import styled from "styled-components";

function Trending() {
  return (
    <Container>
      <h4>Trending</h4>

      <Wrap>
        <img
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/87F1DCF36049558159913ADFD18A800DE1121771540033EC3A7651B8FE154CEB/scale?width=400&aspectRatio=1.78&format=jpeg"
          alt="Trending"
        ></img>

        <img
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/501783804F435A386DBC4736F529A8EF664B1817CCB0B552E52D825B85B0A97B/scale?width=400&aspectRatio=1.78&format=jpeg"
          alt="Trending"
        ></img>

        <img
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg"
          alt="Trending"
        ></img>

        <img
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/509E4D9F0BF98A9DC4CDD38954380782F6AB2664E503CC7652A37D18D06666BF/scale?width=400&aspectRatio=1.78&format=jpeg"
          alt="Trending"
        ></img>
      </Wrap>
    </Container>
  );
}

export default Trending;

const Container = styled.div`
  margin-bottom: 20px;
  padding-left: 20px;
  h4 {
    text-align: start;
    padding: 10px;
  }
`;

const Wrap = styled.div`
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(4, 1fr);
  margin: auto;

  img {
    height: 150px;
    width: 300px;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      border: 3px solid white;
      transition: width 0.3s ease-in-out 0.1s, background-color 0.5s linear;
      transform: scale(1);
    }
  }
`;
