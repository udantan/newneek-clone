import React, { useState } from "react";
import {DESC, DESC_UNSUBSCRIBE, DESC_NOARRIVAL} from "../utils/faqDB";
import TextFieldStyle from "../utils/TextField.module.css";
import "../help.css";

export default function Help() {
    const [topicDesc, setTopicDesc] = useState(DESC);

    function selectTopic(event){
        switch (event.target.value){
            case "unsubscribe" : setTopicDesc(DESC_UNSUBSCRIBE);break;
            case "noarrival" : setTopicDesc(DESC_NOARRIVAL);
            break;
            case "refund" : setTopicDesc(<TextField/>);
            break;
            case "branded" : setTopicDesc(<TextField/>);
            break;
            case "etc" : 
            setTopicDesc(<TextField/>);
            break;
        }
    }

    function TextField(){ return(
        <div className={TextFieldStyle.textfield}>
            <form>
            <input name="email" type="text" className={TextFieldStyle.textfieldinput} placeholder="뉴스레터를 구독하거나 회원가입을 한 이메일을 적어주세요."/>
            <textarea className={`${TextFieldStyle.textfieldinput} ${TextFieldStyle.desc}`} placeholder="문의 내용을 적어주세요."></textarea>
            </form>
            <p className={TextFieldStyle.privacytitle}>개인정보 수집·이용에 대한 안내</p>
            <p className={TextFieldStyle.privacydesc}>문의를 접수하고 회신하기 위해 최소한의 개인정보(이메일과 문의내용)를 수집하며 후속조치를 위해 1년간 보관합니다. 개인정보 수집·이용을 거부할 수 있으며, 이 경우 답변이 제한됩니다. 더 자세한 내용에 대해서는 개인정보처리방침을 참고하시기 바랍니다.</p>
            <button className={TextFieldStyle.contactbtn}>문의하기</button>
        </div>)
    }

  return (
      <div className="help">
        <h1 className="help title">고객센터를 통해 <br></br>궁금증을 해결하세요.</h1>
        <div className="faq">
            <div className="faq title">
                자주 묻는 질문
            </div>
            <div className="faq contents">
                <div className="que"><i id="icon">✔</i>구독했는데 뉴스레터가 안 와요.</div>
                <div className="ans"></div>
            </div>
            <div className="faq contents">
                <div className="que"><i id="icon">✔</i>지난 뉴스레터는 어디서 볼 수 있나요?</div>
                <div className="ans"></div>
            </div>
            <div className="faq contents">
                <div className="que"><i id="icon">✔</i>이미 뉴스레터를 구독 중인데요, 웹사이트도 가입해야 하나요?</div>
                <div className="ans"></div>
            </div>
            <div className="faq contents">
                <div className="que"><i id="icon">✔</i>수신거부하고 싶어요.</div>
                <div className="ans"></div>
            </div>
            <div className="faq contents">
                <div className="que"><i id="icon">✔</i>구독하는 이메일/닉네임 바꾸고 싶어요.</div>
                <div className="ans"></div>
            </div>
            <div className="faq contents">
                <div className="que"><i id="icon">✔</i>결제한 콘텐츠, 환불하고 싶어요.</div>
                <div className="ans"></div>
            </div>
            <div className="faq contents">
                <div className="que"><i id="icon">✔</i>제 피드백에 답장이 잘 안 와요.</div>
                <div className="ans"></div>
            </div>
        </div>
        <section className="faq-contact">
            <span className="faq-contact-emoji">✋</span>
            <h2 className="faq-contact-title">해결이 안 된 문제가 있나요?</h2>
            <p className="faq-contact-description">문의내용을 남겨주세요. 영업일 기준 5일 내에 입력해주신 이메일로 답변 드릴게요!<br></br> (단, 일방적인 비방에는 답변을 드리지 않을 수 있어요.)</p>
            <p className="faq-contact-description">🦔고슴이: 뉴닉은 일월화수목 근무하슴!</p>
            <select name ="topic" id="topic-select" onChange={selectTopic}>
                <option value="" disabled selected>주제를 선택해주세요.</option>
                <option value="unsubscribe">뉴스레터 구독 해지해주세요.</option>
                <option value="noarrival">뉴스레터가 안 와요.</option>
                <option value="refund">환불해 주세요.</option>
                <option value="branded">뉴닉 뉴스레터에 광고 또는 제휴를 하고 싶어요</option>
                <option value="etc">기타</option>
            </select>
            <p className="faq-contact-description">{topicDesc}</p>
        </section>
      </div>
  );
}