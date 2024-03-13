import React, { Component } from 'react'
import css from "./css/NavBarSimple.module.css"
import NavBarChild from './NavBarChild'



export class NavBarForm extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn: true
    }
  }

  handleSignIn = () => {
    this.setState((prevState) => {
      return {
        isLoggedIn: prevState.isLoggedIn === true ? false : true
      }
    })
  }

  render() {
    return (
      <div className={css.NavBar}>
      <h1>My Gallery</h1>
      <NavBarChild 
      isLoggedIn={this.state.isLoggedIn}
      handleSignIn={this.handleSignIn}/>
    </div>
    )
  }
}

export default NavBarForm
