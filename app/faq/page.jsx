"use client";
import QuestionBox from "@/QuestionBox";
import { questions } from "@/dummy/questions";
import QuestionsMenu from "@/QuestionsMenu";
import { useState } from "react";
const Page = () => {
  const [activeCategory, setActiveCategory] = useState("일반사항");
  const filteredQuestions = activeCategory // activeCategory가 존재하면(선택된 게 있으면) 해당 카테고리의 질문을 필터링, 그렇지 않으면 일반사항을 기본값으로 설정
    ? questions.filter((q) => q.category === activeCategory)
    : questions.filter((q) => q.category === "일반사항"); // 일반사항을 기본값으로 설정
  return (
    <section className="max-w-3xl mx-auto py-20 h-screen">
      <div className="flex flex-col">
        <h1 className="text-3xl text-white text-center mb-10">FAQ</h1>
        {/* props로 activeCategory와 setActiveCategory 전달 */}
        <QuestionsMenu
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <div className="flex flex-col items-start gap-5 mt-10">
          {filteredQuestions.map((v, i) => (
            <QuestionBox key={i} question={v.question} answer={v.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page;
