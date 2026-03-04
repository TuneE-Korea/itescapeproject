import { Key } from "lucide-react";
import Image from "next/image";
import ReservationButton from "./ReservationButton";

const Reservation = (props) => {
  // 예약 가능한 시간대(1시간 단위)를 배열로 만들어주는 함수
  const makeTables = (startTime, endTime) =>
    Array(endTime - startTime + 1)
      .fill(0)
      .map((v, i) => ({ time: i + startTime + ":00", isReserved: false }));

  return (
    <article className="flex gap-20 border border-cyan-700 rounded-2xl p-10">
      <picture className="relative flex-2 w-full h-[600px]">
        <Image
          src={props.image}
          alt={""}
          priority
          fill
          className="object-cover rounded-md"
        />
      </picture>
      <div className="flex flex-3 flex-col gap-10">
        <strong className="text-white text-2xl">{props.title}</strong>
        <span className="flex items-center gap-1 text-white">
          <span>난이도: </span>
          {Array(props.keys)
            .fill(0)
            .map((v, i) => (
              <Key key={i} color="white" />
            ))}
        </span>
        <div className="grid grid-cols-3 gap-10">
          {makeTables(props.startTime, props.endTime).map((v, i) => (
            <ReservationButton key={i} {...v} id={props.id} date={props.date} />
          ))}
        </div>
      </div>
    </article>
  );
};

export default Reservation;
