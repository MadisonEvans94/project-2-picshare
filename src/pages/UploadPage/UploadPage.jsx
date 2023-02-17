import React, { useState } from "react";
import "./UploadPage.css"

const UploadPage = ( {onAddItem} ) => {


	const initialValue = {
		name: "",
		artist: "",
		image: "",
		cat: "",
		des: ""
	}

	const [formData, setFormData] = useState(initialValue)

	function handleInput(e) {
		const value = e.target.value
		const name = e.target.name
		setFormData({...formData, [name]: value})
	}

	function handleSubmit(e) {
		e.preventDefault()

		const newItem = {
			name: formData.name,
			artist: formData.artist,
			image: formData.image,
			cat: formData.cat,
			des: formData.des,
		}


		fetch("http://localhost:3200/items", {
			method: "POST",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify(newItem)
		  })
		  .then(res => res.json())
		  .then(newObj => onAddItem(newObj))
	  
		  setFormData(initialValue)
		
	}

	return (
				<div className="upload-form">
					<h1>Add a New Item</h1>
					<form onSubmit={handleSubmit}>
						<input type="text" 
							   name="name"
							   placeholder="name"
							   value={formData.name}
							   onChange={handleInput}
						/>
						<input type="text" 
							   name="artist"
							   placeholder="artist"
							   value={formData.artist}
							   onChange={handleInput}
						/>
						<input type="text" 
							   name="image"
							   placeholder="image URL"
							   value={formData.image}
							   onChange={handleInput}
						/>
						<div>
							<select name="cat" defaultValue="default" onChange={handleInput}>
								<option name ="default" value="default"  disabled>Select a Category</option>
								<option value="Painting">Painting</option>
								<option value="Sculpture">Sculpture</option>
								<option value="Pottery">Pottery</option>
							</select>
						</div>


						<input type="text" 
							   name="des"
							   placeholder="description"
							   value={formData.des}
							   onChange={handleInput}
						/>
						<input type="submit"/>
					</form>
				</div>
			);
};

export default UploadPage;
