import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import badgingImg from "../assets/images/slider-badging.jpg";
import scaleImg from "../assets/images/slider-scale.jpg";
import badagImg from "../assets/images/slider-badag.jpg";
import scalesImg from "../assets/images/slider-scales.jpg";

function Wrapper() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
  };
  return (
    <>
      <Carousel {...settings}>
        <Wrap>
          <a>
            <img src={badgingImg} alt="" />
          </a>
        </Wrap>
        <Wrap>
          <a>
            <img src={scaleImg} alt="" />
          </a>
        </Wrap>
        <Wrap>
          <a>
            <img src={badagImg} alt="" />
          </a>
        </Wrap>
        <Wrap>
          <a>
            <img src={scalesImg} alt="" />
          </a>
        </Wrap>
      </Carousel>
    </>
  );
}

export default Wrapper;
const Carousel = styled(Slider)`
  // background-color: red;
  margin-top: 20px;

  & > button {
    // background-color: red;
    top: 50%;
    margin-right: 25px;
    border-radius: 50%;
    visibility: hidden;
  }
`;

const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;

  padding: 50px 20px;

  a {
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;

    img {
      width: 100%;
      height: 100%;
    }

    &:hover {
      padding: 0;
      border: 4px solid rgba(249, 249, 249, 0.8);
      transition-duration: 300ms;
    }
  }
`;
