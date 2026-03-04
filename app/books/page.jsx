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
      <div className="container mx-auto py-20">
        <h2 className="text-3xl text-white text-center mb-10">Reservation</h2>
        <div className="flex justify-center">
          <Calendar onChange={setValue} value={value} />
        </div>
        {/* 예약 표를 map으로 뿌려주기 */}
        <div className="flex flex-col gap-40 w-full p-20">
          {data.map((v, i) => (
            <Reservation key={i} {...v} date={value} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page;
