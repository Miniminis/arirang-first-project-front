import React, {useEffect} from "react";
import styled from "styled-components";
import Result1 from '../assets/images/result_first.png';
import Result2 from '../assets/images/result_second.png';
import Result3 from '../assets/images/result_third.png';
import useAsync from "../components/useAsync";
import {useTestDispatchContext, useTestStateContext} from "../components/TestContext";
import axios from "axios";
import {BsArrowCounterclockwise, BsLink45Deg, FaFacebookF, FiDownload, IoIosRocket} from 'react-icons/all';
import ErrorPage from "../components/ErrorPage";
import {useHistory} from "react-router-dom";


async function getTestResult(resultId) {
    console.log('api getTestResult called');

    const response = await axios.get(
        `https://api-arirang.docking.zone/v1/result/${resultId}`
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


export default function Result({ ...props }) {
    const history = useHistory();가

    const search = props.location.search;
    const params = new URLSearchParams(search);

    const dispatch = useTestDispatchContext();

    const testState = useTestStateContext();
    let resultId = testState.resultId;
    console.log(`initial resultId ${resultId}`);

    if (params !== null && params.has('resultId')) {
        resultId = params.get('resultId');
        console.log(`param resultId ${resultId}`);
    }

    console.log(`final component result id ${resultId}`);
    const [state] = useAsync(() => getTestResult(resultId), [resultId]);
    const { loading, data: certificate, error } = state;

    console.log('certificate : ' + certificate);

    if (loading) return <div>loading...</div>;
    if (error) return <ErrorPage/>;
    if (certificate === null) return <div>no certificate is available</div>;
    if (certificate.status_code !== 200) return <div>status_code is not 200</div>
    if (certificate.data == null ) return <div>no certificate is available yet</div>;

    console.log(certificate.data);
    const certificateLevel = certificate.data.level;

    const resultimg = getResultImgs();

    const onRetry = ()=> {
        dispatch({ type: 'INITIALIZE' });
        history.push("/");
    }

    const onFaceBookShare = () => {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=https://arirang.docking.zone/result?resultId=${resultId}`);
    }

    const onCopyLink = ()=> {
        //링크복사
        //https://arirang.docking.zone/result?resultId=${resultId}
    }

    return (
        <ResultBlock>
            <CertificateImg src={resultimg.get(certificateLevel)}/>
            <ResultButton><FiDownload/> 인증서 이미지 저장하기</ResultButton>
            <ResultButton
                onClick={onRetry}><BsArrowCounterclockwise/> 테스트 다시하기</ResultButton>
            <ResultButton>
                <a href="https://spiky-glass-379.notion.site/861ce3989a6e469d92a1b15a7e9d0d7e">
                    <IoIosRocket/> 제작자 보러가기
                </a>
            </ResultButton>
            <WhiteButton marginRight="0.5rem"><BsLink45Deg/> 링크 복사</WhiteButton>
            <WhiteButton
                marginLeft="0.5rem"
                onClick={onFaceBookShare}><FaFacebookF/> 페북 공유</WhiteButton>
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
  margin-top: 3rem;
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

  margin-top: 1rem;
  margin-bottom: 3rem;
  margin-right: ${props => props.marginRight || 0};
  margin-left: ${props => props.marginLeft || 0};
  
  background: white;
  color: black;
  font-size: 17px;
  
`;