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
		<div> Location: {location.coords.latitude} </div>
	) : <div> Error accessing location: {errorMessage} </div> 
}

ReactDOM.render(<App/>, document.querySelector('#root'))
