"use client";
import { data } from "@/dummy/data";
import { Key } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";

const Page = () => {
  const params = useParams();
  // params는 { id: '1' } 이런식으로 객체 형태로 넘어온다.
  const thisData = data.find((v) => v.id == +params.id);
  return (
    <section className="bg-[#00083046] h-screen p-40">
      <div className="container w-full h-full mx-auto flex gap-20">
        <picture className="relative w-full h-full p-20 flex-1">
          <Image
            className="object-cover rounded-md"
            src={thisData.image}
            alt={""}
            fill
            priority
          />
        </picture>

        <div className="flex-1 flex flex-col gap-8">
          <h2 className="text-5xl font-bold text-white">{thisData.title}</h2>
          <span className="flex gap-1 text-lg text-white">
            Level:
            {Array(thisData.keys)
              .fill(0)
              .map((v, i) => (
                <Key key={i} />
              ))}
          </span>
          <p className="text-md text-white">
            방 설명: <br />
            {thisData.detail}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Page;
