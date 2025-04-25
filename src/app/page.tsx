import Image from "next/image";
import { SendSMSForm } from "./SMSFrom";

export default function Home() {
  return (
    <div>
      <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <Image src="/image/logo-bestshop.svg" alt="로고" width={250} height={250} />

        <a href="https://bestshop.lge.co.kr/counselReserve/main/MC11420001?inflow=lgekor&orgCode=C323" target="_blank">
          <button className="text-white px-6 py-2 rounded-xl border-[1px] border-white">상담예약</button>
        </a>
      </header>

      <main className="flex flex-col items-center justify-center min-h-screen ">
        <SendSMSForm />
        {/* 구글 지도 api start */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.902634480141!2d126.96582660000001!3d37.533792399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca21aa7116bff%3A0xfc51f4daeb70a35f!2zTEfsoITsnpAgQkVTVFNIT1Ag64KY7KeE7IOB6rCA7KCQ!5e0!3m2!1sko!2skr!4v1745546694531!5m2!1sko!2skr"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        {/* 구글 지도 api end */}
      </main>
      <footer className="flex justify-center items-center p-4 bg-gray-800 text-white">
        <div className="text-center"></div>
        <p>Copyright © 2023 LG Electronics. All rights reserved.</p>
      </footer>
    </div>
  );
}
