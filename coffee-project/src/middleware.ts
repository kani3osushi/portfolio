import { auth } from '@/auth';
import { NextRequest, NextResponse } from 'next/server';

export { auth as middleware } from '@/auth';

export default auth(async (req: NextRequest) => {
  // セッション情報を取得
  const session = await auth();


  // 未認証のユーザーはログインページにリダイレクト
  if (!session) {
    console.log("ユーザーは未認証です。ログインページにリダイレクトします。");
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // 認証済みの場合はそのまま次の処理へ進む
  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],

}