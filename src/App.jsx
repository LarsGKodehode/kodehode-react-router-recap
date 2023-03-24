import {
  // Router componet
  HashRouter as Router,
  // Routes and route
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'

import { BaseLayout } from './layout/BaseLayout/BaseLayout'

import { LandingPage } from './routes/LandingPage'
import { AboutPage } from './routes/about/AboutPage'
import { ContactPage } from './routes/contact/ContactPage'

export function App() {
  return (
    <Router>
      <Routes>

        <Route path='/' element={<BaseLayout />}>
          <Route index element={<LandingPage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='contact' element={<ContactPage />} />
        </Route>

        <Route path='*' element={<Navigate to="/" replace />} />

      </Routes>
    </Router>
  )
}