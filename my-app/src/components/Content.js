import React, { Component } from 'react'

import css from './css/Content.module.css'

import Loader from './Loader'

export class Content extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoaded: false
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoaded: true });
    }, 2000);
  }

  render() {
    return (
      <div className={css.Content}>
        <div className={css.TitleBar}>
          <h1>My Photos</h1>
        </div>
        <div className={css.SearchResults}>
        <Loader isLoaded={this.state.isLoaded}/>
        </div>
      </div>
    )
  }
}

export default Content