# GoLang - AI 기반 외국어 학습 플랫폼

> "외국어 공부하러 가자" - Go Stady Language

## 📖 프로젝트 소개

GoLang은 LLM을 활용한 외국어 학습 웹 애플리케이션입니다.

### 주요 기능
- **독해 연습**: Gemini API로 맞춤형 외국어 지문 생성 + 문제 풀이
- **작문 첨삭**: AI 기반 외국어 작문 피드백 및 문법 교정
- **어휘 학습**: 간격 반복 알고리즘 기반 플래시카드 복습 시스템

## 🛠️ 기술 스택

- **Frontend & Backend**: Next.js 14 (App Router) + TypeScript
- **Styling**: Tailwind CSS 3.4.1 + shadcn/ui
- **Database**: PostgreSQL + Prisma ORM
- **LLM**: Gemini 2.5 Pro / Flash
- **일본어 처리**: Kuroshiro, wanakana
- **Deployment**: GCP Compute Engine + Docker Compose

## 🚀 시작하기

### 개발 서버 실행

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000)에서 확인할 수 있습니다.

### 환경 변수 설정

`.env.local` 파일을 생성하고 다음 내용을 추가하세요:

```env
DATABASE_URL="postgresql://..."
GEMINI_API_KEY="your-gemini-api-key"
```

## 📂 프로젝트 구조

```
golang/
├── src/
│   ├── app/                 # Next.js App Router 페이지
│   ├── components/          # React 컴포넌트
│   │   └── ui/              # shadcn/ui 컴포넌트
│   └── lib/                 # 유틸리티 함수
├── prisma/                  # Prisma 스키마 및 마이그레이션
└── public/                  # 정적 파일
```