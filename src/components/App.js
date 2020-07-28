import React, { useEffect, useState } from 'react'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'

const App = props => {
	const [location, setLocation] = useState(null);
	const [errorMessage, setErrorMessage] = useState(null);

	useEffect( () => {
		window.navigator.geolocation.getCurrentPosition(
			pos => {
				console.log(pos.coords);
				setLocation(pos);
			},
			error => setErrorMessage(error.message) 
	  )
	})

	return location ? (
		// Show the location if defined 
		<SeasonDisplay latitude={location.coords.latitude}/>
	) : errorMessage ? (
		// Show error message if exists
		<div> Error accessing location: {errorMessage} </div>
	) : <Spinner text={"Getting location..."} />
}

export default App;
