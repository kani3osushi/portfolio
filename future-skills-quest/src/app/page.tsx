// app/layout.tsx (例: サーバーコンポーネントでCookieからセッション取得)
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import type { Database } from "@/types/index"; // 自動生成タイプなど

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabaseServer = createServerComponentClient<Database>({ cookies });
  const {
    data: { session },
  } = await supabaseServer.auth.getSession();

  return (
    <html lang="ja">
      <body>
        {session ? (
          children
        ) : (
          <div>
            <p>ログインしてください</p>
            <a href="/auth/login">ログインページへ</a>
          </div>
        )}
      </body>
    </html>
  );
}
