import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import { db } from "../firebase";
import { getDocs, doc, collection } from "firebase/firestore";
import playImg from "../assets/images/play-icon-black.png";
import trailerImg from "../assets/images/play-icon-white.png";
import groupImg from "../assets/images/group-icon.png";

function Detail() {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "data"), id);
      console.log(querySnapshot, "querySnapshot");
      const newData = [];
      querySnapshot.forEach((doc, idx) => {
        // console.log(doc.data(), idx, "454545");
        // const data = doc.data();
        // const docId = doc.id;
        if (doc.id == id) {
          const data = doc.data();
          setDetailData(data);
        }
      });
      // console.log(newData, "check");
    };
    fetchData();
  }, [id]);
  console.log(detailData, "finally");
  return (
    <Container>
      <BackGround>
        {/* <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/49B92C046117E89BC9243A68EE277A3B30D551D4599F23C10BF0B8C1E90AEFB6/scale?width=1440&aspectRatio=1.78&format=jpeg" /> */}

        <img src={detailData.backgroundImg} alt={detailData.title} />
      </BackGround>
      <TitleImg>
        <img src={detailData.titleImg} alt={detailData.title} />
      </TitleImg>
      <Controls>
        <Button>
          <img src={playImg} alt="play" />
          <span>play</span>
        </Button>
        <Trailer>
          <img src={trailerImg} alt="trailer"></img>

          <span>Trailer</span>
        </Trailer>
        <PlayList>
          <span />+
          <span />
        </PlayList>
        <GroupWatch>
          <div>
            <img src={groupImg} alt="" />
          </div>
        </GroupWatch>
      </Controls>
      <SubTitle>{detailData.subTitle}</SubTitle>
      <Description>{detailData.description}</Description>
    </Container>
  );
}

export default Detail;
const Container = styled.div`
  position: relative;
  min-height: calc(100vh-250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  @media (max-width: 768px) {
    min-height: calc(100vh - 150px);
    padding: 0 calc(2.5vw + 5px);
    top: 56px;
  }
`;
const BackGround = styled.div`
  left: 0px;
  opacity: 0.8;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: -1;
  object-fit: cover;

  img {
    width: 100vw;
    height: 100vh;
  }

  @media (max-width: 768px) {
    left: 0px;
    right: 0px;
  }
`;
const TitleImg = styled.div`
  align-items: flex-end;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  margin: 0px auto;
  height: 30vw;
  min-height: 170px;
  padding-bottom: 24px;
  width: 100%;

  img {
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
  }
  @media (max-width: 768px) {
    height: 150px;
    padding-bottom: 12px;

    img {
      width: 100%;
    }
  }
`;
const Controls = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  margin: 24px 0px;
  min-height: 56px;
  max-width: 874px;
  @media (max-width: 768px) {
    flex-direction: column;
    /* width: 100%; */
    gap: 20px;
    padding-left: 20px;
  }
`;
const Button = styled.div`
  font-size: 15px;
  margin: 0px 22px 0px 0px;
  padding: 0px 24px;
  height: 56px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  background: white;
  border: none;
  color: rgb(0, 0, 0);
  img {
    width: 32px;
  }

  &:hover {
    background: rgb(198, 198, 198);
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Trailer = styled.div`
  font-size: 15px;
  margin: 0px 22px 0px 0px;
  padding: 0px 24px;
  height: 56px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  background: transparent;
  border: 1px solid grey;
  color: white;
  img {
    width: 32px;
  }

  &:hover {
    background: rgb(198, 198, 198);
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const PlayList = styled.div`
  margin-right: 16px;
  height: 44px;
  width: 44px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;
  img {
    width: 32px;
  }
  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    font-size: 12px;
    margin: 0px 10px 0px 0px;

    img {
      width: 25px;
    }
  }
`;
const GroupWatch = styled.div`
  height: 44px;
  width: 44px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: white;

  div {
    height: 40px;
    width: 40px;
    background: rgb(0, 0, 0);
    border-radius: 50%;

    img {
      width: 100%;
    }
  }
  @media (max-width: 768px) {
    height: 40px;
    width: 40px;

    div {
      height: 36px;
      width: 36px;

      img {
        width: 100%;
      }
    }
  }
`;
const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  padding: 16px 0px;
  color: rgb(249, 249, 249);

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
