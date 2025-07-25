import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { NextAuthOptions } from "next-auth";
import Github from "next-auth/providers/github";
export const authoptions: NextAuthOptions = {
  // authoptions object specifies the signin serivice provider (google and github in this case) and also specifies the
  // credientials( i.e clientid, client secret ) required to access their sigin facility via next auth and we specify the page from which we are signning in
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    Github({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/signin",
  },
};
const handler = NextAuth(authoptions); //we gave NextAuth our setup/config (which provider to use, credentials, sign-in page, etc.).
//This line creates a route handler function (handler) that will handle all incoming authentication-related HTTP requests like:GET POST
export { handler as GET, handler as POST }; // we Use this handler to handle all incoming GET and POST requests to /api/auth/[...nextauth] and its subroutes.
