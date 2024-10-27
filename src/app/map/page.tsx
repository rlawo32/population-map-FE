'use client';

import Nationwide from "@/app/map/nationwide";

import SeoulMain from "@/app/map/seoul/seoul-main/page";
import SeoulGuro from "@/app/map/seoul/seoul-guro/page";

import useLocationDataStore from "@/app/stores/useLocationDataStore";

const ViewMain = () => {

    const {location, setMonth, column, setColumn} = useLocationDataStore();

    return (
        <>
            {
                location === 'seoul'        ? <SeoulMain /> :
                location === 'guro'         ? <></>         :
                location === 'dobong'       ? <></>         :
                location === 'dongdaemun'   ? <></>         :
                location === 'dongjak'      ? <></>         :
                location === 'eunpyeong'    ? <></>         :
                location === 'gangbuk'      ? <></>         :
                location === 'gangdong'     ? <></>         :
                location === 'gangnam'      ? <></>         :
                location === 'gangseo'      ? <></>         :
                location === 'geumcheon'    ? <></>         :
                location === 'guro'         ? <SeoulGuro /> :
                location === 'gwanak'       ? <></>         :
                location === 'gwangjin'     ? <></>         :
                location === 'jongno'       ? <></>         :
                location === 'jung'         ? <></>         :
                location === 'jungnang'     ? <></>         :
                location === 'mapo'         ? <></>         :
                location === 'nowon'        ? <></>         :
                location === 'seocho'       ? <></>         :
                location === 'seodaemun'    ? <></>         :
                location === 'seongbuk'     ? <></>         :
                location === 'seongdong'    ? <></>         :
                location === 'songpa'       ? <></>         :
                location === 'yangcheon'    ? <></>         :
                location === 'yeongdeunpo'  ? <></>         :
                location === 'yongsan'      ? <></>         :
                <Nationwide />
            }
        </>
    )
}

export default ViewMain;
