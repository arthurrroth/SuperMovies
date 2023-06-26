
// Requiered Image Data => Base URLs for Image Adresses + Valid Image Sizes

const GET_options = {
    method: 'GET',
    headers: {
      accept: 'application/json',

      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZTgxODk3NTgzMWEwMTQwOTQ0NGVlMzU1NGU0ODI3ZCIsInN1YiI6IjY0OTJjYTAxNGJhNTIyMDBhYzI2ZTgzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FvTDHQ1-lJjV5xNiQkWwVMBxwynndsMqu8P6U-LituE'
    }
  };
  
  export const fetchedData = async (url) => {
    
   try {

    const response = await fetch(url, GET_options);
    const data = await response.json();

    return data
    


   } catch (error) {
    console.log(error);
   };

  };

  const getDiscoveredMovies = async () => {
    let movieArr = [];
    for (let i = 1; i < 4; i++) {
        const movies = await fetchedData(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&page=${i}`);
        movieArr.push(...movies.results);
    }
    return movieArr
  }

export const DiscoveredMovies = getDiscoveredMovies();
export const Genres_Movies = fetchedData('https://api.themoviedb.org/3/genre/movie/list')