import {
  // Router componet
  HashRouter as Router,
  // Routes and route
  Routes,
  Route,
} from 'react-router-dom'

import Layout from './components/Layout/Layout'

import LandingPage from './routes/LandingPage'
import AboutPage from './routes/about/AboutPage'
import ContactPage from './routes/contact/ContactPage'


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