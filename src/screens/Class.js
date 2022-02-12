import React from "react";
import "../class.css";
import { Link } from "react-router-dom";
import Faq from "../components/Faq";

export default function Class() {

  
  return (
  <div className="class-all">
    <section className="class">
      <h2 className="class-title">고슴이 생존기 - 경제 기본기편 나나나나</h2>
      <div className="class-head">
        <img src="https://newneek.co/static/media/economy-thumbnail.0e2ed4c5.png" alt="고슴이 생존기" className="class-thumbnail"/>
        <div className="class-head-info">
          <h2>고슴이와 함께 <br/>경제 기본기 마스터하겠슴?</h2>
          <p className="class-head-info-desc">고슴이 에피소드 읽으면서 쉽고 재밌게 <br/>하루 5분으로 열흘 만에 경제 기본기를 마스터할 수 있어요.</p>
          <div className="minicard">
            <ul className="minicard-1">
              <li><i className="minicard-emoji">⏰</i>하루 5분</li>
              <li><i className="minicard-emoji">🗓️</i>이용기간 무제한</li>
            </ul>
            <ul className="minicard-2">
              <li><i className="minicard-emoji">📖</i>에피소드 10개</li>
              <li><i className="minicard-emoji">🤼</i><del>얼리버드 500명(마감)</del></li>
            </ul>
          </div>
          <div className="class-head-price">
            <del>\25,000</del>
            <p>\16,000</p>
            <p style={{color:"#ff6b00"}}>(36% 할인)</p>
          </div>
          <div className="class-head-button">
            <button className="buy_bt">콘텐츠 구매하기<i>→</i></button>
            <button className="share_bt">공유</button>
          </div>
        </div>
      </div>
    </section>
    <hr />
    <section className="class-main">
      <div className="class-main-head">
        <img src="https://newneek.co/static/media/economy-logo.ef18c74e.png" alt="생존기 -경제 기본기편-"/>
        <p className="class-main-head-desc">주식부터 환율까지 삶에서 필수적인 경제 개념들을 마스터합니다.<br/>
  총 10개의 주제는 5분 분량의 기사로 구성되어 있으며, 경제초보 고슴이의 성장기를 담았답니다.</p>
      </div>  
      <div className="zigzag"></div>
      <div>
        <h2 className="class-main-why">경제라니...<br/>나 좀 머리 아파. 왜 읽어야 해?</h2>
        <div className="class-main-why-desc">
          <div className="class-main-why-desc-item">
            <i>🌏</i>
            <span>세상을 이해하려면, 경제는 필수니까</span>
            <p>하지만 학교, 학원, 부모님도 제대로 안 알려준 그것. 경제를 안다는 건 우리 사회가 어떻게 굴러가는지 이해하고 해석하기 위해 꼭 필요한 첫걸음이죠.</p>
          </div>
          <div className="class-main-why-desc-item">
            <i>💰</i>
            <span>10년 후에도 내 지갑이 귀여울 순 없어</span>
            <p>뉴닉과 함께 경제의 기초 체력을 쌓아두면, 분명 뉴닉 기사와 신문이 다르게 읽힐 거고요. 다른 세상이 열리면, 저금만 하던 나의 경제 생활과 선택도 한층 달라질 겁니다.</p>
          </div>
        </div>
      </div>
      <div className="zigzag"></div>
      <div className="class-main-who">
        <h2>이건 누가 읽으면 좋아?</h2>
        <p className="thisguy">이런 말이 절로 나오는 사람들!</p>
        <div className="class-main-who-desc">
          <i>😱</i>
          <div className="class-main-who-desc-item">
            <h3>"남들은 재테크 한다는데 나는 금리도 몰라!"</h3>
            <p>부동산, 주식 등에 도전하기 전, 기본적인 용어들과 전체 경제의 흐름을 이해할 수 있어요.</p>
          </div>
        </div>
        <div className="class-main-who-desc">
          <i>🤑</i>
          <div className="class-main-who-desc-item">
            <h3>"전문 용어로 빼곡한 경제 뉴스, 영자신문보다 어려워!"</h3>
            <p>기준금리, CPI, 관세가 어쩌구... 뉴닉은 다 쉽게 풀어낼 수 있습니다. 뉴닉이니까요.</p>
          </div>
        </div>
        <div className="class-main-who-desc">
          <i>😵</i>
          <div className="class-main-who-desc-item">
            <h3>"경제 개론서를 사봤지만 첫 챕터에서 늘 덮게 돼!"</h3>
            <p>이미 경제 공부를 혼자 도전했지만 어렵고 지루했다면 고슴이 생존기가 정답!</p>
          </div>
        </div>
        <p className="and-too">그리고 또...</p>
        <ul>
          <li>경제 기본기가 아예 없는 사람</li>
          <li>경제 막 공부 시작했는데, 누가 전체적인 그림 한 번 싹 알려주면 좋겠다고 생각한 사람</li>
          <li>주변 사람들 주식하고 부동산 한다는데, 적금길만 걸어온 사람</li>
          <li>고슴이의 생존스토리 궁금한 사람</li>
        </ul>
      </div>
      <div className="zigzag"></div>
      <div className="class-main-spec">
        <h2>[고슴이 생존기: 경제 기본기편]의 특징은요</h2>
        <div className="class-main-spec-desc">
          <div className="class-main-spec-desc-item">
            <span>💁‍♂️</span>
            <h3>쉽고 재밌어요</h3>
            <p>뉴니커라면 아시죠? 뉴닉이 뉴닉하면 어려운 내용도 얼마나 쉽고 재밌어지는지. 고슴이의 10개의 에피소드를 재밌어서 읽고 나면, 이미 똑똑해져있을 거예요.</p>
          </div>
          <div className="class-main-spec-desc-item">
            <span>👩🏻‍🎓</span>
            <h3>경제 기초를 개괄했어요</h3>
            <p>부분 부분 지식을 알긴 쉽지만, 전체적인 그림을 한 번 훑기는 어렵죠. 뉴닉에서는 [물가, 금리, 주식, 환율, 국제경제] 이 5개의 카테고리를 통해 전체적인 맥락을 모두 짚었습니다.</p>
          </div>
          <div className="class-main-spec-desc-item">
            <span>🦔</span>
            <h3>고슴이가 리마인드 해줘요</h3>
            <p>설레는 마음으로 책 사던 나와는 달리, 이걸 읽는 나는 설레지 않을 수 있다는 거... 이쯤 되면 우리 모두 알잖아요? 이 콘텐츠를 끝까지 재밌게 읽을 수 있도록 고슴이가 리마인드 이메일을 보내 줄 예정.</p>
          </div>
        </div>
      </div>
      <div className="zigzag"></div>
      <div className="class-main-episode">
        <h2>에피소드 소개</h2>
        <div className="class-main-episode-box">
          <img src="https://newneek.co/static/media/episode1.ed37b877.png"/>
          <div className="episode-info">
            <span>물가편</span>
            <span>Episode 1. 배추값이 금값이다?</span>
            <p>최애 장바구니 들고 장 보러 간 고슴이. 평소에 좋아하던 배춧국을 끓여먹어려는데, 배추값이 금값이다? 마침 틀어져 있는 TV에서도 소비자물가가 올랐다는데... 도대체 물가는 뭐고, 우리 경제랑 어떻게 관련이 되는 건지를 알아본다.</p>
          </div>
        </div>
        <div className="class-main-episode-box">
          <img src="https://newneek.co/static/media/episode2.f273600e.png"/>
          <div className="episode-info">
            <span>경기편</span>
            <span>Episode 2. 슴배가 감자칩을 하나 더 사줬으면</span>
            <p>물가 말고 경기는 또 뭐지? 경기가 좋으면 슴배가 감자칩을 하나 더 사줬을까? 물가에 이어 우리 나라와 전 세계 경제를 진단하는 다양한 방법에 대해 알아본다.</p>
          </div>
        </div>
        <div className="class-main-episode-box">
          <img src="https://newneek.co/static/media/episode3.34578234.png"/>
          <div className="episode-info">
            <span>금리편</span>
            <span>Episode 3. 금...리라고라?</span>
            <p>물가는 이해 완료. 이제 막 들어오는 돈을 저축하러 은행에 간 고슴이는 금...리는 또 뭔지 어렵기만 하다. 똑똑이 대학 슴배와 함께 금리는 뭐고, 누가 정하는지 금리의 세계를 살짝 엿본다.</p>
          </div>
        </div>
        <div className="class-main-episode-box">
          <img src="https://newneek.co/static/media/episode4.c6dfeb43.png"/>
          <div className="episode-info">
            <span>미국금리편</span>
            <span>Episode 4. 고객님~ 오늘 해외 뉴스 보셨죠?</span>
            <p>"고객님~ 저희 은행 찾아주셔서 감사합니다. 오늘 뉴스 보셨죠? 미국이 기준금리를 올렸다고 하더라고요. 곧 우리나라 금리도 올라갈 것 같은데 호호..." 한국 금리만 알면 되는지 알았던가. 미국 금리뿐만 아니라, 그게 어떻게 우리나라 금리와 내 통장에까지 영향을 주는지 다 연결되어 있다니? 슴배와 함께한 고슴이, 이제 전 세계 어떤 금리 이슈든, 척척금리사가 된다.</p>
          </div>
        </div>
        <div className="class-main-episode-box">
          <img src="https://newneek.co/static/media/episode5.c7997893.png"/>
          <div className="episode-info">
            <span>금융편</span>
            <span>Episode 5. 어쩌다 마주친 개미의 모습에 고슴이 마음을 빼앗겨 버렸네</span>
            <p>슴배와 이야길 나누면서 두려울 게 없어진 고슴이. 자신 있게 은행 문을 박차고 들어가지만, 대기 번호부터 뽑아야 했고 기다리는 동안 선물, 옵션 등 어려운 금융상품 소개서를 읽고 좌절한다. 그때, 개미를 만난다. 개미: 나와 함께라면 없던 배당금도 생긴다구. 킬킬.</p>
          </div>
        </div>
        <div className="class-main-episode-box">
          <img src="https://newneek.co/static/media/episode6.40b659a3.png"/>
          <div className="episode-info">
            <span>주식편</span>
            <span>Episode 6. 고슴도치의 꽃은 고슴이, 자본주의의 꽃은 바로</span>
            <p>자본주의의 꽃 주식. 개미를 만난 김에 고슴이는 주식이 뭐고, 주식 시장은 어떻게 움직이는지까지 전부 마스터한다. 한층 당당해진 고슴이.</p>
          </div>
        </div>
        <div className="class-main-episode-box">
          <img src="https://newneek.co/static/media/episode7.eef4cd4e.png"/>
          <div className="episode-info">
            <span>환율편</span>
            <span>Episode 7. 은행에서 선물이 도착했다</span>
            <p>고슴이가 까먹고 살았던 적금이 만기가 되었다고 알려준 것! 슴배가 노랠 부르던 우정 여행을 함께 가기로 결심한다. 그런데 공항에 도착하자마자 깜박한 것이 있었는데, 바로 환전! 환율은 어떻게 정해지고 경제에 어떤 영향을 끼치는지 알아본다.</p>
          </div>
        </div>
        <div className="class-main-episode-box">
          <img src="https://newneek.co/static/media/episode8.cc004c7c.png"/>
          <div className="episode-info">
            <span>환율과 IMF편</span>
            <span>Episode 8. 20년 전 그 사건</span>
            <p>라운지에 앉아 환율에 대해 한껏 더 파보는데... 우리나라가 예전에 환율에 크게 당한 적이 있다고? 고슴이는 약 20년 전 우리나라에 찾아온 IMF를 한층 더 쉽게 이해할 수 있게 된다.</p>
          </div>
        </div>
        <div className="class-main-episode-box">
          <img src="https://newneek.co/static/media/episode9.ef3a3033.png"/>
          <div className="episode-info">
            <span>무역편</span>
            <span>Episode 9. 떠나요 둘이서</span>
            <p>슴배와 함께 미국 뉴욕으로 향한 고슴이. 비행기에서 고슴이는 영자신문을 읽는다. 무역은 왜 하는 걸까? 수지타산이 맞다는 건 뭘까? 국제경제와 무역을 마스터하는 고슴이.</p>
          </div>
        </div>
        <div className="class-main-episode-box">
          <img src="https://newneek.co/static/media/episode10.1557ed95.png"/>
          <div className="episode-info">
            <span>관세&자유무역편</span>
            <span>Episode 10. 왜 늘 화가 나 있을까</span>
            <p>고슴이는 왜 트럼프 아저씨가 늘 화가 나 있는지 궁금해진다. 그 질문을 꺼내는 게 아니었는데... 미국에 도착하기까지 고슴이는 뜬 눈으로 슴배의 이야길 듣고 관세와 자유 무역에 대해 이해하게 된다.</p>
          </div>
        </div>
        <p style={{margin:"1rem 0px"}}>*이 콘텐츠는 전문 경제 연구원의 검수를 받았습니다.</p>
      </div>
      <div className="zigzag"></div>
      <div className="class-review">
        <header>
          <h2>후기</h2>
          <span>베타 테스터들은 이런 후기를 남겼어요!</span>
        </header>
        <div className="review-box">
          <div className="review-item">
            <p>어릴 때 그리스 로마 신화 만화도 재밌어서 생각없이 보다 보니까 이것저것 많이 알게 되는 거잖아요. 이번 뉴닉 콘텐츠도 그런 마음으로 읽고 나니, 이제 친구들이 주식 얘기할 때나 어른들이 얘기할 때 무슨 얘기하는 지 다 알아들을 수 있겠어요.</p>
            <p>시영 도슴이, 만화 전공 대학생</p>
          </div>
          <div className="review-item">
            <p>주식을 하는 중인데요. '서킷브레이커' 같은 개념까지 정확하게 알려주는 것도 좋고, 필요한 내용이 다 있는 것 같아요.</p>
            <p>승아 도슴이, 초등학교 교사</p>
          </div>
          <div className="review-item">
            <p>되게 좋았어요. 이걸 읽고 나서 볼 수 있는 것들, 생각할 수 있는 것들이 확 넓어지는 거잖아요. 특히 경제 같은 부분은 저희와 밀접된 관계를 가지고 살아가는 주제라서 의미가 있다고 생각해요.</p>
            <p>인환 도슴이, 교직원 및 커피 일 종사 중</p>
          </div>
        </div>
      </div>
      <div className="zigzag"></div>
      <div className="class-notice">
        <h2>안내 말씀/ 주의 사항</h2>
        <div className="class-notice-desc">
          <div className="class-notice-desc-item">
            <h3>이용 및 저작권</h3>
            <p>모든 저작권은 뉴닉에 있으며, 무단 전재 및 재배포, 복사는 금지되어있습니다. 위반 시 법적 책임이 따를 수 있습니다.</p>
          </div>
          <div className="class-notice-desc-item">
            <h3>뉴닉 아이디 공유 금지 정책</h3>
            <p>아이디 공유는, 1개의 아이디로 여러 명이 공유하여 콘텐츠를 열람하는 형태로, 뉴닉에서는 이를 금지하고 있습니다. 동시접속에 대한 기록이 내부 시스템을 통해 자동으로 누적되며, 동시 접속 기록이 10회 이상 확인되는 경우 사전 안내 없이 아이디가 차단될 수 있습니다.</p>
          </div>
          <div className="class-notice-desc-item">
            <h3>환불 정책</h3>
            <p>결제 후 열람을 시작한 경우에는 결제된 금액은 환불해드리지 않습니다. 결제 후 어떤 콘텐츠도 열람하지 않으신 경우에는, 결제일로부터 7일 이내에 <Link to={"/help"}>👉고객센터</Link>로 요청해주시면 환불을 도와드립니다.</p>
          </div>
        </div>
      </div>
      <div className="zigzag"></div>
      <div className="class-faq">
        <h2>자주 묻는 질문</h2>
        <Faq/>
        <p>더 궁금한 것이 있다면 <Link to={"/help"}>👉고객센터</Link>로 문의해 주세요. 고맙슴!</p> 
      </div>
    </section>
  </div>
  );
}