import Link from "next/link";

const ReservationButton = (props) => {
  return (
    <Link
      href={`/reservation/${props.id}?time=${
        props.time
      }&date=${props.date.getFullYear()}/${
        props.date.getMonth() + 1
      }/${props.date.getDate()}`}
    >
      <button
        className={`${
          props.isReserved ? "bg-red-200" : "bg-sky-200"
        } py-2 px-4 flex flex-col items-center border rounded-full hover:cursor-pointer hover:bg-[#57ff85]`}
      >
        <span>{props.isReserved ? "예약 완료" : "예약 가능"}</span>
        <span>{props.time}</span>
      </button>
    </Link>
  );
};

export default ReservationButton;
