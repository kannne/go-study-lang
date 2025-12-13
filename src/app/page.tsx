import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* 상단 헤더 */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold">GoLang</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="/reading" className="text-sm font-medium hover:text-primary transition-colors">
              독해
            </a>
            <a href="/writing" className="text-sm font-medium hover:text-primary transition-colors">
              작문
            </a>
            <a href="/vocabulary" className="text-sm font-medium hover:text-primary transition-colors">
              어휘
            </a>
          </nav>
          <Button variant="outline">로그인</Button>
        </div>
      </header>

      {/* 메인 콘텐츠 */}
      <main className="container mx-auto px-4 py-16">
        {/* 기능 카드 */}
        <section className="max-w-2xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent>
                <p className="justify-center text-center text-2xl font-bold mb-4">독해</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent>
                <p className="justify-center text-center text-2xl font-bold mb-4">작문</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent>
                <p className="justify-center text-center text-2xl font-bold mb-4">어휘</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* 하단 네비게이션 (모바일) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-background border-t">
        <div className="grid grid-cols-3 gap-1 p-2">
          <a
            href="/passages"
            className="flex flex-col items-center gap-1 p-3 rounded-lg hover:bg-muted transition-colors"
          >
            <span className="text-xs font-medium">독해</span>
          </a>
          <a
            href="/writing"
            className="flex flex-col items-center gap-1 p-3 rounded-lg hover:bg-muted transition-colors"
          >
            <span className="text-xs font-medium">작문</span>
          </a>
          <a
            href="/vocabulary"
            className="flex flex-col items-center gap-1 p-3 rounded-lg hover:bg-muted transition-colors"
          >
            <span className="text-xs font-medium">어휘</span>
          </a>
        </div>
      </nav>
    </div>
  );
}
