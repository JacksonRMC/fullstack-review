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
	    {console.log(this.props)}
	  	    {this.props.repos.map((user, index) => 
	  		<ol key={index} >
	  		{user.username} 
	  	    <button> {user.score} </button> 
	  		</ol> )}
	  	</ul>
	  </div>
			)
	}
}

export default RepoList;