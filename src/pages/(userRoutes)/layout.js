import { getServerSession } from "next-auth";
import { redirect } from "next/dist/server/api-utils";

export default async function PrivateLayout({ children }) {
  const session = await getServerSession(nextAuthOptions)

  if (!session) {
    redirect('/')
  }

  return <>{children}</>
}
