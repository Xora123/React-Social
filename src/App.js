import { Route, Routes } from 'react-router-dom'
import Home from './components/Inscription'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
      </Routes>
    </>
  )
}


export default App