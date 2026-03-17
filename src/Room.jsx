import { Key } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Room = (props) => {
  return (
    <article className="bg-slate-700 p-4 md:p-8 flex flex-col gap-3 items-center rounded-xl">
      <div className="relative w-full max-w-[400px] aspect-[2/3]">
        <Image
          className="object-cover rounded-md"
          fill
          priority
          src={props.image}
          alt={props.title || "방탈출 룸 이미지"}
        />
      </div>
      <span className="text-white text-xl flex gap-1">
        난이도:{" "}
        {Array(props.keys)
          .fill(0)
          .map((v, i) => (
            <Key key={i} />
          ))}
      </span>
      <span className="text-white text-xl">{props.title}</span>
      <Link href={`/rooms/${props.id}`}>
        <button className="bg-orange-300 hover:bg-orange-200 p-4 rounded-lg">
          상세보기
        </button>
      </Link>
    </article>
  );
};

export default Room;
