import { useState } from 'react'
import './App.css'
import GlobalStyles from './styles/GlobalStyles'
import { Route, Routes } from "react-router-dom";
import routes from './navigator/routing';


function App() {

  return (
    <>
      <GlobalStyles/>
      <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          </Routes>


    </>
  )
}

export default App
