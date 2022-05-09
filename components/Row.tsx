import Thumbnail from './Thumbnail'
import { DocumentData } from 'firebase/firestore'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import { Movie } from '../typings'
import { useRef, useState } from 'react'

interface Props {
  title: string
  movies: Movie[] | DocumentData[]
}

const Row = ({ title, movies }: Props) => {
  const rowRef = useRef<HTMLDivElement>(null)
  const [isClicked, setIsClicked] = useState(false)

  const clicked = (direction: string) => {
    setIsClicked(true)
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current
      const scrollTo =
        direction === 'left'
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth

      rowRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth',
      })
    }
  }
  return (
    <div className="h-40 space-y-0.5 md:space-y-2">
      <h2 className="w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-xl">
        {title}
      </h2>
      <div className="group relative">
        <ChevronLeftIcon
          className={`chevronIcon left-2 ${isClicked ? '' : 'hidden'}`}
          onClick={() => clicked('left')}
        />
        <div
          ref={rowRef}
          className="flex items-center space-x-0.5 overflow-x-scroll scrollbar-hide md:space-x-2.5"
        >
          {movies.map((movie) => (
            <Thumbnail key={movie.id} movie={movie} />
          ))}
        </div>
        <ChevronRightIcon
          className="chevronIcon right-2"
          onClick={() => clicked('right')}
        />
      </div>
    </div>
  )
}

export default Row
