import React from "react";


const FindByUser = ( { onHandleSearch } ) => {

	function handleSearch(e) {
		const value = e.target.value
		onHandleSearch(value)
	}

	return (
		<>
			<div className="search-bar">
				<input type="text"
					placeholder="Search..." 
					onChange={handleSearch}
				/>
			</div>
		</>

		
	);
};

export default FindByUser;

