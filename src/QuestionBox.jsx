import {
  MessageCircleQuestionMark,
  ArrowDown,
  MessageCircleReply,
} from "lucide-react";
const QuestionBox = (props) => {
  return (
    <div className="flex flex-col items-start text-white">
      {/* 질문 내용 */}
      <div className="flex gap-2 items-center">
        <MessageCircleQuestionMark />
        <p> {props.question}</p>
        <ArrowDown />
      </div>
      {/* 답변 내용 */}
      <div className="flex gap-2">
        <MessageCircleReply />
        <p className="whitespace-pre-line">{props.answer}</p>
      </div>
    </div>
  );
};

export default QuestionBox;
