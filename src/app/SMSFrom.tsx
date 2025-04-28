"use client";
import { useState } from "react";

export function SendSMSForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState("일반구매");

  const nameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const phoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const buttonTypes = ["일반구매", "혼수", "이사"];

  // 추가한 submit 함수
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 새로고침 막기
    if (!name.trim() || !phone.trim()) {
      alert("이름과 전화번호를 모두 입력해주세요.");
      return;
    }
    alert(`${type} 상담 신청이 완료되었습니다.`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center w-full py-12 my-10 bg-gray-100 gap-4">
      <h3 className="text-2xl font-bold">간편 상담신청</h3>

      <div className="inputs flex flex-col gap-4 w-full max-w-md">
        <div className="inputType flex gap-2">
          {buttonTypes.map((btnType) => (
            <button
              type="button" // 여기는 버튼이니까 타입 명시
              key={btnType}
              className={`px-4 py-4 w-full max-w-[140px] shadow-lg rounded-md ${type === btnType ? "bg-blue-500 text-white" : "bg-white"}`}
              onClick={() => setType(btnType)}
            >
              {btnType}
            </button>
          ))}
        </div>
        <input type="text" maxLength={10} minLength={2} required placeholder="이름" className="inputName border-2 border-gray-300 rounded-md p-2" value={name} onChange={nameChange} />
        <input type="text" maxLength={11} minLength={11} required placeholder="전화번호" className="inputPhone border-2 border-gray-300 rounded-md p-2" value={phone} onChange={phoneChange} />
      </div>
      <label className="text-sm  p-2 rounded">
        <div className="w-full max-w-[448px] h-24 p-2 border border-gray-300 rounded bg-white text-xs">
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

      <button type="submit" className="bg-blue-500 text-white px-10 py-4 rounded-md w-full max-w-[448px] shadow-lg">
        상담예약
      </button>
    </form>
  );
}
