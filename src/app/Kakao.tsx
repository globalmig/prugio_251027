import { Map, CustomOverlayMap, useKakaoLoader } from "react-kakao-maps-sdk";
import Link from "next/link";
import Image from "next/image";
export default function Kakao() {
  const appkey = process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY;

  if (!appkey) {
    throw new Error("카카오 API 키 오류. 다시 확인해주세요");
  }

  const [loading, error] = useKakaoLoader({ appkey });

  if (error) return <div>Failed to load Kakao Map: {error.message}</div>;
  if (loading) return <div>Loading Kakao Map...</div>;

  return (
    <Map center={{ lat: 37.5328889970584, lng: 126.959558538406 }} style={{ width: "100%", height: "360px" }}>
      <Link href="https://map.naver.com/p/entry/place/33706664?c=18.08,0,0,0,dh">
        <CustomOverlayMap position={{ lat: 37.5328889970584, lng: 126.959558538406 }}>
          <div style={{ position: "relative", display: "inline-block", textAlign: "center" }}>
            {/* 말풍선 박스 */}
            <div
              style={{
                backgroundColor: "white",
                padding: "6px 12px",
                borderRadius: "8px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
                whiteSpace: "nowrap",
                fontSize: "14px",
                color: "#000",
                marginBottom: "0px",
              }}
            >
              서울특별시 용산구 청파로 74 용산전자랜드
            </div>
            {/* CSS 삼각형 핀 */}
            <div
              style={{
                width: 0,
                height: 0,
                borderLeft: "10px solid transparent",
                borderRight: "10px solid transparent",
                borderTop: "15px solid #333", // 어두운 회색 포인터
                margin: "0 auto",
              }}
            />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Image src="/image/Lg_icon.png" alt="로고" width={25} height={25} style={{ marginTop: "2px" }} />
            </div>
          </div>
        </CustomOverlayMap>
      </Link>
    </Map>
  );
}
