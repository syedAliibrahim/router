import {React} from 'react'
import { useParams,useLocation } from 'react-router'

function Cuser() {
    const params=useParams();
    const {name}=params;
    console.warn(name)
    
    const location=useLocation();
  console.log(location)
  return (
    <div><h1>cuser</h1></div>
  )
}

export default Cuser