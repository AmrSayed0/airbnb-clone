import getCurrentUser from "@/app/_actions/getCurrentUser";
import getListingById from "@/app/_actions/getListingById";
import getReservations from "@/app/_actions/getReservations";
import EmptyState from "@/app/_components/EmptyState";
import ListingClient from "./ListingClient";

interface IParams {
  listingId: string;
}

const ListingPage = async ({ params }: { params: IParams }) => {
  const listing = await getListingById(params);
  const reservations = await getReservations(params);
  const currentUser = await getCurrentUser();

  if (!listing) {
    return <EmptyState />;
  }

  return (
    <div>
      <ListingClient
        listing={listing}
        reservations={reservations}
        currentUser={currentUser}
      />
    </div>
  );
};

export default ListingPage;
