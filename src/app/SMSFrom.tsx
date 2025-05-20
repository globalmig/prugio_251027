"use client";
import { useState } from "react";

export function SendSMSForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState("일반구매");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name.trim() || !phone.trim()) {
      alert("이름과 전화번호를 모두 입력해주세요.");
      return;
    }

    try {
      const response = await fetch("/api/send-sms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, phone, type }),
      });

      const data = await response.json();

      if (data.success) {
        alert("상담 신청이 완료되었습니다. 문자 발송 완료!");
      } else {
        alert("상담 신청은 완료되었지만, 문자 발송에 실패했습니다.");
      }
    } catch (error) {
      alert("에러가 발생했습니다. 다시 시도해주세요.");
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center w-full py-12 mb-4 bg-gray-100 gap-4 px-4 ">
      <h3 className="text-xl md:text-2xl font-bold" id="smsForm">
        간편 상담신청
      </h3>

      <div className="inputs flex flex-col gap-4 w-full max-w-md">
        <div className="inputType flex gap-2 text-sm md:text-base">
          {["일반구매", "혼수", "이사"].map((btnType) => (
            <button
              type="button"
              key={btnType}
              className={`px-4 py-4 w-full max-w-[140px] shadow-lg rounded-md ${type === btnType ? "bg-[#24114c] text-white" : "bg-white"}`}
              onClick={() => setType(btnType)}
            >
              {btnType}
            </button>
          ))}
        </div>
        <input
          type="text"
          maxLength={10}
          minLength={2}
          required
          placeholder="이름"
          className="inputName border-2 border-gray-300 rounded-md p-4"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onInput={(e) => {
            const input = e.target as HTMLInputElement;
            input.value = input.value.replace(/[^A-Za-z가-힣ㄱ-ㅎㅏ-ㅣ]/gi, "");
          }}
        />
        <input
          type="text"
          maxLength={11}
          minLength={11}
          required
          placeholder="전화번호"
          className="inputPhone border-2 border-gray-300 rounded-md p-4"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          onInput={(e) => {
            const input = e.target as HTMLInputElement;
            input.value = input.value.replace(/[^0-9]/g, "");
          }}
        />
        <label className="text-sm  rounded">
          <div className="w-full  h-auto p-2 border border-gray-300 rounded bg-white text-xs">
            <p>수집 항목: 이름, 전화번호</p>
            <p>수집 목적: 상담 신청에 대한 확인 및 답변 제공</p>
            <p>보유 기간: 상담 완료 후 즉시 파기</p>
            <p>동의 거부권 및 불이익: 개인정보 수집 및 이용에 대한 동의를 거부할 수 있으며, 이 경우 상담 신청이 제한될 수 있습니다.</p>
          </div>
          <div className="mt-4">
            <input type="checkbox" className="mr-2" required />
            <label>개인정보 수집 및 이용 동의</label>
          </div>
        </label>
      </div>

      <button type="submit" className="bg-[#24114c] text-white px-10 py-4 rounded-md w-full max-w-[448px] shadow-lg mt-6">
        상담예약
      </button>
    </form>
  );
}
