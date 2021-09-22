import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const HomeBlock = styled.div`
  background: #b98561;
  text-align: center;
`;

const ButtonStart = styled.button`
  /* 공통 스타일 */
  display: block;
  outline: none;
  border: none;
  border-radius: 18px;
  color: white;
  background: #e38238;
  font-weight: bold;
  cursor: pointer;
  padding-left: 2rem;
  padding-right: 2rem;
  margin: 0 auto;
  
  /* 크기 */
  height: 2rem;
  font-size: 1rem;
`;

const ButtonTextAbout = styled.text`
  display: block;
  outline: none;
  border: none;
  
  margin: 0 auto;
  cursor: pointer;
  
  font-size: 18px;
`;

function Home() {
    return (
        <HomeBlock>
            <h1>서울 빵 맛집잘알 인증 테스트</h1>
            <img src="https://imagescdn.gettyimagesbank.com/500/201707/a10908419.jpg"
                width="100%"/>
            <ButtonStart><Link to="/question">맛집잘알 테스트 시작하기</Link></ButtonStart>
            <ButtonTextAbout>제작자 보러가기</ButtonTextAbout>
        </HomeBlock>
    );
}

export default Home;