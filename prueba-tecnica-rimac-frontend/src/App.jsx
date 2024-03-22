import './App.css'
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import PlansPage from './pages/Plans'
import UserPage from './pages/User'
import HeaderPage from './shared/Header'

function App() {

  return (
    <>
     <BrowserRouter>
      <HeaderPage />
        <div className='container-fluid'>
            <Routes>
              <Route exact path="/" element={<UserPage />} />
              <Route path="/user" element={<UserPage/>} />
              <Route path="/plans" element={<PlansPage/>} />
            </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
