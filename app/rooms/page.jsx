import { data } from "@/dummy/data";
import Room from "@/Room";

const Page = () => {
  return (
    <section className="bg-[#00083046] py-20">
      <div className="container mx-auto">
        <div className="pb-10">
          <h2 className="text-5xl text-white text-center mb-4">
            당신의 코딩력, 컴퓨팅사고력, 디버깅 능력은?
          </h2>
          <p className="text-center text-white">
            IT_ESCAPE는 참가자가 실제 상황을 방불케 하는 특별한 테마 룸에 갇힌
            채 60분 이내에
            <br />
            주어진 미션을 해결하여 탈출해야하는 신개념 문화/여가 시설입니다.
          </p>
        </div>
        {/* 3열 그리드로 표현하는 방탈출 목록 */}
        <div className="grid grid-cols-3 gap-10 justify-center items-center">
          {data.map((v, i) => (
            // 아래와 스프레드 연산자로(...)로 속성을 지정해줄 수도 있다!
            <Room key={i} {...v} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page;
