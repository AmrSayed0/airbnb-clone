import EmptyState from "../_components/EmptyState";

import getCurrentUser from "../_actions/getCurrentUser";
import getListings from "../_actions/getListings";
import PropertiesClient from "./PropertiesClient";

const PropertiesPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <EmptyState
        title="You are not logged in"
        subtitle="Please log in to see your trips"
      />
    );
  }

  const listings = await getListings({ userId: currentUser.id });

  if (listings.length === 0) {
    return (
      <EmptyState
        title="No properties found"
        subtitle="You have not created any properties yet"
      />
    );
  }

  return (
    <PropertiesClient listings={listings} currentUser={currentUser} />
  );
};

export default PropertiesPage;
