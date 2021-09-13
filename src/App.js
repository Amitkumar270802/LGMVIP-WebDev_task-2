import Users from "./components/UserPage";
import './App.css';

import React, { Component } from 'react'
	
class App extends Component {
  constructor(props){
	super(props)
		
	this.state = {users_data :[],
                loading : true                
  }
	this.updateState = this.updateState.bind(this)
  }
  updateState(){
      const link="https://reqres.in/api/users?page=1";
      fetch(link)
      .then(response => response.json())
      .then((users) => {

        this.setState({users_data :users.data,loading: false })
        console.log(users.data);
      })
      .catch((error) => {
        console.error(error)
      })
  }
  render(){
    return (<>
            <div className="navbar">
            <div className="logo"></div>
            <button onClick={this.updateState} className="btn">Get Users</button>
          </div>
        <div className="container">
         <Users loading={this.state.loading} users={this.state.users_data}/>
         </div>
    </>
    )
  }
}
export default App;
