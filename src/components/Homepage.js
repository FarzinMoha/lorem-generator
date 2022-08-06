import React from 'react'

function Homepage(props) {
    const lorem = props.lorem
  return (
    <div className='lorems'>{lorem.map((item,index)=>{
        return <p key={index}>{item.body}</p>
    })}</div>
  )
}

export default Homepage