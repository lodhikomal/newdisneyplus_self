import React from "react";
import styled from "styled-components";

function NewDisney() {
  return (
    <Container>
      <h4>NewDisney</h4>

      <Wrap>
        <img
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B983FF22BA64B6E19E0D3267280819B26758CFB765E8BED1099D11E320612953/scale?width=400&aspectRatio=1.78&format=jpeg"
          alt="recommend"
        ></img>

        <img
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1E0501AFBAFCA1ABB5D31DBA7D1A913B2A35D70FD3DFD804939B71901577161D/scale?width=400&aspectRatio=1.78&format=jpeg"
          alt="recommend"
        ></img>

        <img
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/341AE85B6C1423B9042B5F2E786645EE551B9D546C3D263B220A4727617FD2B8/badging?width=400&aspectRatio=1.78&format=jpeg&label=originals"
          alt="recommend"
        ></img>

        <img
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4B32D8CB7C0C358E9FF348FB0338AD13F9A5836808E9EF5FADD9DBDE52FC3CAD/scale?width=400&aspectRatio=1.78&format=jpeg"
          alt="recommend"
        ></img>
      </Wrap>
    </Container>
  );
}

export default NewDisney;

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
