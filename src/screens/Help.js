import React, { useState } from "react";
import "/newneek/newneek-clone/src/index.css";
import faqDB from "../utils/faqDB";

export default function Help() {
    console.log(Object.create(faqDB));
  return (
      <div>
        <h1 className="help title">고객센터를 통해 <br></br>궁금증을 해결하세요.</h1>
        <div className="faq">
            <div className="faq title">
                자주 묻는 질문
            </div>
            <div className="faq contents">
                <div className="que">구독했는데 뉴스레터가 안 와요.</div>
                <div className="ans"></div>
            </div>
            <div className="faq contents">
                <div className="que">지난 뉴스레터는 어디서 볼 수 있나요?</div>
                <div className="ans"></div>
            </div>
            <div className="faq contents">
                <div className="que">이미 뉴스레터를 구독 중인데요, 웹사이트도 가입해야 하나요?</div>
                <div className="ans"></div>
            </div>
            <div className="faq contents">
                <div className="que">수신거부하고 싶어요.</div>
                <div className="ans"></div>
            </div>
            <div className="faq contents">
                <div className="que">구독하는 이메일/닉네임 바꾸고 싶어요.</div>
                <div className="ans"></div>
            </div>
            <div className="faq contents">
                <div className="que">결제한 콘텐츠, 환불하고 싶어요.</div>
                <div className="ans"></div>
            </div>
            <div className="faq contents">
                <div className="que">제 피드백에 답장이 잘 안 와요.</div>
                <div className="ans"></div>
            </div>
        </div>
      </div>
  );
}