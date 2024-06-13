import React,{ useEffect }  from 'react'
import Navbar from './components/Navbar'
import { useNavigate,Outlet,useLocation } from 'react-router-dom'

import Caroussel from './components/Caroussel'
export default function App() {
  const navigate=useNavigate()
  const location = useLocation();
  const isAccueil = location.pathname === '/accueil';
  useEffect(()=>{
    if(!localStorage.getItem("utilisateur")){
        navigate("/connexion")
    }
})
  return (
    <div >
     
<Navbar/>  
{isAccueil?<Caroussel/> :<Outlet /> }


</div>
  )
}
