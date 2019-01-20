import React, { Component } from 'react'
import News from '../components/News'
import '../styles/newsContainer.css'
// import '../styles/stockContainer.css'

export default class NewsContainer extends Component {

  state = {
    faker: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    
  }

  newsFeed = () => {
    const { news } = this.props
    const singleNewsFeed = news.map(article => {
      return <News article={article} />
    })
    return singleNewsFeed
  }
  


  render() {
    return(
      <div className="news" >
        {this.newsFeed()}
      </div>
    )
  }
} 