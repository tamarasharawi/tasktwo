import React from 'react'
import updatedComponent from './HOC'

function Person1({money , handleIncrease}) {
  
  return (
    <div>
      <h2> tamara click : {money}$</h2>
      <button onClick={handleIncrease}>increase money</button>
    </div>
  )
}

export default updatedComponent(Person1) ;
