import Image from "next/image";
import { SendSMSForm } from "./SMSFrom";

export default function Home() {
  return (
    <div className="">
      <header className="flex justify-between items-center p-4 bg-gray-800 text-white w-full">
        <Image src="/image/logo-bestshop.svg" alt="로고" width={250} height={250} />
        <a href="#smsForm" className=" text-white px-6 py-2 rounded-xl border-[1px] border-white text-sm md:text-base hover:bg-white hover:text-gray-800 transition duration-300">
          상담예약
        </a>
      </header>

      <main className="flex flex-col items-center justify-center  w-full h-full ">
        <Image
          src="/image/01_start_banner.jpg"
          alt="배너"
          layout="responsive" // intrinsic이미지 비율 유지responsive
          width={1000} // 적당한 크기로 설정
          height={1300} // 비율에 맞게 설정
        />
        <SendSMSForm />
        {/* 구글 지도 api start */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.9348477325843!2d126.95694892606545!3d37.5330330760482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca206a002e973%3A0x953df405bf8377de!2z7Jqp7IKw7KCE7J6Q656c65Oc!5e0!3m2!1sko!2skr!4v1745885072550!5m2!1sko!2skr"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        {/* 구글 지도 api end */}
      </main>
      <footer className="flex flex-col justify-center items-center p-10 bg-gray-800 text-white">
        <p>대표: 김진웅 / 사업자명: 우주전자 전자랜드지점 /사업자등록번호: 106-85-38456 </p>
        <p>주소: 서울특별시 용산구 청파로 74 용산전자랜드</p>
      </footer>
    </div>
  );
}
