import React from "react";
import styled from "styled-components";
import Result1 from '../assets/images/result_first.png';

export default function Result() {
    return (
        <ResultBlock>
            <CertificateImg src={Result1}/>
            <ResultButton>인증서 이미지 저장하기</ResultButton>
            <ResultButton>테스트 다시하기</ResultButton>
            <ResultButton>제작자 보러가기</ResultButton>
            <WhiteButton>링크 복사</WhiteButton>
            <WhiteButton>페북 공유</WhiteButton>
        </ResultBlock>
    );
};

const ResultBlock = styled.div`
  width: 100%;
  height: 100vh;
`;

const CertificateImg = styled.img.attrs(props => ({
    src: props.src
}))`
  width: 80%;
  margin-top: 22px;
  margin-bottom: 40px;
`;

const ResultButton = styled.button`
  border: none;
  outline: none;
  border-radius: 32px;
  cursor: pointer;

  display: block;
  width: 280px;
  padding-top: 12px;
  padding-bottom: 12px;
  margin: 0 auto;
  & + & {
    margin-top: 1rem;
  };
  
  background: #f1d5a7;
  color: black;
  font-size: 17px;
`;

const WhiteButton = styled.button`
  border: none;
  outline: none;
  border-radius: 32px;
  cursor: pointer;

  display: inline-block;
  width: 130px;
  padding-top: 12px;
  padding-bottom: 12px;
  
  background: white;
  color: black;
  font-size: 17px;
`;