'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const headerLinks = [
  { label: 'Home', route: '/' },
  { label: 'Create Event', route: '/events/create' },
  { label: 'My Profile', route: '/profile' },
  { label: 'Blog', route: '/blog' }
]

const NavItems = () => {
  const pathname = usePathname()

  return (
    <ul className="md:flex-between flex w-full flex-col items-center gap-5 md:flex-row">
      {headerLinks.map((link) => {
        const isActive = pathname === link.route

        return (
          <li
            key={link.route}
            className={`${isActive && 'text-primary'} flex-center p-medium-16 whitespace-nowrap hover:text-primary transition-colors`}
          >
            <Link href={link.route}>{link.label}</Link>
          </li>
        )
      })}
    </ul>
  )
}

export default NavItems
