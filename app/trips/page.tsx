import EmptyState from "../_components/EmptyState";

import getCurrentUser from "../_actions/getCurrentUser";
import getReservations from "../_actions/getReservations";
import TripsClient from "./TripsClient";

const TripsPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <EmptyState
        title="You are not logged in"
        subtitle="Please log in to see your trips"
      />
    );
  }

  const reservations = await getReservations({ userId: currentUser.id });

  if (!reservations || reservations.length === 0) {
    return (
      <EmptyState
        title="You have no trips"
        subtitle="You haven't booked any trips yet"
      />
    );
  }

  return <TripsClient reservations={reservations} currentUser={currentUser} />;
};

export default TripsPage;
