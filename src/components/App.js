import React, {useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import NewForm from "./NewForm";

function App() {

  const[listings, setListings] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [sorted, setSorted] = useState(false)

 

  useEffect(() => {
    fetch("http://localhost:6001/listings")
     .then(resp => resp.json())
     .then(data => setListings(data))

  }, [])

  const deleteListing = (id) => {
    const updatedListings = listings.filter(listing => listing.id !== id)
    setListings(updatedListings)
  }

  

   const listingsToDisplay = listings.filter(listing => listing.description.toLowerCase().includes(searchTerm.toLowerCase()))

   const handleAddListing = (newListing) => {
    fetch("http://localhost:6001/listings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newListing)
    })
     .then(resp => resp.json())
     .then(data => setListings([...listings, data]))

  }

  let sortedListings

  if(sorted) {
    sortedListings = listingsToDisplay.sort((a, b) => a.location.localeCompare(b.location))
  } else {
    sortedListings = listingsToDisplay
  }


  const handleSortClick = () => setSorted(!sorted)




   
  



  return (
    <div className="app">
      <Header handleSorted={handleSortClick}  searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <NewForm onAddListing={handleAddListing} />
      <ListingsContainer listings={listingsToDisplay} onClickDelete={deleteListing}/>
    </div>
  );
}

export default App;
