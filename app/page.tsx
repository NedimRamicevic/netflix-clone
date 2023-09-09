import Image from 'next/image'
import Navbar from './components/navbar'
import MovieList from './components/MovieList'
import Billboard from './components/Billboard'

export default function Home() {
  return (
    <div className='flex flex-col gap-6 h-full'>
       <Navbar />
       <Billboard/>
       <MovieList title='Top 10' />
       <MovieList title = 'Movies '/>
    </div>
  )
}
