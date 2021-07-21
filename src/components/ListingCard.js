import React, {useState} from "react";

function ListingCard({listing, onClickDelete}) {

  const [favorite, setFavorite] = useState(false)

  const handleFavorite = () => {
    setFavorite(!favorite)
  }

  const handleDelete = () => {
    fetch(`http://localhost:6001/listings/${listing.id}`, {
      method: "DELETE"
    })
    onClickDelete(listing.id)

  }





  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={"description"} />
      </div>
      <div className="details">
        {favorite ? (
          <button onClick={handleFavorite} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleFavorite} className="emoji-button favorite">☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
