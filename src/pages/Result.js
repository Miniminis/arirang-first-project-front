import React from "react";
import styled from "styled-components";
import Result1 from '../assets/images/result_first.png';
import Result2 from '../assets/images/result_second.png';
import Result3 from '../assets/images/result_third.png';
import useAsync from "../components/useAsync";
import {useTestStateContext} from "../components/TestContext";
import axios from "axios";


async function getTestResult(resultId) {
    console.log('api getTestResult called');

    const response = await axios.get(
        `http://localhost:8080/v1/result/${resultId}`
    );

    return response.data;
}


function getResultImgs() {
    const resultImgMap = new Map();

    resultImgMap.set(1, Result1);
    resultImgMap.set(2, Result2);
    resultImgMap.set(3, Result3);

    return resultImgMap;
}

export default function Result() {

    const testState = useTestStateContext();
    const resultId = testState.resultId;
    console.log('in component result : ' + resultId);

    const [state] = useAsync(() => getTestResult(resultId), [resultId]);
    const { loading, data: certificate, error } = state;

    console.log('certificate : ' + certificate);

    if (loading) return <div>loading...</div>;
    if (error) return <div>error!</div>;
    if (certificate === null) return <div>no certificate is available</div>;
    if (certificate.status_code !== 200) return <div>status_code is not 200</div>
    if (certificate.data == null ) return <div>no certificate is available yet</div>;

    console.log(certificate.data);
    const certificateLevel = certificate.data.level;

    const resultimg = getResultImgs();

    return (
        <ResultBlock>
            <CertificateImg src={resultimg.get(certificateLevel)}/>
            <ResultButton>인증서 이미지 저장하기</ResultButton>
            <ResultButton>테스트 다시하기</ResultButton>
            <a href="https://spiky-glass-379.notion.site/861ce3989a6e469d92a1b15a7e9d0d7e">
                <ResultButton>제작자 보러가기</ResultButton>
            </a>
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
  font-weight: bold;
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