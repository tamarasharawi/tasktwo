import React from 'react'
import updatedComponent from './HOC'

function Person2({money , handleIncrease}) {

  return (
    <div>
      <h2> ali click : {money}$</h2>
      <button onClick={handleIncrease}>increase money</button>
    </div>
  )
}

export default updatedComponent(Person2) ; 
