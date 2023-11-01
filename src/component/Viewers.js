import React from "react";
import styled from "styled-components";
import disneyImg from "../assets/images/viewers-disney.png";
import pixarImg from "../assets/images/viewers-pixar.png";
import marvelImg from "../assets/images/viewers-marvel.png";
import starwarImg from "../assets/images/viewers-starwars.png";
import nationalImg from "../assets/images/viewers-national.png";
import disneyvideo from "../assets/images/videos/1564674844-disney.mp4";
import pixarvideo from "../assets/images/videos/1564676714-pixar.mp4";
import marvelvideo from "../assets/images/videos/1564676115-marvel.mp4";
import starvideo from "../assets/images/videos/1608229455-star-wars.mp4";
import nationalvideo from "../assets/images/videos/1564676296-national-geographic.mp4";

function Viewers() {
  return (
    <Container>
      <Wrap>
        <img src={disneyImg} alt="" />
        <video autoPlay={true} loop={true} playsInline={true} muted={true}>
          <source src={disneyvideo} type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src={pixarImg} alt=""></img>
        <video autoPlay={true} loop={true} playsInline={true} muted={true}>
          <source src={pixarvideo} type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src={marvelImg} alt=""></img>
        <video autoPlay={true} loop={true} playsInline={true} muted={true}>
          <source src={marvelvideo} type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src={starwarImg} alt=""></img>
        <video autoPlay={true} loop={true} playsInline={true} muted={true}>
          <source src={starvideo} type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src={nationalImg} alt=""></img>
        <video autoPlay={true} loop={true} playsInline={true} muted={true}>
          <source src={nationalvideo} type="video/mp4" />
        </video>
      </Wrap>
    </Container>
  );
}

export default Viewers;

const Container = styled.div`
margin-top: 50px;
padding: 30px 30px 30px 30px;
display: grid;
gap: 25px;
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
@media (max-width: 768px) {
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
}
`;

const Wrap = styled.div`
  box-shadow: rgba(0, 0, 0, 0.69) 0px 26px 30px -10px,
    rgba(0, 0, 0, 0.73) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  padding-top: 56.25%;
  // padding-left: 20px;
  border-radius: 10px;
  border: 3px solid rgba(249, 249, 249, 0.1);
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms cubic-bezier(0.9, 0.53, 0.58, 1) 0s;
    width: 100%;
    z-index: 1;
  }
  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    opacity: 0;
    z-index: 0;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;

    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);

    video {
      opacity: 1;
    }
  }
`;
