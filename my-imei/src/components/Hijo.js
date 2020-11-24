import React from 'react'

export const Hijo = ({ numPadre, change }) => {
  let menos = () => {
    // numPadre--;
    change('menos')
  }
  
  let mas = () => {
    // numPadre++;
    change('mas')
  }

  return (
    <div>
      <h1>{ numPadre }</h1>
      <button onClick={ menos }> menos </button>
      <button onClick={ mas }> mas </button>
    </div>
  )
}
