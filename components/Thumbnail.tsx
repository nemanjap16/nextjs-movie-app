import { DocumentData } from 'firebase/firestore'
import Image from 'next/image'
import { useRecoilState } from 'recoil'
import { modalState, movieState } from '../atoms/modalAtom'
import { Movie } from '../typings'

interface Props {
  movie: Movie | DocumentData
}

const imgPath = `https://image.tmdb.org/t/p/w500`

const Thimbnail = ({ movie }: Props) => {
  const [showModal, setShowModal] = useRecoilState(modalState)
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState)
  return (
    <div
      className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105"
      onClick={() => {
        setCurrentMovie(movie)
        setShowModal(true)
      }}
    >
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
