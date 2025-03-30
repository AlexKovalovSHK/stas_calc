import { Route, Routes } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.css"
import "./App.css"
import Calculator from "./components/Calculator"
import Preis from "./components/Preis"
import Rechnung from "./components/Rechnung"
import Header from "./components/header/Header"
import Angebot from "./components/angebot/Angebot"
import Cabinet from "./components/cabinet/Cabinet"

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
