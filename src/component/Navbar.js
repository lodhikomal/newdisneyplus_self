import React from "react";
import styled from "styled-components";
import Wrapper from "./Wrapper";
import Viewers from "./Viewers";
import Reccomends from "./Reccomends";
import NewDisney from "./NewDisney";
import Original from "./Original";
import Trending from "./Trending";
import LogoImg from "../assets/images/logo.svg";
import HomeImg from "../assets/images/home-icon.svg";
import SearchImg from "../assets/images/search-icon.svg";
import WatchImg from "../assets/images/watchlist-icon.svg";
import OriginalImg from "../assets/images/original-icon.svg";
import MovieImg from "../assets/images/movie-icon.svg";
import SeriesImg from "../assets/images/series-icon.svg";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
// import { async } from "@firebase/util";
import { useEffect } from "react";
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState,
} from "../features/userSlice";
import { useDispatch, useSelector } from "react-redux";

function Navbar() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  const navigate = useNavigate();
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        navigate("/home");
      }
    });
  }, [userName]);

  const handleAuthenticate = () => {
    if (!userName) {
      signInWithPopup(auth, provider)
        .then((result) => {
          navigate("/home");
          const user = result.user;
          console.log("user signed in", user);
        })
        .catch((error) => {
          console.log("no signin", error);
        });
    } else if (userName) {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          navigate("/");
        })
        .catch((err) => alert(err.message));
    }
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  return (
    <>
      <NavBar>
        <NavLogo>
          <img src={LogoImg}></img>
        </NavLogo>
        {!userName ? (
          <NavButton onClick={handleAuthenticate}>Login</NavButton>
        ) : (
          <>
            <NavItems>
              <a href="/home">
                <img src={HomeImg} alt="HOME" />
                <span>HOME</span>
              </a>
              <a href="/search">
                <img src={SearchImg} alt="HOME" />
                <span>search</span>
              </a>
              <a href="/watchlist">
                <img src={WatchImg} alt="HOME" />
                <span>watchlist</span>
              </a>
              <a href="/originals">
                <img src={OriginalImg} alt="HOME" />
                <span>originals</span>
              </a>
              <a href="/Movies">
                <img src={MovieImg} alt="HOME" />
                <span>Movies</span>
              </a>
              <a href="/Series">
                <img src={SeriesImg} alt="HOME" />
                <span>Series</span>
              </a>
            </NavItems>
            <SignOut>
              <UserImg src={userPhoto} alt={userName} />
              <DropDown>
                <span onClick={handleAuthenticate}>Sign Out</span>
              </DropDown>
            </SignOut>
          </>
        )}
      </NavBar>

      {/* <Viewers />
      <Reccomends />
      <NewDisney />
      <Original />
      <Trending /> */}
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
  @media (max-width: 768px) {
    display: none;
  }
`;
const NavButton = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

const UserImg = styled.img`
  height: 100%;
`;
const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 12px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
`;
const SignOut = styled.div`
  position: relative;
  // height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  ${UserImg} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }

  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;
