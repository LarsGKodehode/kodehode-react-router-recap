import {
  // Router componet
  HashRouter as Router,
  // Routes and route
  Routes,
  Route,
  Outlet,
  Link,
} from 'react-router-dom'

import LandingPage from './routes/LandingPage'
import AboutPage from './routes/about/AboutPage'
import ContactPage from './routes/contact/ContactPage'

function Layout() {
  return (
    <>
      <header>
        <h1>Header</h1>

        <nav>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
        </nav>
      </header>

      <Outlet />
    </>
  )
}

function App() {
  return (
    <Router>
      <Routes>

        <Route path='/' element={<Layout />}>
          {/* props.index === default path === path='' */}
          <Route index element={<LandingPage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='contact' element={<ContactPage />} />
        </Route>

      </Routes>
    </Router>
  )
}

export default App