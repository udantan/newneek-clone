import { useState, useEffect } from "react";
import "../class.css"

/** class 페이지의 FAQ 컴포넌트 */


//faq 표시하기
const Faq=({question, answer})=>{
    const [open,setOpen] = useState(false);
    return <article className="faq-item" > 
      <header>
        <button className="que" onClick={()=>setOpen(!open)}>
        {question}
        <i className="arrow"></i>
        </button>
      </header>
      {open && <div className="ans">{answer}</div>}
    </article>
  };

  export default Faq;