import React from "react";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="flex flex-col justify-center items-center px-10 py-14 bg-white/20 text-white gap-2 text-sm mx-auto w-full ">
      <p className="text-2xl">상인 푸르지오 센터파크</p>
      <div className="flex font-bold text-4xl py-4">
        <Image src="/image/Icon_call.png" alt={"전화 아이콘"} width={40} height={10} className="group-hover:hidden block transition duration-300 mr-5" />
        <p>
          24시 빠른 문의 | <strong className="text-yellow-300">010-5487-1618</strong>
        </p>
      </div>
      <p className="text-lg font-thin">선착순 전세공급 · HUG보안심전세 · 준공완료 즉시입주</p>
    </div>
  );
}
