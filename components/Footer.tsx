import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 mt-auto transition-colors">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div>
            <Link href="/" className="inline-block mb-3">
              <span className="text-2xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                GoLang
              </span>
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              AI 기반 외국어 학습 플랫폼
              <br />
              맞춤형 학습으로 실력을 향상하세요
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-3">서비스</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/reading" className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  독해 학습
                </Link>
              </li>
              <li>
                <Link href="/writing" className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  작문 연습
                </Link>
              </li>
              <li>
                <Link href="/vocabulary" className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  어휘 복습
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-3">정보</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  서비스 소개
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  이용약관
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  개인정보처리방침
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
            © 2025 GoLang. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
