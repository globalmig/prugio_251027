"use client";

import Image from "next/image";
import { SendSMSForm } from "./SMSFrom";
import Kakao from "./Kakao";
import Script from "next/script";

// import KakaoMap from "./components/KaKaoMap";

export default function Home() {
  return (
    <div>
      <header className="flex justify-between items-center p-4 bg-gray-800 text-white w-full">
        <div className="flex items-center justify-between w-full max-w-[1200px] mx-auto ">
          <Image src="/image/logo-bestshop-ys.png" alt="로고" width={380} height={380} />
          <a href="#smsForm" className=" text-white font-bold px-6 py-2 rounded-xl border-[1px] border-white text-sm md:text-base hover:bg-white hover:text-gray-800 transition duration-300">
            상담예약
          </a>
        </div>
      </header>

      <main className="flex flex-col items-center justify-center  w-full h-full ">
        <div className="max-w-[1200px] ">
          <Image
            src="/image/detailpage.png"
            alt="배너"
            layout="responsive" // intrinsic이미지 비율 유지responsive
            width={1000} // 적당한 크기로 설정
            height={1300} // 비율에 맞게 설정
            priority={true} // 페이지 로드 시 우선적으로 로드
          />
        </div>

        <SendSMSForm />
        <Kakao />
      </main>
      <footer className="flex flex-col justify-center items-center p-10 bg-gray-800 text-slate-400 gap-2s text-sm mx-auto ">
        <p>대표: 김진웅 / 사업자명: 우주전자 전자랜드지점</p>
        <p>사업자등록번호: 106-85-38456</p>
        <p>주소: 서울특별시 용산구 청파로 74 용산전자랜드</p>
      </footer>
    </div>
  );
}
