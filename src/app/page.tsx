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
      <header className="flex justify-between items-center p-4 bg-gray-800 text-white w-full h-[74px] fixed">
        <div className="flex items-center justify-between w-full max-w-[1000px] mx-auto">
          <Link href="/">
            <div className="md:w-80 w-64">
              <Image src="/image/logo-bestshop-ys.png" alt="로고" width={380} height={380} priority={true} layout="responsive" />
            </div>
          </Link>
          <button
            onClick={scrollToForm}
            className="text-white font-bold px-4 hidden sm:inline-block md:px-6 py-2 rounded-xl border-[1px] border-white text-base hover:bg-white hover:text-gray-800 transition duration-300"
          >
            상담예약
          </button>
        </div>
      </header>

      <main className="flex flex-col items-center justify-center w-full h-full pt-[74px] ">
        <div className="w-full max-w-[1000px] mx-auto">
          <Image
            src="/image/detailpage.png"
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

        <Kakao />
      </main>

      {/* 모바일 전용 하단 예약 버튼 (SendSMSForm 보이면 숨김) */}
      {!hideButton && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] sm:hidden z-50">
          <button onClick={scrollToForm} className="block w-full bg-[#7A26FF] text-white text-center font-bold py-3 rounded-xl shadow-lg hover:bg-[#24114c] transition duration-300">
            빠른 상담 예약하기
          </button>
        </div>
      )}

      <footer className="flex flex-col justify-center items-center p-10 bg-gray-800 text-slate-400 gap-2s text-sm mx-auto ">
        <p>대표: 김진웅 / 사업자명: 우주전자 전자랜드지점</p>
        <p>사업자등록번호: 106-85-38456</p>
        <p>주소: 서울특별시 용산구 청파로 74 용산전자랜드</p>
      </footer>
    </div>
  );
}
