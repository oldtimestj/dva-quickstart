import React from 'react'

const Counter = ({number,dispatch}) => {

  return (
    <div>
      <h1>{number.count}</h1>
      <button onClick={() => {dispatch({type:'number/add',name:"tjwang"})}}>+</button>
      <button onClick={() => {dispatch({type:'number/sub'})}}>-</button>
      <button onClick={() => {dispatch({type:'number/asyncAdd',name:"tjwang"})}}>asyncAdd</button>
    </div>
  )
}

export default Counter

