import React from "react";
import styled from "styled-components";

function Original() {
  return (
    <Container>
      <h4>Originals</h4>

      <Wrap>
        <img
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/CC08686E87BDB2D83A46C9608CB2F43018381A82608C380649351A00ED0D2919/badging?width=400&aspectRatio=1.78&format=jpeg&label=originals"
          alt="original"
        ></img>

        <img
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E486A02FA7B60669E77958D4FAE567AA5C9C57344006E1D1ADFC080719545166/badging?width=400&aspectRatio=1.78&format=jpeg&label=originals"
          alt="original"
        ></img>

        <img
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A13BEC78ACF76FC91A94A1595A62A42CC26DFC6259332C74E061ADA379024E5C/badging?width=400&aspectRatio=1.78&format=jpeg&label=originals"
          alt="original"
        ></img>

        <img
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F8D1A6FD00ED479CC5E2E5C3E85F10EB05550748BD3C0FE76756614071968541/badging?width=400&aspectRatio=1.78&format=jpeg&label=originals"
          alt="original"
        ></img>
      </Wrap>
    </Container>
  );
}

export default Original;

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
