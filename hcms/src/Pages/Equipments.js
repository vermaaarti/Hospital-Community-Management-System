import React from 'react'

function Equipments({state , searchval}) {

    const filteredData =state.find((obj)=>{
         return obj.name===searchval
    });
    console.log(filteredData);

  return (
    <div> {filteredData.name}  :  {filteredData.quantity}</div>
  )
}

export default Equipments;