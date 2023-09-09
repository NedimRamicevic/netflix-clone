
'use client'
import React, { useEffect } from 'react';
import movies from '../../public/movies.json';
import MovieCard from './MovieCard';
import { isEmpty } from 'lodash';

 interface MovieInterface {
    id: string;
    title: string;
    description: string;
    thumbnailUrl: string;
    videoUrl: string;
    duration: string;
    genre: string;
  }
interface MovieListProps {
  data: MovieInterface[];
  title: string;
}



const MovieList = () => {
    let data= movies;
  


  return (
    <div className="px-4 md:px-12 mt-4 space-y-8">
      <div>
        <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">Movies</p>
        <div className="grid grid-cols-4 gap-2">
          {data.map((movie:any) => (
            <MovieCard key={movie.id} data={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieList;