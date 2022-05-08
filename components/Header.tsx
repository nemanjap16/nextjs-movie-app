import { useEffect, useState } from 'react'
import { BellIcon, SearchIcon } from '@heroicons/react/solid'
import useAuth from '../hooks/useAuth'

const Header = () => {
  const { logout } = useAuth()
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`${scrolled && 'bg-[#141414]'}`}>
      <div className="flex space-x-2 md:space-x-10">
        <img
          src="https://rb.gy/ulxxee"
          alt="avatar"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />
        <ul className="hidden space-x-8 md:flex">
          <li className="headerLink">Home</li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li>
        </ul>
      </div>
      <div className="flex items-center space-x-4 text-sm font-light">
        <SearchIcon className="hidden h-6 w-6 sm:inline" />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="hidden h-6 w-6 sm:inline" />
        <img
          src="https://rb.gy/g1pwyx"
          alt="avatar"
          className="cursor-pointer rounded"
          onClick={() => logout()}
        />
      </div>
    </header>
  )
}

export default Header
