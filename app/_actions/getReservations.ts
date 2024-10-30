import prisma from "@/app/_libs/prismadb";

interface IParams {
  listingId?: string;
  userId?: string;
  authorId?: string;
}

export default async function getReservations(params: IParams) {
  try {
    const { listingId, userId, authorId } = params;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const query: any = {};

    if (listingId) {
      query.listingId = listingId;
    }

    if (userId) {
      query.userId = userId;
    }

    if (authorId) {
      query.listing = { userId: authorId };
    }

    const reservations = await prisma.reservation.findMany({
      where: query,
      include: {
        listing: true,
      },
      orderBy: {
        startDate: "asc",
      },
    });

    const safeReservations = reservations.map((reservations) => ({
      ...reservations,
      createdAt: reservations.createdAt.toISOString(),
      startDate: reservations.startDate.toISOString(),
      endDate: reservations.endDate.toISOString(),
      listing: {
        ...reservations.listing,
        createdAt: reservations.listing.createdAt.toISOString(),
      },
    }));

    return safeReservations;
  } catch (error) {
    console.error("Error: ", error);
  }
}
