import { Link } from "react-router-dom";
const Mypage =<Link to={"/mypage"}>πλ§μ΄νμ΄μ§</Link>;

const faq_content = [
    {
        id:1,
        question:"Q. λμ΄λκ° μ΄λ»κ² λλμ?",
        answer:"κΈ°μ΄κ° νλλ μλ μ¬λλ μ½κ³  μ¬λ°κ² μ΄ν΄ν  μ μλλ‘ μμΈν μ€λͺνμΌλ λλ¬΄ κ² λ¨Ήμ§ λ§κ³  μ μ²­ν΄λ΄μ!"
    },{
        id:2,
        question:"Q. λ΄μ€λ ν°λ‘λ λ°μλ³Ό μ μλμ?",
        answer:"μ΄ μ½νμΈ λ κ΅¬λ§€ ν λ΄λ μΉμ¬μ΄νΈμμ μ½μ μ μμ΄μ. μ΄λ©μΌλ‘ μ½νμΈ  λ΄μ©μ λ°λ‘ λ³΄λ΄λλ¦¬μ§λ μμμ."
    },{
        id:3,
        question:"Q. κ΅¬λ§€νλ©΄ μ΄λμ λ³Ό μ μλμ?",
        answer:"λ³Έ μ½νμΈ λ, κ²°μ  μ§ν"+Mypage+"νΉμ μμ μ½μΌμ€ μ μλ΅λλ€."
    },{
        id:4,
        question:"Q. μ΄λ κΈ°κ°μ μ΄λ»κ² λλμ?",
        answer:"κΈ°κ° μ ν μμ΄ μνλ μκ°μ μΈμ λ  μ΄λμλ  μ΄μ΄ λ³Ό μ μμ΄μ! 100μΌ μ νμ΄ μλ μκΈ°μ κ΅¬λ§€νμ  λΆλ€λ μ΄μ λ κΈ°κ° μ νμ΄ μμ΄μ.<br/>π¦κ³ μ΄μ΄: μΈμ λ  μ΄μ΄ λ³Ό μ μλ€κ³  λ―Έλ£¨μ§ λ§μ΄!"
    },{
        id:5,
        question:"Q. λ§€λ¬ μ κΈ°μ μΌλ‘ κ²°μ κ° λλμ?",
        answer:"μλμ. κ΅¬λ§€ μμ μ 1ν κ²°μ λκ³  μΈμ λ  μ΄λμλ  λ€μ λ³Ό μ μμ΄μ!"
    }
]



export default faq_content;