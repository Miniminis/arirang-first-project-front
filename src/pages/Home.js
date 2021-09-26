import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import MainImg from '../assets/images/main.png';
import BtnStart from '../assets/images/btn_start.png';
import BtnAbout from '../assets/images/btn_about.png';

function Home() {
    return (
        <HomeBlock>
            <Link to="/question"><StartButton/></Link>
            <Link to="/about"><AboutButton/></Link>
        </HomeBlock>
    );
}

export default Home;


const HomeBlock = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${MainImg});
  background-repeat: no-repeat;
`;

const StartButton = styled.img.attrs({
    src: BtnStart
})`
  display: inline-block;
  position: fixed;
  margin: 0 auto;
  left: 0;
  right: 0;
  bottom: 5rem;
  cursor: pointer;
`;

const AboutButton = styled.img.attrs({
    src: BtnAbout
})`
  display: inline-block;
  position: fixed;
  margin: 0 auto;
  left: 0;
  right: 0;
  bottom: 2rem;
  cursor: pointer;
`;
