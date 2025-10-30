"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function CallPage() {
  const [isMobile, setIsMobile] = useState(false);
  const phoneNumber = "010-5487-1618";
  const formattedPhone = "010-5487-1618";

  useEffect(() => {
    // 모바일 디바이스 감지
    const checkIsMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor;
      return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase());
    };

    const mobile = checkIsMobile();
    setIsMobile(mobile);

    // 모바일에서만 자동으로 전화 연결
    if (mobile) {
      window.location.href = `tel:${phoneNumber}`;
    }
  }, []);

  const copyPhoneNumber = async () => {
    try {
      await navigator.clipboard.writeText(formattedPhone);
      alert("전화번호가 복사되었습니다!");
    } catch (err) {
      console.error("복사 실패:", err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      <header className="flex justify-between items-center p-4 bg-white text-emerald-900 w-full h-[74px] fixed shadow-lg">
        <div className="flex items-center justify-between w-full max-w-[1000px] mx-auto">
          <Link href="/">
            <div className="md:w-80 w-64">
              <Image src="/image/logo.png" alt="로고" width={380} height={380} priority={true} layout="responsive" />
            </div>
          </Link>
        </div>
      </header>

      <main className="flex-1 flex flex-col justify-center items-center px-4 pt-[100px] pb-[120px]">
        <div className="max-w-[1000px] mx-auto flex flex-col items-center text-center">
          {isMobile ? (
            <>
              <p className="text-lg mb-8">담당자분께 전화 연결 진행중</p>
              <a href={`tel:${phoneNumber}`} className="mb-8 text-blue-600 hover:text-blue-800 underline">
                전화가 연결되지 않으면 여기를 클릭하세요
                <br />
                {formattedPhone}
              </a>
            </>
          ) : (
            <>
              <p className="text-lg my-8 break-keep">PC 사용자는 아래 전화번호로 연락부탁드립니다.</p>
              <div className="mb-8 flex md:flex-row flex-col items-center justify-center gap-6">
                <p className="text-2xl font-bold">{formattedPhone}</p>
                <button onClick={copyPhoneNumber} className="group border border-black hover:bg-gray-700 hover:text-white text-blacks px-4 py-2 rounded-lg transition duration-300 flex gap-2">
                  <Image src="/image/Icon_copy_white.png" alt={"복사 아이콘"} width={20} height={20} className="group-hover:block hidden" />
                  <Image src="/image/Icon_copy_black.png" alt={"복사 아이콘"} width={20} height={20} className="group-hover:hidden block" />
                  복사
                </button>
              </div>
            </>
          )}

          <Link href="/">
            <button className="hover:underline text-center max-w-[400px] mx-auto text-white font-bold  sm:inline-block px-20 w-full py-4  rounded-xl border-[1px] border-white text-base hover:bg-white hover:text-gray-800 transition duration-300 bg-black hover:border-black cursor-pointer mt-4">
              메인 홈으로
            </button>
          </Link>
        </div>
      </main>

      <footer className="flex flex-col justify-center items-center p-10 bg-gray-800 text-slate-400 gap-2 text-sm w-full mt-auto">
        <p>대표: 김진웅 / 사업자명: 우주전자 전자랜드지점</p>
        <p>사업자등록번호: 106-85-38456</p>
        <p>주소: 서울특별시 용산구 청파로 74 용산전자랜드</p>
      </footer>
    </div>
  );
}
