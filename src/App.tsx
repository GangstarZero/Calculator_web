import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Calc } from './Pages/calculator'
import { Support } from './Pages/support'

let equalTap = 0;
let opCount = 0;
const history = ["0"];
let i = 1;

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Calc/>}></Route>
        <Route path="/support" element={<Support/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
