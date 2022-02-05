import { Link } from "react-router-dom";
const Mypage =<Link to={"/mypage"}>👉마이페이지</Link>;

const faq_content = [
    {
        id:1,
        question:"Q. 난이도가 어떻게 되나요?",
        answer:"기초가 하나도 없는 사람도 쉽고 재밌게 이해할 수 있도록 자세히 설명했으니 너무 겁 먹지 말고 신청해봐요!"
    },{
        id:2,
        question:"Q. 뉴스레터로도 받아볼 수 있나요?",
        answer:"이 콘텐츠는 구매 후 뉴닉 웹사이트에서 읽을 수 있어요. 이메일로 콘텐츠 내용을 따로 보내드리지는 않아요."
    },{
        id:3,
        question:"Q. 구매하면 어디서 볼 수 있나요?",
        answer:"본 콘텐츠는, 결제 직후"+Mypage+"혹은 에서 읽으실 수 있답니다."
    },{
        id:4,
        question:"Q. 열람 기간은 어떻게 되나요?",
        answer:"기간 제한 없이 원하는 시간에 언제든 어디서든 열어 볼 수 있어요! 100일 제한이 있던 시기에 구매하신 분들도 이제는 기간 제한이 없어요.<br/>🦔고슴이: 언제든 열어 볼 수 있다고 미루지 마슴!"
    },{
        id:5,
        question:"Q. 매달 정기적으로 결제가 되나요?",
        answer:"아니요. 구매 시점에 1회 결제되고 언제든 어디서든 다시 볼 수 있어요!"
    }
]



export default faq_content;