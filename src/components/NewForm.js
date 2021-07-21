import React, {useState} from "react"

const NewForm = ({onAddListing}) => { 
    const [formData, setFormData] = useState({
        description: "",
        image: "",
        location: ""
        
      })
    
      const handleChange =(e) => {
        setFormData({
          ...formData, 
          [e.target.name]: e.target.value
        })
      }
    
    
      function handleSubmit(e) {
        e.preventDefault();
        if(formData.description) {
        onAddListing(formData)
        } else {
            alert("Please enter valid information!")
        }
        setFormData({
          description: "",
          image: "",
          location: ""
    
        })
      }

return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input 
      type="text"
      name="description"
      placeholder="enter listing description"
      value={formData.description}
      onChange={handleChange}/>
      <input 
      type="text"
      name="image"
      placeholder="enter listing image"
      value={formData.image}
      onChange={handleChange}/>
      <input 
      type="text"
      name="location"
      placeholder="enter listing location"
      value={formData.location}
      onChange={handleChange}/>
      <button type="submit">Add new Listing </button>
      </form>
      
 )


}

export default NewForm

