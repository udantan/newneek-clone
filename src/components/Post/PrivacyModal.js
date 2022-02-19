import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function PrivacyModal() {
  return (
    <Container>
      <h1>개인정보 수집·이용 동의</h1>
      <p>뉴닉은 뉴스레터 발송을 위해 최소한의 개인정보를 수집하고 이용합니다.</p>
      <table>
        <tbody>
          <tr>
            <th>수집·이용 목적</th>
            <th>수집·이용 항목</th>
            <th>보유·이용 기간</th>
          </tr>
          <tr>
            <td>뉴닉 뉴스레터 발송</td>
            <td>이메일주소</td>
            <td>서비스 종료 시 또는 뉴스레터 구독 해지 시 즉시 파기</td>
          </tr>
        </tbody>
      </table>

      <strong>동의를 거부하는 경우에 대한 안내</strong>
      <p>
        동의하지 않을 경우 개인정보 수집·이용 동의를 거부할 권리가 있습니다. 거부할 경우 뉴스레터 구독 서비스를 이용할
        수 없습니다.
      </p>
      <h1 style={{ marginTop: 48 }}>개인정보 처리 위탁·수탁</h1>
      <p>
        회사는 서비스 제공 및 향상을 위해서 아래와 같이 개인정보를 위탁하고 있으며, 관계 법령에 따라 위탁 계약 시
        개인정보가 안전하게 관리될 수 있도록 필요한 사항을 규정하고 있습니다.
      </p>
      <table>
        <tbody>
          <tr>
            <th>수탁업체</th>
            <th>수탁업무 내용</th>
            <th>개인정보의 보유 및 이용기간</th>
          </tr>
          <tr>
            <td>스티비</td>
            <td>뉴스레터 또는 광고가 포함된 뉴스레터 발송, 서비스 이용 통계 및 분석</td>
            <td>구독해지 시 또는 위탁계약 종료 시</td>
          </tr>
          <tr>
            <td>AWS</td>
            <td>개인정보가 저장된 국내 클라우드 서버 운영 및 관리</td>
            <td>구독해지 시 또는 위탁계약 종료 시</td>
          </tr>
        </tbody>
      </table>
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
  th,
  td {
    margin: 10px;
    padding: 10px;
    text-align: left;
  }
  th {
    font-weight: 600;
  }
  table {
    border-collapse: collapse;
    table-layout: fixed;
    border-spacing: 12px;
  }
  tr {
    border-bottom: 0.1px solid rgba(0, 0, 0, 0.2);
  }
  strong {
    margin-top: 15px;
    font-weight: 600;
  }
`;
