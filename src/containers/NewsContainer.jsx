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
    return <div className="uk-padding-remove-left uk-margin news uk-article uk-width-1-1">
        {this.newsFeed()}
      </div>;
  }
} 