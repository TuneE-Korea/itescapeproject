"use client";
import { data } from "@/dummy/data";
import Reservation from "@/Reservation";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Page = () => {
  const [value, setValue] = useState(new Date());

  return (
    <section className="bg-[#00083046]">
      <div className="container mx-auto py-12 md:py-20 px-4">
        <h2 className="text-2xl md:text-3xl text-white text-center mb-6 md:mb-10 font-bold">
          Reservation
        </h2>

        <div className="flex justify-center w-full mb-10 md:mb-13">
          <div className="w-full max-w-[350px] bg-white p-2 rounded-xl shadow-lg">
            <Calendar
              onChange={setValue}
              value={value}
              className="w-full border-none"
            />
          </div>
        </div>

        {/* 예약 표를 map으로 뿌려주기 */}
        <div className="flex flex-col gap-10 md:gap-20 w-full p-20">
          {data.map((v, i) => (
            <Reservation key={i} {...v} date={value} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page;
