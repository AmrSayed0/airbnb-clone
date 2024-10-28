import Container from "../_components/Container";
import Heading from "../_components/Heading";
import ListingCard from "../_components/listings/ListingCard";
import { SafeListings, SafeUser } from "../_types";

interface FavoritesClientProps {
  listings: SafeListings[];
  currentUser?: SafeUser | null;
}

const FavoritesClient = ({ listings, currentUser }: FavoritesClientProps) => {
  return (
    <Container>
      <Heading
        title="Favorites"
        subtitle="Your favorite items are shown here."
      />
      <div
        className="
        mt-10
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-5
        2xl:grid-cols-6
        gap-8
      "
      >
        {listings.map((listing) => (
          <ListingCard
            key={listing.id}
            currentUser={currentUser}
            data={listing}
          />
        ))}
      </div>
    </Container>
  );
};

export default FavoritesClient;
