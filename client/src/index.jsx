import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: [],
      current: null
    }

    this.search = this.search.bind(this);
    
    $.ajax({
       url: 'http://127.0.0.1:1128/repos',
       dataType: 'plain/text',
       type: 'GET',
       success: (data) => {
         console.log('data')
      },
       error: (err) => {
        this.setState({
          repos: JSON.parse(err.responseText)
        })
       }
    });

  }



  search (term) {
    
    console.log(JSON.stringify({"term": `${term}`}))
    $.ajax({
      url: 'http://127.0.0.1:1128/repos/import',
      type: 'POST',
      data: {"term": `${term}`},
      datatype: 'application/json',
      error: function (err) {
        if ( err ) {
        console.log(err);
      }
      },
      success: (data) => {
      console.log(`${term} was searched`);
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