import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

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
		<div> Location: {location.coords.latitude} </div>
	) : errorMessage ? (
		// Show error message if exists
		<div> Error accessing location: {errorMessage} </div>
	) : <div> Loading... </div> 
}

ReactDOM.render(<App/>, document.querySelector('#root'))
