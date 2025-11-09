import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Components/Login'
import Layout from './Components/Layout'
import Explore from './Route/Explore'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Layout />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;