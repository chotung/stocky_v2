import React, { Component} from 'react'

export default class GraphHeader extends Component{

  handleClick = () => {
    this.props.onClick(this.props.index)
  }

  render() {
    return <div className="uk-child-width-1-1 graph-buttons">
    
    <button
      id='g-btn'
      type='button'
      className={'uk-button' + (this.props.isActive ? ' uk-button-primary' : ' uk-button-default' )}
      onClick={ this.handleClick }
    >
       {this.props.name }
    </button>
  
    </div>;
  }
}


