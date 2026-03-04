"use client";
import { CameraOff, MessageSquareOff, Skull, TimerOff } from "lucide-react";
import { motion, easeOut } from "framer-motion";
const Notices = () => {
  const NoticeVar = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.3 },
    },
  };
  const NoticeItemVar = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2, ease: easeOut },
    },
  };
  return (
    <section>
      <div className="container mx-auto my-40 flex flex-col items-center justify-center">
        <motion.div
          className="bg-amber-300 p-5 mb-20 gap-3 flex flex-col items-center"
          variants={NoticeVar}
          whileInView={{
            opacity: 1,
            scale: [1, 1.1, 1.2, 1.1, 1],
            rotate: [0, -5, 5, -5, 0],
            borderRadius: ["0%", "25%", "50%", "25%", "20%"],
          }}
          // 처음 뷰포트에 들어왔을 때만 실행!
          viewport={{ once: true }}
          // viewport에 들어오는지 체크하는 법
          // onViewportEnter={(entry) => console.log(entry.isIntersecting)}
        >
          <h3 className="text-5xl text-center font-bold ">NOTICE</h3>
          <span className="text-xl text-center">🙏주의사항🙏</span>
        </motion.div>

        <motion.div
          className="flex justify-between gap-10"
          variants={NoticeVar}
          initial="hidden"
          whileInView={"visible"}
          // 처음 뷰포트에 들어왔을 때만 실행!
          viewport={{ once: true }}
        >
          <motion.article
            variants={NoticeItemVar}
            className="flex flex-col items-center"
            whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
          >
            <TimerOff size={100} color="white" />
            <h5 className="text-[#FAF9FB]">10분전 도착</h5>
            <p className="text-[#FAF9FB]">예약시간 10분전에 도착해주세요.</p>
          </motion.article>

          <motion.article
            variants={NoticeItemVar}
            className="flex flex-col items-center"
            whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
          >
            <MessageSquareOff size={100} color="white" />
            <h5 className="text-[#FAF9FB]">누설금지</h5>
            <p className="text-[#FAF9FB]">
              아직 체험하지 않는 분들이 계시기에 스포금지 요청드립니다.
            </p>
          </motion.article>
          <motion.article
            variants={NoticeItemVar}
            className="flex flex-col items-center"
            whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
          >
            <CameraOff size={100} color="white" />
            <h5 className="text-[#FAF9FB]">사진촬영금지</h5>
            <p className="text-[#FAF9FB]">
              컨셉 저작권으로 인하여 촬영 금지합니다.
            </p>
          </motion.article>
          <motion.article
            variants={NoticeItemVar}
            className="flex flex-col items-center"
            whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
          >
            <Skull size={100} color="white" />
            <h5 className="text-[#FAF9FB]">위험물품 반입금지</h5>
            <p className="text-[#FAF9FB]">
              고객의 안전을 위해서 위험물품은 금지합니다.
            </p>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
};

export default Notices;
