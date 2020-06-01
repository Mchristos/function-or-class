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

const seasonConfig = {
	winter: {seasonText: 'Brrrrr shes cold', iconName: 'snowflake'},
	summer: {seasonText: 'Taking it easy on the beach', iconName: 'sun'}
}

const SeasonDisplay = props => {
	const { latitude } = props;
	const season = getSeason(latitude, new Date().getMonth()) 
	const {seasonText, iconName} = seasonConfig[season] 
	return (
		<div> 
			<i className={`massive ${iconName} icon`} />
			<h1>
				{seasonText}
			</h1>
			<i className={`massive ${iconName} icon`} />
		</div>
	)
}

export default SeasonDisplay
