import { Menu } from '@headlessui/react'
import { Link } from 'react-router-dom'

import styles from './styles.module.css'

export function NavbarNavigation({
  paths
}) {
  return (
    <Menu>
      <Menu.Button className={styles.button}>Navigation</Menu.Button>
      <div className={styles.container}>
        <Menu.Items className={styles.items}>
          {
            paths.map(
              (link) => {
                return (
                  <Menu.Item key={link.title}>
                    {() => (
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