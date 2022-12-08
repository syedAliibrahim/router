import {React} from 'react'
import { useParams } from 'react-router'

function Cuser() {
    const params=useParams();
    const {name}=params;
    console.warn(name)
  return (
    <div><h1>cuser</h1></div>
  )
}

export default Cuser