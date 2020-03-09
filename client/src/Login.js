import React from 'react';
import './App.css';
import {Redirect} from 'react-router-dom';

class Login extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        email: '',
        password: '',
        errorMessage: '',
        logged: false
      }
    }
  
    onSubmit = (e) => {
      e.preventDefault();
      fetch('http://localhost:9000/login' , { method: "POST", headers: {'Content-type': 'application/json'},
        body: JSON.stringify(this.state)
      }).then((result) => result.json()).then((info) => { 
        if (info.success === false) {
            this.setState({errorMessage: info.message});
        } else {
            this.setState({logged: true})
        }
      })
    }
  
    handleInputChange = (e) => {
      this.setState({[e.target.name]: e.target.value});
    }

    renderRedirect = () => {
        if (this.state.logged) {
          return <Redirect to='/success'  />
        }
      }
  
    render() {
        return (
            <div>
            {this.renderRedirect()}
          <form onSubmit={this.onSubmit}>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" name="email" onChange={this.handleInputChange} id="email" class="form-control"/>
            </div>
            <div class="form-group">
                <label>Password: </label>
                <input type="password" name="password" onChange={this.handleInputChange} id="password" class="form-control"/>
            </div>
            <button type="submit" class="btn btn-primary btn-block" id="login" name="login">Submit</button>
            </form>
              { this.state.errorMessage && <h3 id="errorMessage" name="errorMessage">{ this.state.errorMessage }</h3> }
            </div>
          );
    }
  }

export default Login;
