'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

/**
 * Google OAuth 콜백 페이지
 *
 * 백엔드에서 쿠키로 전달한 access_token을 확인하고 바로 대시보드로 리다이렉트
 */
export default function AuthCallbackPage() {
  const router = useRouter();

  useEffect(() => {
    const handleCallback = async () => {
      try {
        // 쿠키에 토큰이 설정되었는지 확인
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4041';
        const response = await fetch(`${apiUrl}/auth/profile`, {
          credentials: 'include',
        });

        if (response.ok) {
          const user = await response.json();
          console.log('[Auth] 로그인 성공:', user);

          // 사용자 정보를 localStorage에 저장
          localStorage.setItem('user', JSON.stringify(user));

          // 바로 대시보드로 리다이렉트
          router.push('/');
        } else {
          throw new Error('인증 실패');
        }
      } catch (error) {
        console.error('[Auth] OAuth 콜백 에러:', error);
        // 에러 시 로그인 페이지로
        router.push('/login');
      }
    };

    handleCallback();
  }, [router]);

  // 로딩 스피너만 표시
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 via-purple-50/30 to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="text-center">
        <div className="mb-4 h-12 w-12 animate-spin rounded-full border-4 border-indigo-600 border-t-transparent mx-auto" />
      </div>
    </div>
  );
}
