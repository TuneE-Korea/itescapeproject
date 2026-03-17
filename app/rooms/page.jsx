"use client";
import { data } from "@/dummy/data";
import Room from "@/Room";
import { motion, easeOut } from "framer-motion";

const Page = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.5, ease: easeOut },
    },
  };
  return (
    <section className="bg-[#00083046] py-16 md:py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          className="pb-10 flex flex-col items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            className="text-3xl md:text-5xl text-white text-center mb-4"
            variants={itemVariants}
          >
            당신의 코딩력, 컴퓨팅사고력, 디버깅 능력은?
          </motion.h2>
          <motion.p
            className="text-center text-sm md:text-base max-w-2xl break-keep text-white"
            variants={itemVariants}
          >
            IT_ESCAPE는 참가자가 실제 상황을 방불케 하는 특별한 테마 룸에 갇힌
            채 60분 이내에 주어진 미션을 해결하여 탈출해야하는 신개념 문화/여가
            시설입니다.
          </motion.p>
        </motion.div>
        {/* 3열 그리드로 표현하는 방탈출 목록 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 md:gap-10 justify-center items-center">
          {data.map((v, i) => (
            // 아래와 스프레드 연산자로(...)로 속성을 지정해줄 수도 있다!
            <Room key={i} {...v} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page;
