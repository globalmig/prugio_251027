// src/app/api/send-sms/route.ts
import { NextResponse } from "next/server";
import { SolapiMessageService as msgModule } from "solapi";

export async function POST(req: Request) {
  try {
    const { name, phone, type } = await req.json();

    const apiKey = process.env.SOLAPI_API_KEY || "defaultApiKey";
    const apiSecret = process.env.SOLAPI_API_KEY_SECRET || "defaultApiSecret";
    const messageService = new msgModule(apiKey, apiSecret);

    const params = {
      text: `[솔라피 테스트] ${name} 고객님께서 ${type} 상담 예약을 신청하셨습니다! 전화번호: ${phone}`,
      to: phone,
      from: "01039671421", // 발신번호는 인증된 번호여야 합니다.
    };

    const response = await messageService.send([params]);
    console.log("문자 발송 성공:", response);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("문자 발송 실패:", error);
    return NextResponse.json({
      success: false,
      message: "문자 발송에 실패했습니다.",
      error: error instanceof Error ? error.message : "알 수 없는 오류",
    });
  }
}
