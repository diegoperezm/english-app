import React, { Component } from 'react';
import './App.css';

class App extends Component {

 constructor( props ) {
  super( props );
     this.state = { title:''};
 };

 componentDidMount() {
   fetch('/api')
    .then( res => res.json() )
    .then( data => this.setState({ ...data })); 
 };

 render() {
    return (
      <div className="App">
        <header className="App-header">
           <h1 className="App-title">English App</h1>
        </header>
            <textarea 
	      cols="40" 
	      rows="10" 
              placeholder="write here"/>
            <p>Translated text</p> 
       </div>
    );
  }
}

export default App;
