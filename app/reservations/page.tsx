import EmptyState from "../_components/EmptyState";

import getCurrentUser from "../_actions/getCurrentUser";
import getReservations from "../_actions/getReservations";
import ReservationsClient from "./ReservationsClient";

const ReservationsPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <EmptyState
        title="You are not logged in"
        subtitle="Please log in to see your reservations"
      />
    );
  }

  const reservations = await getReservations({
    authorId: currentUser.id,
  });

  if (reservations.length === 0) {
    return (
      <EmptyState
        title="You have no reservations"
        subtitle="You can make a reservation by clicking the button below"
      />
    );
  }

  return (
    <ReservationsClient reservations={reservations} currentUser={currentUser} />
  );
};

export default ReservationsPage;
