import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../class.css"

/** class 페이지의 FAQ 컴포넌트 */

const Mypage =<Link to={"/mypage"}>👉마이페이지</Link>;
const OrderList =<Link to={"/order"}>👉주문내역</Link>;

//faq 표시하기
const Faq=()=>{
    const [open,setOpen] = useState(false);
    const [open2,setOpen2] = useState(false);
    const [open3,setOpen3] = useState(false);
    const [open4,setOpen4] = useState(false);
    const [open5,setOpen5] = useState(false);
    return <section className="class-faq-box" >
    <article className="faq-item" > 
      <header>
        <button className="que" onClick={()=>setOpen(!open)}>
        Q. 난이도가 어떻게 되나요?
        <i className="arrow"></i>
        </button>
      </header>
      {open && <div className="ans">기초가 하나도 없는 사람도 쉽고 재밌게 이해할 수 있도록 자세히 설명했으니 너무 겁 먹지 말고 신청해봐요!</div>}
    </article>
    <article className="faq-item" > 
    <header>
      <button className="que" onClick={()=>setOpen2(!open2)}>
      Q. 뉴스레터로도 받아볼 수 있나요?
      <i className="arrow"></i>
      </button>
    </header>
    {open2 && <div className="ans">이 콘텐츠는 구매 후 뉴닉 웹사이트 {Mypage}에서 읽을 수 있어요. 이메일로 콘텐츠 내용을 따로 보내드리지는 않아요.</div>}
  </article>
    <article className="faq-item" > 
    <header>
      <button className="que" onClick={()=>setOpen3(!open3)}>
      Q. 구매하면 어디서 볼 수 있나요?
      <i className="arrow"></i>
      </button>
    </header>
    {open3 && <div className="ans">본 콘텐츠는, 결제 직후 {Mypage} 혹은 {OrderList}에서 읽으실 수 있답니다.</div>}
  </article>
    <article className="faq-item" > 
    <header>
      <button className="que" onClick={()=>setOpen4(!open4)}>
      Q. 열람 기간은 어떻게 되나요?
      <i className="arrow"></i>
      </button>
    </header>
    {open4 && <div className="ans">기간 제한 없이 원하는 시간에 언제든 어디서든 열어 볼 수 있어요! 100일 제한이 있던 시기에 구매하신 분들도 이제는 기간 제한이 없어요.<br/>
🦔고슴이: 언제든 열어 볼 수 있다고 미루지 마슴!</div>}
  </article>
    <article className="faq-item" > 
    <header>
      <button className="que" onClick={()=>setOpen5(!open5)}>
      Q. 매달 정기적으로 결제가 되나요?
      <i className="arrow"></i>
      </button>
    </header>
    {open5 && <div className="ans">아니요. 구매 시점에 1회 결제되고 언제든 어디서든 다시 볼 수 있어요!</div>}
  </article>
  </section>
  };

  export default Faq;