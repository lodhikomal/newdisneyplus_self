import React from "react";
import styled from "styled-components";

function Reccomends() {
  return (
    <Container>
      <h4>Reccomends For you</h4>

      <Wrap>
        <img
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/87F1DCF36049558159913ADFD18A800DE1121771540033EC3A7651B8FE154CEB/scale?width=400&aspectRatio=1.78&format=jpeg"
          alt="recommend"
        ></img>

        <img
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/706C68FF1CEA5A9C2AE0608892C2DF79E4AC1F0DDB4BFF7FE6DAFC36DAFC0286/scale?width=400&aspectRatio=1.78&format=jpeg"
          alt="recommend"
        ></img>

        <img
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C0A883EAB54DDDC924018D08CF4555EE72B3E9A8C214BDADF29CB82B5E2275D7/scale?width=400&aspectRatio=1.78&format=jpeg"
          alt="recommend"
        ></img>

        <img
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/01666FAA085FF29B709DB13975E563E5E047DAAFF7D8F331201CB73F3C30027E/scale?width=400&aspectRatio=1.78&format=jpeg"
          alt="recommend"
        ></img>
      </Wrap>
    </Container>
  );
}

export default Reccomends;

const Container = styled.div`
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
