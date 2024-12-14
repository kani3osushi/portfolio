import NextAuth from "next-auth";
import Github from "next-auth/providers/github";

import type { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";

export const config = {
  theme: {
    logo: "https://next-auth.js.org/img/logo/logo-sm.png",
  },
  // pages: {
  //   signIn: "/login", // 必要に応じてカスタムサインインページを指定
  // },
  providers: [Github({
    clientId: process.env.AUTH_GITHUB_ID, clientSecret: process.env.AUTH_GITHUB_ID,
  }),
  Google({
    clientId: process.env.GOOGLE_CLIENT_ID, clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  })],
  basePath: "/api/auth",
  callbacks: {
    authorized({ request, auth }) {
      try {
        const { pathname } = request.nextUrl;
        if (pathname === "/server-example") return !!auth; //ログインしているユーザーだけ見れるページだよ。
        return true; //ログインしてなくても取りあえず全ページ見れるよ。
      } catch (err) {
        console.log(err);
      }
    },
    jwt({ token, trigger, session }) {
      // console.log(token);
      if (trigger === "update") token.name = session.user.name;
      return token;
    },
  },
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);