import React, { Component } from 'react'
import News from '../components/News'
import '../styles/newsContainer.css'

export default class NewsContainer extends Component {

  

  newsFeed = () => {
    const { news } = this.props
    const singleNewsFeed = news.map(article => {
      return <News article={article} key={Math.random()} />
    })
    return singleNewsFeed
  }
  


  render() {
    return <div className="uk-flex uk-flex-column uk-padding-remove  news">
        {this.newsFeed()}
      </div>;
  }
} 