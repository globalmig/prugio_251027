"use client";

import { Map, MapMarker, useKakaoLoader } from "react-kakao-maps-sdk";

export default function KakaoMap() {
  const kakaoAppKey = process.env.NEXT_PUBLIC_APPKEY || "0d1c4736538ee8356be0f121e3cdaf2d";

  // 🔍 키 확인용 로그
  console.log("📦 Kakao API Key:", kakaoAppKey);

  const [loading, error] = useKakaoLoader({ appkey: kakaoAppKey });

  if (loading) return <div>Loading Kakao Map...</div>;

  if (error) {
    console.error("❌ 카카오맵 로딩 중 에러 발생:", error);

    return <div>⚠️ 지도 로딩에 실패했습니다. API 키 또는 도메인 설정을 확인해주세요.</div>;
  }

  return (
    <Map center={{ lat: 33.5563, lng: 126.79581 }} style={{ width: "100%", height: "360px" }} level={3}>
      <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
        <div style={{ color: "#000" }}>Hello World!</div>
      </MapMarker>
    </Map>
  );
}
