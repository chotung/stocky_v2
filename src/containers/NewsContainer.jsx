import React, { Component } from 'react'
import News from '../components/News'
import '../styles/newsContainer.css'
// import '../styles/stockContainer.css'

export default class NewsContainer extends Component {
  render() {
    return(
      <div className="news" >
        <News />
      </div>
    )
  }
} 