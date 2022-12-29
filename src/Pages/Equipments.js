import React from 'react'
import { postDataToAPI } from '../HelperMethods/APiMethods'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import RootUrl from '../URL';

function Equipments({ state }) {

  const [resMes, setResMes] = React.useState({ mes: '', status: false });
  console.log(state);

  const RequestToHospital = (e) => {
    postDataToAPI(`${RootUrl}/makerequest`, { to : state.hospitalId.email }).then((res) => {

      if (res.isError) setResMes({ mes: "unable to request this resource", status: false })
      else setResMes({ mes: res.message, status: true });

    }).catch(() => {
      setResMes({ mes: "unable to request this resource", status: false })
    })
  }

  return (
    <div>
      <Card.Text> {state.name}  :  {state.quantity || 0}</Card.Text>
      <Button className="req-btn " variant="primary" onClick={RequestToHospital} >Request</Button>
      <Card.Text ><p className={(resMes.status) ? "req-res-success-mes" : "req-res-err-mes"} >{resMes.mes}</p> </Card.Text>
    </div>

  )
}

export default Equipments;