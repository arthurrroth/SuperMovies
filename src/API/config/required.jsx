
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
        return data;


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
   

    

// export const OptionsImg = fetchedData('https://api.themoviedb.org/3/configuration').images;
// export const Countries3166_1i = fetchedData('https://api.themoviedb.org/3/configuration/countries');
// export const JobsInFilm = fetchedData('https://api.themoviedb.org/3/configuration/jobs');
// export const Languages639_1i = fetchedData('https://api.themoviedb.org/3/configuration/languages');
// export const AvailableTranslations = fetchedData('https://api.themoviedb.org/3/configuration/primary_translations');
// export const Timezones = fetchedData('https://api.themoviedb.org/3/configuration/timezones');
// export const Authentication = fetchedData('https://api.themoviedb.org/3/authentication');
// export const REQ_Token = fetchedData('https://api.themoviedb.org/3/authentication/token/new');
// export const Movies = fetchedData('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc');
// export const SessionID = fetchedData('https://api.themoviedb.org/3/authentication/guest_session/new');
// export const Certs = fetchedData('https://api.themoviedb.org/3/certification/movie/list');
// export const TVcerts = fetchedData('https://api.themoviedb.org/3/certification/tv/list');
// export const RecentlyUpdatedMovies = fetchedData('https://api.themoviedb.org/3/movie/changes');
// export const RecentlyUpdatedTvSeries = fetchedData('https://api.themoviedb.org/3/tv/changes');

export const DiscoveredMovies = getDiscoveredMovies();
