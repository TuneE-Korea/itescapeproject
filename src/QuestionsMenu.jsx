"use client";
import { motion, easeOut } from "framer-motion";
const QuestionsMenu = (props) => {
  const menuList = ["일반사항", "제한사항", "결제/환불"];
  return (
    <section className="container mx-auto text-[#FAF9FB]">
      <h3 className="flex gap-20 sm:gap-40 md:gap-52 lg:gap-60 w-full justify-center">
        {/* 클릭 이벤트 추가 */}
        {menuList.map((menu, index) => {
          return (
            <motion.button
              className="break-keep"
              key={index}
              onClick={() => {
                props.setActiveCategory(menu);
                console.log(`카테고리 "${menu}"이(가) 선택되었습니다.`);
              }}
              animate={{
                color: props.activeCategory === menu ? "#57ff85" : "#FAF9FB",
              }}
              whileHover={{
                color: "#57ff85",
                transition: { duration: 0.1, ease: easeOut },
              }}
            >
              {menu}
            </motion.button>
          );
        })}
      </h3>
    </section>
  );
};
export default QuestionsMenu;
