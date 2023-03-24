import {
  Outlet
} from 'react-router-dom'

import styles from './styles.module.css'

import { NavbarNavigation } from '../../components/NavbarNavigation/NavbarNavigation'

const siteRoutes = [
  { to: '/', title: 'Home' },
  { to: '/about', title: 'About' },
  { to: '/contact', title: 'Contact' },
]

export function BaseLayout() {
  return (
    <div className={styles.App}>
      <header className={styles.header}>
        <h1>Header</h1>

        <nav>
          <NavbarNavigation paths={siteRoutes} />
        </nav>
      </header>

      <Outlet />

      <footer className={styles.footer}>
        <h4>Footer</h4>
      </footer>
    </div>
  )
}