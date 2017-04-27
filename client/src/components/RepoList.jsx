import React from 'react';

class RepoList extends React.Component {
	constructor (props) {
		super(props);

	}

	clickhandler() {
		console.log('i got clicked!!!!!!!!!!!!!!!!!!!!!!')
		//make the get request in here to display the repos
		//BOOM!!!!!!!!!!!!!!!!!cvm,.  ,m
	}

	render () {
		return (
	  <div>
	    <h4> Repo List Component </h4>
	    <ul>
	    There are {this.props.repos.length} repos.
	  	{this.props.repos.map((user) => <ol onClick={this.clickhandler.bind(this)}>{user.owner.login}</ol> )}
	  	</ul>
	  </div>
			)
	}
}

export default RepoList;