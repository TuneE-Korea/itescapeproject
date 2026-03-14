"use client";
import { Menu } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="header-font">
      <nav className="container mx-auto py-5 flex justify-between items-center">
        <motion.div
          whileTap={{ scale: 0.8 }}
          whileHover={{
            scale: 1.3,
          }}
          transition={{ duration: 0.1 }}
        >
          <Link href={"/"}>IT_ESCAPE</Link>
        </motion.div>
        {/* 768px 이하에서는 메뉴 아이콘이 보이고, 그 이상에서는 숨겨진다. */}
        <Menu className="md:hidden" />
        <ul className="hidden md:flex justify-between items-center gap-10">
          <li>
            <motion.div
              whileTap={{ scale: 0.8 }}
              whileHover={{
                scale: 1.3,
              }}
              transition={{ duration: 0.1 }}
            >
              <Link href={"/rooms"}>ROOMS</Link>
            </motion.div>
          </li>
          <li>
            <motion.div
              whileTap={{ scale: 0.8 }}
              whileHover={{
                scale: 1.3,
              }}
              transition={{ duration: 0.1 }}
            >
              <Link href={"/books"}>BOOKS</Link>
            </motion.div>
          </li>
          <li>
            <motion.div
              whileTap={{ scale: 0.8 }}
              whileHover={{
                scale: 1.3,
              }}
              transition={{ duration: 0.1 }}
            >
              <Link href={"/faq"}>FAQ</Link>
            </motion.div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
