import { Menu } from '@headlessui/react'
import { Link } from 'react-router-dom'

const navlinks = [
  {to: '/', title: 'Home'},
  {to: '/about', title: 'About'},
  {to: '/contact', title: 'Contact'},
]

function CustomDropdown() {
  return (
    <Menu>
      <Menu.Button>Navigation</Menu.Button>
      <Menu.Items>

        {
          navlinks.map(
            (link) => {
              return (
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to={link.to}
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
    </Menu>
  )
}

export default CustomDropdown