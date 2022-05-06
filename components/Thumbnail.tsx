import Image from 'next/image'
import { Movie } from '../typings'

interface Props {
  movie: Movie
}

const imgPath = `https://image.tmdb.org/t/p/w500`

const Thimbnail = ({ movie }: Props) => {
  return (
    <div className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">
      <Image
        src={`${imgPath}${movie.backdrop_path || movie.poster_path}`}
        alt={movie.title}
        layout={'fill'}
        className="rounded-sm object-cover md:rounded"
      />
    </div>
  )
}

export default Thimbnail
