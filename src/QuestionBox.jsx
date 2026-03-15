"use client";
import {
  MessageCircleQuestionMark,
  ArrowUp,
  ArrowDown,
  MessageCircleReply,
} from "lucide-react";
import { useState } from "react";
import { motion, easeOut, AnimatePresence } from "framer-motion";
const QuestionBox = (props) => {
  // 여기서 state를 관리하는 이유는 각 질문마다 답변이 열리고 닫히는 상태를 개별적으로 관리하기 위함.
  // 만약 부모 컴포넌트에서 isOpen 상태를 관리한다면, 모든 질문이 동시에 열리거나 닫히게 됨.
  const [isOpen, setIsOpen] = useState(false);

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: easeOut } },
  };
  return (
    <motion.div
      className="flex flex-col items-start text-white"
      variants={itemVariants}
      initial="hidden"
      animate="visible"
    >
      {/* 질문 내용 */}
      <motion.button
        className="flex gap-2 items-center"
        onClick={() => {
          setIsOpen((prev) => !prev);
          console.log(
            `질문 "${props.question}"의 답변이 ${!isOpen ? "열렸습니다" : "닫혔습니다"}.`,
          );
        }}
        whileHover={{
          color: "#57ff85",
          transition: { duration: 0.1, ease: easeOut },
        }}
      >
        <MessageCircleQuestionMark />
        <p> {props.question}</p>
        <motion.div
          whileTap={{
            scale: 0.9,
          }}
        >
          {isOpen ? <ArrowUp /> : <ArrowDown />}
        </motion.div>
      </motion.button>
      {/* 답변 내용 */}
      {/* 위에서 아래로 스르륵 내려오는 애니메이션 효과 추가 */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="flex gap-2 items-start mt-2 overflow-hidden"
            initial={{ opacity: 0, height: 0, y: -8 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -8 }}
            transition={{ duration: 0.25, ease: easeOut }}
          >
            <MessageCircleReply />
            <p className="whitespace-pre-line">{props.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default QuestionBox;
