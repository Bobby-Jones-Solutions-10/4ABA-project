import axios from "axios"
import NextAuth from "next-auth"
import CredentialsProvider from 'next-auth/providers/credentials'

const nextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" }
      },

      async authorize(credentials, req) {
        const response = await axios.post('http://localhost:3000/signin', {
          Headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password
          })
        })

        const user = await response.json()

        if (user && response.ok) {
          return user
        }

        return null
      }
    })
  ],
  pages: {
    signIn: '/',
  }
}

const handler = NextAuth(nextAuthOptions)

export { handler as GET, handler as POST, nextAuthOptions }

