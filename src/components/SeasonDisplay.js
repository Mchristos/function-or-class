import React from 'react'
import './SeasonDisplay.css'

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
	winter: {seasonText: "Brrrrr she's cold", iconName: 'snowflake'},
	summer: {seasonText: 'Taking it easy on the beach', iconName: 'sun'}
}

const SeasonDisplay = props => {
	const { latitude } = props;
	const season = getSeason(latitude, new Date().getMonth()) 
	const {seasonText, iconName} = seasonConfig[season] 
	return (
		<div className ={`season-display ${season}`}> 
			<i className={`icon-left massive ${iconName} icon`} />
			<h1>
				{seasonText}
			</h1>
			<i className={`icon-right massive ${iconName} icon`} />
		</div>
	)
}

export default SeasonDisplay
