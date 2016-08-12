import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Profile from './github/Profile.jsx';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			username: 'diolen',
			userData: [],
			userRepos: [],
			perPage: 5
		}
	}

	// Get user data from GitHub
	getUserData() {
		$.ajax({
			url: 'https://api.github.com/users/'+this.state.username+'?clientId='+this.props.clientId+'&client_secret='+this.props.clientSecret,
			dataType: 'json',
			cache: false,
			success: function(data) {
				this.setState({userData: data});
				console.log(data);
			}.bind(this),
			error: function(xhr, status, err) {
				this.setState({username: null});
				alert(err);
			}.bind(this)
		});
	}

	componentDidMount() {
		this.getUserData();
	}

	render() {
		return(
			<div>
				<Profile userData = {this.state.userData} />
			</div>
		)
	}
}

App.propTypes = {
	clientId: React.PropTypes.string,
	clientSecret: React.PropTypes.string
};

App.defaultProps = {
	clientId: 'b788d35eed5fa599e9ec',
	clientSecret: 'c0b1a8f337c5bc70b214cf2e45576cf70f4b9712'	
}

export default App