import React, { Component } from 'react'
import News from '../components/News'

export default class NewsContainer extends Component {
  render() {
    return(
      <div className="news" >
        <News />
      </div>
    )
  }
}