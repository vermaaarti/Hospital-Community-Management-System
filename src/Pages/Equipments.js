import React from 'react'

function Equipments({state}) {
  return (
    <div> {state.name}  :  {state.quantity || 0}</div>
  )
}

export default Equipments;