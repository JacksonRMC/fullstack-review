import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }
    // ['search'].forEach((func) => {
    //   this[func] = this[func].bind(this)
    // })
    this.search = this.search.bind(this);
  }

  search (term) {
    console.log(`${term} was searched`);
    $.ajax({
      url: 'http://127.0.0.1:1128/repos/import',
      data: JSON.stringify({"term": `${term}`}),
      type: 'POST',
      datatype: 'application/json',
      error: function (err) {
        if ( err ) {
        console.log('err');
      }
      },
      success: (data) => {
       this.setState({
        repos: data
       })
      }
    })
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));