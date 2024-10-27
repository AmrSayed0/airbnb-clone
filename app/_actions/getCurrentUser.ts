import { getServerSession } from "next-auth/next";

import { authOptions } from "@/pages/api/auth/[...nextauth]";
import prisma from "@/app/_libs/prismadb";

export async function getSession() {
  return await getServerSession(authOptions);
}

export default async function getCurrentUser() {
  try {
    const session = await getSession();

    if (!session?.user?.email) {
      return null;
    }

    const currentUser = await prisma.user.findUnique({
      where: {
        email: session.user.email as string,
      },
    });

    if (!currentUser) {
      return null;
    }

    // return currentUser;
    // Fix: Convert the user object to a safe user object
    const safeCurrentUser = currentUser
      ? {
          ...currentUser,
          createdAt: currentUser.createdAt.toISOString(),
          updatedAt: currentUser.updatedAt.toISOString(),
          emailVerified: currentUser.emailVerified
            ? currentUser.emailVerified.toISOString()
            : null,
        }
      : null;
    return safeCurrentUser;
  } catch {
    return null;
  }
}
