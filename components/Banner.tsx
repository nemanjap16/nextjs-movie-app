import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Movie } from '../typings'
import { baseUrl } from '../constants/baseurl'
import { FaPlay } from 'react-icons/fa'
import { InformationCircleIcon } from '@heroicons/react/solid'

interface Props {
  netflixOriginals: Movie[]
}

const Banner = ({ netflixOriginals }: Props) => {
  const [movie, setMovie] = useState<Movie | null>(null)
  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    )

    return () => {
      setMovie(null)
    }
  }, [netflixOriginals])

  return (
    <div className="flex flex-col justify-end space-y-4 py-16 lg:h-[50vh]">
      <div className="absolute top-0 left-0 -z-10 h-[90vh] w-screen">
        <Image
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h1 className="text-shadow mb-1 text-xl font-bold md:mb-3 md:text-3xl lg:mb-5 lg:text-5xl">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p className="text-shadow max-w-xs text-xs md:max-w-xl md:text-sm lg:max-w-2xl lg:text-base">
        {movie?.overview}
      </p>
      <div className="flex space-x-3">
        <button className="bannerButton bg-white text-black">
          <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" /> Play
        </button>
        <button className="bannerButton text-wite bg-[gray]/70">
          More Info
          <InformationCircleIcon className="h-5 w-5 text-white md:h-8 md:w-8" />
        </button>
      </div>
    </div>
  )
}

export default Banner
