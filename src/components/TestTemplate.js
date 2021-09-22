import React from "react";
import styled from "styled-components";

const TestTemplateBlock = styled.div`
  width: 375px;
  height: 812px;

  position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
  background: #b98561;
  
  margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */
  display: flex;
  flex-direction: column;
`;

function TestTemplate({ children }) {
    return <TestTemplateBlock>{children}</TestTemplateBlock>;
}

export default TestTemplate;