import React from 'react'
import { useLocation, useNavigate } from 'react-router'

const Home = () => {
  const navigate =useNavigate();
  const location=useLocation();
  console.log(location)
  return (
    <div>
        <h1>welcome to home page</h1>
        <button onClick={()=>navigate('/about')}>go to about paga</button>
        <br />
        <br />
        <button onClick={()=>navigate('/contact')}>go to contact paga</button>
    </div>
  )
}

export default Home