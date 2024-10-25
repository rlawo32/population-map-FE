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
                location === 'seoul'    ? <SeoulMain /> :
                location === 'guro'     ? <SeoulGuro /> :
                location === ''         ? <></>         :
                location === ''         ? <></>         :
                location === ''         ? <></>         :
                location === ''         ? <></>         :
                location === ''         ? <></>         :
                location === ''         ? <></>         :
                location === ''         ? <></>         :
                location === ''         ? <></>         :
                location === ''         ? <></>         :
                location === ''         ? <></>         :
                location === ''         ? <></>         :
                location === ''         ? <></>         :
                location === ''         ? <></>         :
                location === ''         ? <></>         :
                location === ''         ? <></>         :
                location === ''         ? <></>         :
                location === ''         ? <></>         :
                location === ''         ? <></>         :
                location === ''         ? <></>         :
                location === ''         ? <></>         :
                location === ''         ? <></>         :
                location === ''         ? <></>         :
                location === ''         ? <></>         :
                
                <Nationwide />
            }
        </>
    )
}

export default ViewMain;
