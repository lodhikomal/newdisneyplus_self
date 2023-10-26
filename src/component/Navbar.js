import React from "react";
import styled from "styled-components";
import Wrapper from "./Wrapper";
import Viewers from "./Viewers";
import Reccomends from "./Reccomends";
import NewDisney from "./NewDisney";
import Original from "./Original";
import Trending from "./Trending";

function Navbar() {
  return (
    <>
      <NavBar>
        <NavLogo>
          <img src="/images/logo.svg"></img>
        </NavLogo>

        <NavItems>
          <a href="/home">
            <img src="/images/home-icon.svg" alt="HOME" />
            <span>HOME</span>
          </a>
          <a href="/search">
            <img src="/images/search-icon.svg" alt="HOME" />
            <span>search</span>
          </a>
          <a href="/watchlist">
            <img src="/images/watchlist-icon.svg" alt="HOME" />
            <span>watchlist</span>
          </a>
          <a href="/originals">
            <img src="/images/original-icon.svg" alt="HOME" />
            <span>originals</span>
          </a>
          <a href="/Movies">
            <img src="/images/movie-icon.svg" alt="HOME" />
            <span>Movies</span>
          </a>
          <a href="/Series">
            <img src="/images/series-icon.svg" alt="HOME" />
            <span>Series</span>
          </a>
        </NavItems>
      </NavBar>
      <Wrapper />
      <Viewers />
      <Reccomends />
      <NewDisney />
      <Original />
      <Trending />
    </>
  );
}

export default Navbar;
const NavBar = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  height: 70px;
  background-color: rgb(9, 11, 19);
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  padding: 0px 36px;
  letter-spacing: 16px;
  z-index: 3;
`;
const NavLogo = styled.div`
  padding: 0px;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0px;
  display: inline-block;
`;
// const Button = styled(Button)`
// `;
const NavItems = styled.div`
  -webkit-box-align: center;
  align-items: center;
  display: flex;
  flex-flow: row;
  height: 100%;
  -webkit-box-pack: end;
  justify-content: flex-end;
  margin: 0px auto 0px 25px;
  padding: 0px;
  position: relative;

  a {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding: 0px 12px;

    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }
    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;

      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1;
      }
    }
  }
`;
