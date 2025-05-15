"use client"; // Next.js 13 app 폴더에서 클라이언트 컴포넌트일 때 필수!

import { Map, MapMarker, useKakaoLoader } from "react-kakao-maps-sdk";

export default function Kakao() {
  const [loading, error] = useKakaoLoader({
    appkey: "0d1c4736538ee8356be0f121e3cdaf2d", // 발급 받은 APPKEY
  });

  if (error) {
    return <div>Failed to load Kakao Map: {error.message}</div>;
  }

  if (loading) {
    return <div>Loading Kakao Map...</div>;
  }
  return (
    <Map center={{ lat: 33.5563, lng: 126.79581 }} style={{ width: "100%", height: "360px" }}>
      <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
        <div style={{ color: "#000" }}>Hello World!</div>
      </MapMarker>
    </Map>
  );
}
