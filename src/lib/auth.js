import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";

import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import connectDB from './connectDB'
import User from "@/model/user";

export const authConfig = {
  providers: [
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials || !credentials.email || !credentials.password)
          return null;

        connectDB();

        try {
          const dbUser = await User.getByEmail(credentials.email);
  
          if (dbUser && dbUser.password === credentials.password) {
            const { password, createdAt, id, ...dbUserWithoutPassword } = dbUser;
            return dbUserWithoutPassword;
          } else {
            const user = await User.create({
              name: "temp",
              email: credentials.email,
              password: credentials.password
            });
            
            console.log('user =', user);
            return user;
          }
        } catch (error) {
          console.error("Error during authorization:", error);
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt : 'login'
        }
      }
    })
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      try {
        if (profile) {
          const dbUser = await User.getByEmail(profile.email);
          
          if (!dbUser) {
            await User.create({
              name: profile.name,
              email: profile.email,
              password: '',
              picture: profile.picture,
              login: 'google'
            });
          }
        }
        return true ;
      } catch (error) {
        console.error("Error during signIn callback:", error);
        return false;
      }
    },
    async session({ session }) {
      return session;
    }
  }
};

export async function loginIsRequiredServer() {
  try {
    const session = await getServerSession(authConfig);
    if (!session) return redirect("/");
  } catch (error) {
    console.error("Error during loginIsRequiredServer:", error);
    return redirect("/");
  }
}

export function loginIsRequiredClient() {
  if (typeof window !== "undefined") {
    const session = useSession();
    const router = useRouter();
    if (!session) router.push("/");
  }
}
