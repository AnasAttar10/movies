import axios from 'axios'
import React, { useEffect, useState } from 'react';
import './Home.css';

export default function Home() {

  let [movies , setmovies] = useState([]);
  let [tvs , settv] = useState([]);
  let BaseImageUrl =  'https://image.tmdb.org/t/p/original';

  async function getDateFromApi(media){
    let {data} = await  axios.get(`https://api.themoviedb.org/3/trending/${media}/day?api_key=37af2ad284f6af4b5ba590dfb4cbe373`) ;
    console.log(data.results); 
    if(media==='tv')
      settv(data.results) ; 
    else
      setmovies(data.results) ; 
  }
  useEffect(()=>{
    getDateFromApi('movies') ;
    getDateFromApi('tv') ; 

  },[]);

  return (
    <>
     <div>
       <h1 className='text-center text-white'>tranding Movies</h1>
       <div className='row'>
          {movies.map((movie)=>
          <div className='col-md-4 parent-movies' key={Math.random()}>
              <h3 className='my-4 text-center text-white'>{(movie.title)?movie.title:'No_Title'}</h3>
              <div className='movie'>
                  <img src={BaseImageUrl + movie.poster_path} />
              </div>
          </div>)}
       </div>
     </div>
     <hr />
     <div>
       <h1 className='text-center text-white'>tranding TV's</h1>
       <div className='row'>
          {tvs.map((tv)=>
          <div className='col-md-4 parent-movies' key={Math.random()}>
              <h3 className='my-4 text-center text-white'>{(tv.name)?tv.name:'No_Title'}</h3>
              <div className='movie'>
                  <img src={BaseImageUrl + tv.poster_path} />
              </div>
          </div>)}
       </div>
     </div>
    </>
    
  )
}
