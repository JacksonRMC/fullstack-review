import React from 'react';
import $ from 'jquery';

class RepoList extends React.Component {
	
	constructor (props) {
	  super(props);
	}



	render () {
		return (
	  <div>
	    <h4> Repo List Component </h4>
	    <ul>
	    There are {this.props.repos.length} repos.
	  	    {this.props.repos.map((user, index) => 
	  		<ol key={index} >
	  		{user.owner.login} 
	  		<a href={user.html_url}> <button> {user.name} </button> </a>
	  		</ol> )}
	  	</ul>
	  </div>
			)
	}
}

export default RepoList;