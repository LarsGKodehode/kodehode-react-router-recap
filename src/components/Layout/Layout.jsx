import {
  Link,
  Outlet
} from 'react-router-dom'

import styles from './styles.module.css'

import CustomDropdown from '../CustomDropdown/CustomDropdown'



function Layout() {
  return (
    <div className={styles.App}>
      <header className={styles.header}>
        <h1>Header</h1>


        <nav>
          <CustomDropdown />
          {/* <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link> */}
        </nav>
      </header>

      <main className={styles.main}>
        <Outlet />
      </main>

      <footer className={styles.footer}>
        <h4>Footer</h4>
      </footer>
    </div>
  )
}

export default Layout