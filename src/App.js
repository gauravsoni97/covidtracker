import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Covid from './component/Covid'
import "./index.scss"
const App = () => {
  return (
    <>
      <h1 className="text-center mt-5">Covid-19 Tracker - INDIA</h1>
      <Covid />
    </>
  )
}

export default App
