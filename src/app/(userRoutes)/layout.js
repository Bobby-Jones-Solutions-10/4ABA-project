import { nextAuthOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function PrivateLayout({ children }) {
  const session = await getServerSession(nextAuthOptions)

  if (!session) {
    redirect('/')
  }

  return <>{children}</>
}
