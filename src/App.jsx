import React,{ useEffect }  from 'react'
import Navigation from './components/Navigation'
import { useNavigate } from 'react-router-dom'
export default function App() {
  const navigate=useNavigate()
  useEffect(()=>{
    if(!localStorage.getItem("utilisateur")){
        navigate("/connexion")
    }
})
  return (
    <div >
     
<Navigation/>   

</div>
  )
}
