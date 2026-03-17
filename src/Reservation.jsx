import { Key } from "lucide-react";
import Image from "next/image";
import ReservationButton from "./ReservationButton";

const Reservation = (props) => {
  // 예약 가능한 시간대(1시간 단위)를 배열로 만들어주는 함수
  const makeTables = (startTime, endTime) =>
    Array(endTime - startTime + 1)
      .fill(0)
      .map((_, i) => ({ time: i + startTime + ":00", isReserved: false }));

  return (
    <article className="flex flex-col gap-4 lg:flex-row lg:gap-10 border border-cyan-700 rounded-2xl p-10">
      <picture className="relative w-full lg:w-3/5 aspect-[3/4] overflow-hidden rounded-xl">
        <Image
          src={props.image}
          alt={""}
          priority
          fill
          className="object-cover rounded-md"
        />
      </picture>
      <div className="flex flex-col w-full lg:w-3/5 gap-6 lg:gap-8 justify-center break-keep">
        <strong className="text-white text-2xl">{props.title}</strong>
        <span className="flex items-center gap-1 text-white">
          <span>난이도: </span>
          {Array(props.keys)
            .fill(0)
            .map((v, i) => (
              <Key key={i} color="white" className="w-4 h-4 md:w-5 md:h-5" />
            ))}
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-5">
          {makeTables(props.startTime, props.endTime).map((v, i) => (
            <ReservationButton key={i} {...v} id={props.id} date={props.date} />
          ))}
        </div>
      </div>
    </article>
  );
};

export default Reservation;
