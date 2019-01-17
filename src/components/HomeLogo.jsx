import React from 'react'

export default function HomeLogo(props) {
  return (
    <div>
      <h1 className='logo' onClick={props.home}>Home</h1>
    </div>
  )
}
