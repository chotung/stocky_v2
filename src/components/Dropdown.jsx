import React, { Component } from 'react'

export default class Dropdown extends Component {
  state = {
    displayMenu: false,
  }

  handleClick = () => {
    this.props.onClick(this.props.index)
  }

  // showDropdownMenu = (event) => {
  //   event.preventDefault()
  //   this.setState(prevState => ({ displayMenu: !prevState.displayMenu }))
  // }

  render() {
    return (
    // <div className="uk-child-width-1-1 graph-buttons">
    //   <option
    //     // id='g-btn'
    //     // type='button'
    //     className={'uk-button' + (this.props.isActive ? ' uk-button-primary' : ' uk-button-default')}
    //     onClick={this.handleClick}
    //   >
    //     {this.props.name}
    //   </option>
    // </div>


    // <div className='dropdown'>
    //   <div className='button' onClick={this.showDropdownMenu}>
    //     Range
    //   </div>

    //     {this.state.displayMenu ? (
    //       <ul>
    //         <li><a className="active" href="#Create Page">Create Page</a></li>
    //         <li><a href="#Manage Pages">Manage Pages</a></li>
    //         <li><a href="#Create Ads">Create Ads</a></li>
    //         <li><a href="#Manage Ads">Manage Ads</a></li>
    //         <li><a href="#Activity Logs">Activity Logs</a></li>
    //         <li><a href="#Setting">Setting</a></li>
    //         <li><a href="#Log Out">Log Out</a></li>
    //       </ul>
    //     ) :
    //       (
    //         null
    //       )
    //     }
    // </div>
   <div>people</div>
  )}
}


