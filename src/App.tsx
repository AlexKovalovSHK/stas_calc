import { Route, Routes } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.css"
import "./App.css"
import Calculator from "./components/Calculator"

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Calculator />} />
      </Routes>
    </div>
  )
}

export default App
