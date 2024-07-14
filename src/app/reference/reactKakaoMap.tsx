'use client';

import { useEffect, useState } from "react";
import { CustomOverlayMap, Map, MapMarker, MapInfoWindow } from "react-kakao-maps-sdk";

declare global {
    interface Window {
        kakao: any;
    }
}

const ReactKakaoMap = () => {
    const apiKey:string|undefined = process.env.NEXT_PUBLIC_KAKAO_KEY;
    const [scriptLoad, setScriptLoad] = useState<boolean>(false);
    const [address, setAddress] = useState<string>("");
    const [lat, setLat] = useState<number>(0);
    const [lng, setLng] = useState<number>(0);

    useEffect(() => {
        const script:HTMLScriptElement = document.createElement("script");
        script.async = true;
        script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&libraries=services&autoload=false`;
        document.head.appendChild(script);

        // script.addEventListener("load", () => {window.kakao.maps.load(() => {
        //         const geocoder = new window.kakao.maps.services.Geocoder();

        //         // 주소로 좌표를 검색합니다
        //         geocoder.addressSearch('제주특별자치도 제주시 첨단로 242', function(result:any, status:any) {

        //             // 정상적으로 검색이 완료됐으면
        //             if (status === window.kakao.maps.services.Status.OK) {
        //                 // 결과값 위치 좌표
        //                 let coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);

        //                 // 지도를 담을 영역의 DOM 레퍼런스
        //                 let container = document.getElementById('map');
        //                 // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
        //                 let options = { // 지도를 생성할 때 필요한 기본 옵션
        //                     center: coords, // 지도의 중심좌표
        //                     level: 3 // 지도의 레벨(확대, 축소 정도)
        //                 };
        //                 let map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴

        //                 // 결과값으로 받은 위치를 마커로 표시합니다
        //                 let marker = new window.kakao.maps.Marker({
        //                     map: map,
        //                     position: coords
        //                 });

        //                 // 인포윈도우로 장소에 대한 설명을 표시합니다
        //                 let infowindow = new window.kakao.maps.InfoWindow({
        //                     content: '<div style="width:150px;text-align:center;padding:6px 0;color:black;">'+ '카카오 본사' +'</div>'
        //                 });
        //                 infowindow.open(map, marker);

        //                 // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
        //                 // map.setCenter(coords);
        //             }
        //         });
        //     })
        // })
        script.addEventListener("load", () => {
            window.kakao.maps.load(() => {
                const geocoder = new window.kakao.maps.services.Geocoder();
                let coords = new window.kakao.maps.LatLng(33.450701, 126.570667);

		        geocoder.coord2Address(coords.getLng(), coords.getLat(), function(result:any, status:any) {
                    if (status === kakao.maps.services.Status.OK) {
                        setAddress(result[0].road_address.address_name);
                        geocoder.addressSearch(result[0].road_address.address_name, function(result:any, status:any) {
                            if (status === window.kakao.maps.services.Status.OK) {
                                setLat(result[0].y);
                                setLng(result[0].x);
                                setScriptLoad(true);
                            }
                        })
                    }
                });

                
            })
        })
    }, [])

    return (
        // <div id="map" style={{height: "500px", width: "100%"}} />
        <div>
            {scriptLoad ? 
                <Map 
                center={{ lat: lat, lng: lng }}   
                style={{ width: '800px', height: '600px' }} 
                level={3}>
                    <CustomOverlayMap position={{ lat: lat, lng: lng }}>
                        <div style={{position:'absolute', top:-75, left:-140, width:'300px', padding:'4px 0', 
                            textAlign:'center', color:'black', background:'white', borderRadius:'10px'}}>{address}</div>
                    </CustomOverlayMap>
                    <MapMarker position={{ lat: lat, lng: lng }}></MapMarker>
                </Map>
                :
                <div></div>
            }
        </div>
    )
}

export default ReactKakaoMap;