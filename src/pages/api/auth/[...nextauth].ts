import { JWT } from "next-auth/jwt";
import NextAuth, { Account, NextAuthOptions, Profile } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import AppleProvider from "next-auth/providers/apple";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Replace this with your actual authentication logic
        if (credentials) {
          if (credentials.username === "admin" && credentials.password === "password") {
            return { id: "1", name: "Admin", email: "admin@example.com" };
          }
        }
        return null;
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    }),
    AppleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    })
  ],
  callbacks: {
    async jwt({ token, account, profile } : {token: JWT, account: Account | null, profile?: any}) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
        token.id = profile?.id;
      }
      return token
    },
    async session({ session, token }: {session: any, token: any}) {
      if(token.sub){
        session.user.id = token.sub;
        session.user.name = token.name;
      }
    return session;
    }
  },
  session: { strategy: "jwt" },
  secret: process.env.SECRET,
};

export default NextAuth(authOptions);