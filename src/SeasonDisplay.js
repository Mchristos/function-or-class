import React from 'react'

const getSeason = (latitude, month) => {
	// April to September = Winter in the South 
	if (month > 2 && month < 9){
		return latitude < 0 ? 'winter' : 'summer'
	// October to March
	} else{
		return latitude < 0 ? 'summer' : 'winter'
	}
}

const SeasonDisplay = props => {
	const { latitude } = props;
	const season = getSeason(latitude, new Date().getMonth()) 
	return (
		<div> 
			<h1>
				{season === 'winter' ? 'Brrrrr shes cold' : 'Taking it easy in the shade'}  
			</h1>
		</div>
	)
}

export default SeasonDisplay
