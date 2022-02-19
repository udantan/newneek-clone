import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../../utils/colors";

export default function AdsModal() {
  return (
    <Container>
      <h1>광고성 정보 수신 동의</h1>
      <p>광고성 정보 수신에 동의하실 경우, 뉴닉은 이메일 뉴스레터에 광고성 정보를 함께 발송할 수 있습니다.</p>
      <p>
        뉴닉은 타 기업, 단체, 브랜드와 광고 콘텐츠를 만들어 종종 소개하는데요. 읽는 사람에게 방해가 되는 광고가 아닌,
        협업하는 조직의 전문성과 뉴닉만의 스토리텔링을 더해 더욱 유익하고 재밌는 콘텐츠를 만들어내고자 노력하고
        있습니다. 더불어 광고성 정보 수신에 동의한다고 하더라도, 광고 콘텐츠가 이메일 뉴스레터에 들어가는 경우 꼭 제목에
        (광고)를 붙여 메일을 발송합니다.
      </p>
      <p>
        현재는 뉴스레터에서 광고성 정보만 따로 보내는 것이 어렵기 때문에, 광고성 정보 수신 동의를 하지 않을 경우 서비스
        이용이 제한될 수 있습니다. 뉴닉의 광고성 정보 수신 서비스를 원하지 않을 경우, 뉴스레터 하단의 '수신 거부'를 눌러
        서비스 이용을 해지할 수 있습니다.
      </p>
      <p>
        혹시 뉴닉의 광고에 대해 더 자세히 알고 싶다면,{" "}
        <Link style={{ color: colors.orange }} to={"/branded/policy"}>
          이 링크
        </Link>
        를 클릭하세요.
      </p>
    </Container>
  );
}
const Container = styled.div`
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-family: "BM-Air";
  line-height: 26px;
  h1 {
    font-family: "BM-Pro";
    font-size: 20px;
  }
  p {
    margin-bottom: 15px;
  }
`;
