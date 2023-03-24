import {
  Link,
  Outlet
} from 'react-router-dom'

import styles from './styles.module.css'

import { CustomDropdown } from '../../components/CustomDropdown/CustomDropdown'

export function BaseLayout() {
  return (
    <div className={styles.App}>
      <header className={styles.header}>
        <h1>Header</h1>

        <nav>
          <CustomDropdown />
        </nav>
      </header>

      <Outlet />

      <footer className={styles.footer}>
        <h4>Footer</h4>
      </footer>
    </div>
  )
}