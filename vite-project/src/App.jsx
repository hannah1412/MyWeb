import { Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import NavBar from './components/NavBar'
import {Home, About, Products} from './pages'
const App = () => {
  return (
    <main className='bg-slate-300/20'>
        <Router>
            <NavBar></NavBar>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />}/>
                <Route path='/products' element={<Products />}/>
            </Routes>
        </Router>
    </main>
  )
}

export default App