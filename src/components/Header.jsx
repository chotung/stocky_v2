import React from 'react'

function Header(props) {
  return (
    <header>
      <h2 onClick={props.myStock}>My Stocks</h2>
    </header>
  )
}

export default Header
