'use client';

import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';
import GoogleIcon from '@/components/icons/GoogleIcon';
import { useEffect } from 'react';

/**
 * 로그인 페이지
 *
 * Google OAuth 로그인
 */
export default function LoginPage() {  
  useEffect(() => {
    document.title = "로그인 - GoLang";
  }, []);

  const handleGoogleLogin = () => {
    // 백엔드 OAuth 엔드포인트로 이동
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4041';
    window.location.href = `${apiUrl}/auth/google`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* 로고 & 타이틀 */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 mb-6 pb-2">
            <Sparkles className="w-12 h-12 text-indigo-600 dark:text-indigo-400" />
            <span className="text-5xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent leading-tight">
              GoLang
            </span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            환영합니다!
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            계속하려면 Google 계정으로 로그인하세요.
          </p>
        </div>

        {/* Google 로그인 버튼 */}
        <Button
          onClick={handleGoogleLogin}
          className="w-full h-14 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 hover:border-gray-300 dark:hover:border-gray-300 transition-all duration-200 shadow-md hover:shadow-lg group"
        >
          <div className="flex items-center gap-3">
            <GoogleIcon />
            <span className="text-base font-semibold">Google로 로그인</span>
          </div>
        </Button>
      </div>
    </div>
  );
}
