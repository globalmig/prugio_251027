"use client";

import { Map, MapMarker, useKakaoLoader } from "react-kakao-maps-sdk";

export default function KakaoMap() {
  const [loading, error] = useKakaoLoader({
    appkey: process.env.NEXT_PUBLIC_APPKEY || "0d1c4736538ee8356be0f121e3cdaf2d",
  });

  if (loading) return <div>Loading...</div>;
  if (error) {
    console.error("카카오맵 로딩 중 에러 발생:", error);
    return <div>Error: {error.message}</div>;
  }

  return (
    <Map level={3} center={{ lat: 33.5563, lng: 126.79581 }} style={{ width: "100%", height: "360px" }}>
      <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
        <div style={{ color: "#000" }}>Hello World!</div>
      </MapMarker>
    </Map>
  );
}
