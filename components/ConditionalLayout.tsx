'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';

/**
 * 조건부 레이아웃 컴포넌트
 *
 * - 로그인/콜백 페이지에서는 헤더/푸터 숨김
 * - 나머지 페이지에서는 헤더/푸터 표시
 */
export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // 로그인 페이지에서는 헤더/푸터 숨김
  const isAuthPage = pathname === '/login' || pathname === '/auth/callback';

  return (
    <>
      {!isAuthPage && <Header />}
      <div className="flex-1">{children}</div>
      {!isAuthPage && <Footer />}
    </>
  );
}
