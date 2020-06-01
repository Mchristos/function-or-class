import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'


class App extends React.Component {

	// shorter alternative to using constructor() method
  state = { position: null, errorMessage: '' };
	
	componentDidMount(){
	  window.navigator.geolocation.getCurrentPosition(
			pos => {
				console.log(pos.coords);
				this.setState({ position: pos });
			},
			error => this.setState({ errorMessage: error.message }) 
	  );
	}

	render(){
		return this.state.position ? (
			// Show the location if defined 
			< SeasonDisplay latitude={this.state.position.coords.latitude}/>
		) : this.state.errorMessage ? (
			// Show error message if exists
			<div> Error accessing location: {this.state.errorMessage} </div>
		) : (
			// Show loading otherwise
      <Spinner text={"Getting location..."} />
		)
  }
}

ReactDOM.render(<App />, document.querySelector('#root'))
