"use client";
import QuestionBox from "@/QuestionBox";
import { questions } from "@/dummy/questions";
import QuestionsMenu from "@/QuestionsMenu";
import { useState } from "react";
const Page = () => {
  const [activeCategory, setActiveCategory] = useState("일반사항");
  const filteredQuestions = activeCategory
    ? questions.filter((q) => q.category === activeCategory)
    : questions.filter((q) => q.category === "일반사항"); // 초기설정은 일반사항만 보이도록
  return (
    <section className="max-w-3xl mx-auto py-20 h-screen">
      <div className="flex flex-col">
        <h1 className="text-3xl text-white text-center mb-10">FAQ</h1>
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
