"use client";

import Image from "next/image";
import { SendSMSForm } from "./SMSFrom";
import Kakao from "./Kakao";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Home() {
  const [hideButton, setHideButton] = useState(false);
  const smsFormRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!smsFormRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // SendSMSForm이 화면에 보이면 true -> 버튼 숨기기
        setHideButton(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.1, // 10% 이상 보이면 감지
      }
    );

    observer.observe(smsFormRef.current);
    window.scrollTo(0, 0);
    return () => {
      if (smsFormRef.current) observer.unobserve(smsFormRef.current);
    };
  }, []);

  // 상담예약 버튼 클릭시 스크롤 처리 함수
  const scrollToForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (smsFormRef.current) {
      const headerHeight = 74; // 헤더 높이
      const windowHeight = window.innerHeight;
      const element = smsFormRef.current as HTMLDivElement;
      const formHeight = element.offsetHeight;

      // 폼 요소의 위치
      const formTop = element.getBoundingClientRect().top + window.scrollY;

      // 폼이 화면 중앙에 오도록 계산 (헤더 높이 고려)
      const scrollPosition = formTop - (windowHeight - formHeight) / 2 - headerHeight;

      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <header className="flex justify-between items-center p-4 bg-white text-emerald-900 w-full h-[74px] fixed shadow-lg">
        <div className="flex items-center justify-between w-full max-w-[1000px] mx-auto">
          <Link href="/">
            <div className="md:w-80 w-64">
              <Image src="/image/logo.png" alt="로고" width={380} height={380} priority={true} layout="responsive" />
            </div>
          </Link>
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToForm}
              className="text-white bg-emerald-900 font-bold px-4 hidden md:block md:px-6 py-2 rounded-xl border-[1px] border-white text-base hover:bg-white hover:text-gray-800 transition duration-300"
            >
              상담예약
            </button>
            <Link href="/Call" className="flex items-center gap-2">
              <button className="group gap-1 text-white bg-emerald-900 font-bold px-3 md:px-4 py-2 rounded-xl border-[1px] border-white text-base hover:bg-white hover:text-gray-800 transition duration-300 hidden sl:flex">
                <Image src="/image/Icon_call.png" alt={"전화 아이콘"} width={20} height={20} className="group-hover:hidden block transition duration-300" />
                <Image src="/image/Icon_call_black.png" alt={"전화 아이콘"} width={20} height={20} className="group-hover:block hidden" />
                전화상담
              </button>
              <button className="group hidden   gap-1 text-white font-bold px-2 md:px-4 py-2 rounded-xl border-[1px] border-white text-base hover:bg-white hover:text-gray-800 transition duration-300">
                <Image src="/image/Icon_call.png" alt={"전화 아이콘"} width={20} height={20} className="group-hover:hidden block transition duration-300" />
                <Image src="/image/Icon_call_black.png" alt={"전화 아이콘"} width={20} height={20} className="group-hover:block hidden" />
                상담
              </button>
              <button className="group sm:flex sl:hidden flex gap-1 text-white font-bold px-2 md:px-4 py-2 rounded-xl border-[1px] border-white  hover:bg-white hover:text-gray-800 transition duration-300 text-sm">
                <Image src="/image/Icon_call.png" alt={"전화 아이콘"} width={20} height={20} className="group-hover:hidden block transition duration-300" />
                <Image src="/image/Icon_call_black.png" alt={"전화 아이콘"} width={20} height={20} className="group-hover:block hidden" />
              </button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex flex-col items-center justify-center w-full h-full pt-[74px] bg-emerald-950">
        <div className="w-full max-w-[1000px] mx-auto">
          <div className="relative">
            <Image
              src="/image/hero2.png"
              alt="배너"
              width={1000}
              height={1600}
              quality={100}
              priority
              className="block mx-auto" // 🔥 이 한 줄이 핵심!
            />
            {/* <div className="text-white absolute top-10 left-1/2 -translate-x-1/2 text-center space-y-4">
              <p className="text-3xl md:text-5xl font-bold">아파트분양</p>
              <p className="text-3xl md:text-5xl font-bold">임차인 모집 예정</p>
              <p className="text-2xl pt-2 md:pt-8">1533-9896 </p>
              <p className="text-2xl">010-5487-1618</p>
            </div> */}
          </div>

          <Image
            src="/image/detailpage_prugio.png"
            alt="배너"
            width={1000} // 최대 보여줄 크기로 설정
            height={1600} // 비율에 맞춰 계산 (예시)
            quality={100} // 화질 최대치
            priority
          />
        </div>

        {/* SendSMSForm에 ref 달기 */}
        <div id="smsForm" ref={smsFormRef} className="w-full">
          <SendSMSForm />
        </div>

        {/* <Kakao /> */}
      </main>

      {/* 모바일 전용 하단 예약 버튼 (SendSMSForm 보이면 숨김) */}
      {!hideButton && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] xs:block md:hidden z-50">
          <button onClick={scrollToForm} className="block w-full bg-emerald-900 text-white text-center font-bold py-3 rounded-xl shadow-lg hover:bg-emerald-600 transition duration-300">
            빠른 상담 예약하기
          </button>
        </div>
      )}

      <footer className="flex flex-col justify-center items-center px-10 py-10 bg-[#163020] text-slate-500 gap-2s text-sm mx-auto">
        <div className="md:w-80 w-64 mb-10 text-center">
          <Image src="/image/logo_white.png" alt="로고" width={380} height={380} priority={true} layout="responsive" />
        </div>
        <p>대표: 박종환</p>
        <p>법인명: 위너스법원경매</p>
        <p>사업자등록번호: 327-05-03362</p>
        <p className="text-center">주소: 세종특별자치시 새롬중앙로 20, 803동 210호(새롬동, 새뜸마을 8단지)</p>
      </footer>
    </div>
  );
}
