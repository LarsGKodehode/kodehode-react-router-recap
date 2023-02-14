import {
  // Router componet
  HashRouter as Router,
  // Routes and route
  Routes,
  Route,
  Outlet
} from 'react-router-dom'

import LandingPage from './routes/LandingPage'

function Layout() {
  return (
    <>
      <header>
        <h1>Header</h1>
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
        </Route>

      </Routes>

    </Router>
  )
}

export default App