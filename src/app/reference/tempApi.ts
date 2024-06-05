import axios from "axios";

const Ense = (page:number, perPage:number):any => {

    const resource = axios({
        method  : "GET",
        url     : `https://api.odcloud.kr/api/15097972/v1/uddi:780a2373-bf11-4fb6-b3e4-ed4119571817?page=${page}&perPage=${perPage}`,
        headers : {Authorization: 'Infuser 1zfm3O6MusH4xNmea2J41ZdYEpwMmwp4AOgUvyRJHU1bNOcyxF6VX17CZKFpJeBeJTtw++cKcEC7g+uguQI79g=='}
    }).then((res):any => {
        return Object.keys(res.data.data[0])[0];
        // console.log(res.data);
        // console.log(Object.keys(res.data.data[0])[0]);
        // console.log(Object.values(res.data.data[0])[0]);
    }).catch((err):any => {
        console.log(err.message);
    })

    console.log(resource)

    return wrapPromise(resource);
}

const wrapPromise = (promise:any) => {
    let status = 'pending'
    let response:any

    const suspender = promise.then(
        (res:any) => {
            status = 'success';
            response = res;
        },
        (err:any) => {
            status = 'error';
            response = err.message;
        },
    )

    const read = () => {
        switch (status) {
            case 'pending':
                throw suspender;
            case 'error':
                throw response;
            default:
                return response;
        }
    }
    return { read }
}

export default Ense;
