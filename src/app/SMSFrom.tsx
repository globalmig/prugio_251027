"use client";
import { useState } from "react";

export function SendSMSForm() {
  const [name, setname] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState("일반구매");

  const nameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setname(e.target.value);
  };
  const phoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };
  const typeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setType(e.target.value);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex gap-4">
        <input type="text" placeholder="이름" className="border-2 border-gray-300 rounded-md p-2 mb-4" value={name} onChange={nameChange} />
        <input type="text" placeholder="전화번호" className="border-2 border-gray-300 rounded-md p-2 mb-4" value={phone} onChange={phoneChange} />
        <select className="border-2 border-gray-300 rounded-md p-2 mb-4" value={type} onChange={typeChange}>
          <option value="일반구매">일반구매</option>
          <option value="혼수">혼수</option>
          <option value="이사">이사</option>
        </select>

        <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => alert(`${type} 상담 신청이 완료되었습니다.`)}>
          상담신청하기
        </button>
      </div>

      <div>
        <p> 이름: {name} </p>
        <p> 전화번호: {phone} </p>
        <p> 상담유형: {type} </p>
      </div>
    </div>
  );
}
