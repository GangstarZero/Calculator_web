import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Calc } from './Pages/calculator'
import { SupportPage } from './Pages/supportPage'

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Calc/>}></Route>
        <Route path="/support" element={<SupportPage />}></Route>
      </Routes>
    </Router>
    // hi
  )
}

export default App
