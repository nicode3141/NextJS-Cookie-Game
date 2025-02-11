import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
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
    })
  ],
  pages: {
    signIn: "/login", // Redirect to login page if not authenticated
  },
  secret: process.env.NEXTAUTH_SECRET, // Add this to your .env file
});