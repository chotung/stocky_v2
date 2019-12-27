import React from 'react'


export default function News(props) {
  const {  headline, url, summary, } = props.article

  return (
    <article className='uk-margin-small-top uk-width-1-1 uk-article article' >
      <h1 className="uk-article-title">{headline}</h1>
      <p className='uk-margin-remove uk-article-meta'>{summary}</p>
      <a className='uk-link-text' href={url} target='_blank' rel="noopener noreferrer" >{url}</a>
    </article>
  )
}


    // {
    //     "datetime": "2019-01-19T14:43:16-05:00",
    //     "headline": "Monday's 'Jimmy Kimmel Live!' to mark end of President Trump's half-term",
    //     "source": "UPI",
    //     "url": "https://api.iextrading.com/1.0/stock/market/article/6825704891571834",
    //     "summary": "   Jan. 19 (UPI) --   Monday's edition of Jimmy Kimmel Live! is being subtitled as Intermission Accomplished: A Halftime Tribute to Trump.    History has been made in the two years since Donald J. Trump was sworn in as the 45th president of the United States,  an ABC news release said.  This Mond…",
    //     "related": "Celebrity News and Gossip,National News",
    //     "image": "https://api.iextrading.com/1.0/stock/market/news-image/6825704891571834"
    // },