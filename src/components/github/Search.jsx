import React, {Component} from 'react';

class Search extends Component {

	onSubmit(e) {
		e.preventDefault();
		let username = this.refs.username.value.trim();
		if(!username) {
			alert('Please enter username');
			return;
		}
		this.props.onFormSubmit(username);
		this.refs.username.value = '';
	}

	render() {
		return(
			<div>
				<form onSubmit={this.onSubmit.bind(this)}>
					<lable>Search GitHub Users</lable>
					<input type="text" ref="username" className="form-control" />
				</form>
			</div>
		)
	}
}

export default Search