import EmptyState from "../_components/EmptyState";

import getCurrentUser from "../_actions/getCurrentUser";
import getFavoriteListings from "../_actions/getFavoriteListings";
import FavoritesClient from "./FavoritesClient";

const FavoritePage = async () => {
  const listings = await getFavoriteListings();
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <EmptyState
        title="No favorites found"
        subtitle="Mark your favorite items and they will show up here."
      />
    );
  }

  return <FavoritesClient listings={listings} currentUser={currentUser} />;
};

export default FavoritePage;
