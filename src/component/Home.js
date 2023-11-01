import React from "react";
import Wrapper from "./Wrapper";
import Reccomends from "./Reccomends";
import Viewers from "./Viewers";
import NewDisney from "./NewDisney";
import Original from "./Original";
import Trending from "./Trending";
import styled from "styled-components";
import { db } from "../firebase";
import { useEffect } from "react";
import { setMovie } from "../features/detailSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectUserName } from "../features/userSlice";
import { collection, getDocs } from "firebase/firestore";

function Home() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  useEffect(() => {
    const fetchData = async () => {
      let recommend = [];
      let newDisney = [];
      let original = [];
      let trending = [];
      const querySnapshot = await getDocs(collection(db, "data"));
      querySnapshot.forEach((doc, idx) => {
        // console.log(doc.data().type, idx);

        const item = doc.data();
        const docId = doc.id;
        // console.log(docId, item.type, "check");

        if (item.type == "recommend") {
          recommend.push({ id: docId, ...item });
        } else if (item.type == "new") {
          newDisney.push({ id: docId, ...item });
        } else if (item.type == "original") {
          original.push({ id: docId, ...item });
        } else if (item.type == "trending") {
          trending.push({ id: docId, ...item });
        }
      });
      dispatch(
        setMovie({
          recommend: recommend,
          newDisney: newDisney,
          original: original,
          trending: trending,
        })
      );
      // console.log("recommend", recommend);
    };
    fetchData();
  }, [userName]);

  return (
    <Container>
      <Wrapper />
      <Viewers />
      <Reccomends />
      <NewDisney />
      <Original />
      <Trending />
    </Container>
  );
}

export default Home;
const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
