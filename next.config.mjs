/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false, // console.log 2번 찍히는 현상 해결
    compiler: {
        // Warning: Prop className did not match. => 서버와 클라이언트에서 클래스명이 다르기에 나타나는 오류 해결
        // Next.js는 첫 페이지 로드가 SSR로 동작하기 때문에, 
        // 서버에서 생성된 컴포넌트와 클라이언트에서 생성된 컴포넌트의 클래스명이 서로 달라지게 된다.
        // NextJS 12버전부터 babel 대신 swc를 사용하여 컴파일하도록 변경됨, 아래 코드 추가 시 해결
        styledComponents: true, 
    }
};

export default nextConfig;
