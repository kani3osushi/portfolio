import { auth } from "@/lib/auth"
import { NextResponse, NextRequest } from "next/server"

export default async function middleware(request: NextRequest) {
  const session = await auth()

  // ユーザーが認証されていない場合
  if (!session) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // 保護したいルートのパターンを指定
    "/dashboard/:path*",
    "/api/:path*"
  ]
}