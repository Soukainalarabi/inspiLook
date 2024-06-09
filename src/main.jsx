import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import  { Toaster} from "react-hot-toast"
import Inscription from './pages/inscription/Inscription.jsx'
import Connexion from './pages/connexion/Connexion.jsx'
import "./index.css"
import Erreur from './pages/erreur/Erreur.jsx'

//createBrowserRouter: une fonction qui permet de créer notre routage
//RouterProvider: une fonction ou un composant qui va passer a notre application tous les route qu'on a définie
const route=createBrowserRouter([
  {path:"/",
  element:<App estConnecte={true}/>
  },{path:"/connexion",
  element:<Connexion/>
  },{path:"/inscription",
  element:<Inscription/>
  },{
    path:"*",
    element:<Erreur/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toaster/>
    <RouterProvider router={route}/>

  </React.StrictMode>,
)
