import { Route, Routes } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.css"
import "./App.css"
import Calculator from "./components/Calculator"
import Preis from "./components/rechnung/Preis"
import Header from "./components/header/Header"
import Angebot from "./components/angebot/Angebot"
import Cabinet from "./components/cabinet/Cabinet"
import Rechnung from "./components/rechnung/Rechnung"

export const apiUrl = "http://localhost:5002"

const App = () => {
  return (
    <div className="">
      <Header/>
      <Routes>
        <Route path="/" element={<Calculator />} />
        <Route path="/rechnung" element={<Rechnung />} />
        <Route path="/angebot" element={<Angebot />} />
        <Route path="/cabinet" element={<Cabinet />} />
      </Routes>
    </div>
  )
}

export default App
