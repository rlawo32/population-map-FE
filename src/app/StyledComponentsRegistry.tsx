"use client";

import React, { useState } from "react";
import { useServerInsertedHTML } from "next/navigation";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";

// Styled-components SSR 설정
// Styled-components는 JS 코드를 통해 컴포넌트에 스타일을 적용함 
// 이는 CSR 방식이라 사용자가 페이지를 방문했을 때 브라우저에서 스타일이 생성되고 적용이 됨
// NextJS에서 Styled-components를 적용시 스타일이 적용되지 않은 상태로 화면이 표기되거나 깜빡임 현상이 나타날 수 있음
// 이 때문에 SSR 설정을 해주면 서버에서 렌더링 된 HTML 문서에 미리 스타일이 적용되기에 이 현상을 최소화하고
// 초기 페이지 로드 속도를 개선시킬 수 있으며 SEO 최적화에도 도움이 된다.
export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  if (typeof window !== "undefined") return <>{children}</>;

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  );
}