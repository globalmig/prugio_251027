import coolsms from "coolsms-node-sdk";

const messageService = new coolsms("YOUR_API_KEY", "YOUR_API_SECRET");

interface SendSMSParams {
  type: string; // 상담 유형 (일반구매, 혼수, 이사)
  name: string; // 상담 신청자 이름
  phone: string; // 상담 신청자 전화번호
  text: string; // 문자 내용
}

async function sendSMS(items: SendSMSParams) {
  try {
    const result = await messageService.sendOne({
      to: "010-4307-2427", // 수신자 전화번호 배포 이후 변경해야함
      from: items.phone, // 신청자 전화번호
      text: "안녕하세요! ${items.type} 상담 예약이 완료되었습니다. 고객님 성함: ${items.name}, 전화번호: ${items.to}. 감사합니다.",
      autoTypeDetect: true, // 자동으로 문자 타입 감지
    });
    console.log(result);
  } catch (error) {
    console.error("문자 전송 실패:", error);
  }
}

sendSMS({
  type: "일반구매", // 상담 유형
  name: "홍길동", // 상담 신청자 이름
  phone: "010-1234-5678", // 상담 신청자 전화번호
  text: "상담 예약 완료", // 문자 내용
});
