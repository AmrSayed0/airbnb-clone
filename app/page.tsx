import getCurrentUser from "./_actions/getCurrentUser";
import getListings, { IListingParams } from "./_actions/getListings";

import Container from "./_components/Container";
import EmptyState from "./_components/EmptyState";
import ListingCard from "./_components/listings/ListingCard";

interface HomeProps {
  searchParams: IListingParams;
}

const Home = async ({ searchParams }: HomeProps) => {
  const listings = (await getListings(searchParams)) ?? [];
  const currentUser = await getCurrentUser();

  if ((listings?.length ?? 0) === 0) {
    return <EmptyState showReset />;
  }

  return (
    <Container>
      <div
        className="
        pt-24
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
            currentUser={currentUser}
            key={listing.id}
            data={listing}
          />
        ))}
      </div>
    </Container>
  );
};

export default Home;
