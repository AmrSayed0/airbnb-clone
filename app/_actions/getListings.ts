import prisma from "@/app/_libs/prismadb";

export default async function getListings() {
  try {
    // fetch listings from the database
    const listings = await prisma.listing.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return listings;
  } catch (error: any) {
    throw new Error(error);
  }
}
