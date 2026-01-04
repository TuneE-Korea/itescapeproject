import Notices from "@/Notices";
import SliderBanner from "@/SliderBanner";

export default function Home() {
  return (
    <>
      {/* 슬라이드 바 컴포넌트 */}
      <SliderBanner />
      {/* 주의사항 컴포넌트 */}
      <Notices />
    </>
  );
}
