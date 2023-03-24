import { Menu } from '@headlessui/react'
import { Link } from 'react-router-dom'

import styles from './styles.module.css'

const navlinks = [
  { to: '/', title: 'Home' },
  { to: '/about', title: 'About' },
  { to: '/contact', title: 'Contact' },
]

function CustomDropdown() {
  return (
    <Menu>
      <Menu.Button className={styles.button} >Navigation</Menu.Button>
      <div className={styles.container}>
        <Menu.Items className={styles.items}>
          {
            navlinks.map(
              (link) => {
                return (
                  <Menu.Item key={link.title}>
                    {({ active }) => (
                      <Link
                        to={link.to}
                        className={styles.link}
                      >
                        {link.title}
                      </Link>
                    )}
                  </Menu.Item>
                )
              }
            )
          }

        </Menu.Items>
      </div>
    </Menu>
  )
}

export default CustomDropdown