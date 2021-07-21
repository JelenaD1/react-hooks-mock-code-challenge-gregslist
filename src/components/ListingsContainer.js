import React from "react";
 import ListingCard from "./ListingCard";

function ListingsContainer({listings, onClickDelete}) {
  console.log(listings)

  const listingsToShow = listings.map(listing => 
    <ListingCard listing={listing} key={listing.id} onClickDelete={onClickDelete}/>
  )
  return (
    <main>
      <ul className="cards">
        {listingsToShow}
      </ul>
    </main>
  );
}

export default ListingsContainer;
