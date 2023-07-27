import MovieList from "../components/MovieList";

const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;
const REACT_APP_ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;


 export const getMovies = async() => {

    try{
        const response = await fetch ( `${REACT_APP_BASE_URL}/3/movie/popular`,{
            method:'GET',
            headers:{
                Authorization: `Bearer  ${REACT_APP_ACCESS_TOKEN}`
            }
        });

        const result = await response.json();
        console.log("result",result);
        return result

    }
    catch (error){
        return error.message
    }

}
export const handleSearch=(searchValue)=>{
    if(!searchValue.trim()){
        
        getMovies(MovieList.results);
    }
    else{
        
            try{
                const response = fetch ( `${REACT_APP_BASE_URL}/3/movie?query=${searchValue}`,{
                    method:'GET',
                    headers:{
                        Authorization: `Bearer  ${REACT_APP_ACCESS_TOKEN}`
                    }
                });
        
                const result =  response.json();
                console.log("result",result);
                getMovies(result.results)
        
            }
    
    catch (error){
        return error.message
    }

    }

    
}
export const getMovieDetails = async (movieId) => {
    try {
      const response = await fetch(`${REACT_APP_BASE_URL}/3/movie/${movieId}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${REACT_APP_ACCESS_TOKEN}`,
        },
      });
  
      const result = await response.json();
      return result;
    } catch (error) {
      return error.message;
    }
  };

  export const getCategories =async() =>{
    try{
    const response = await fetch (`${REACT_APP_BASE_URL}/3/movie/now_playing`,{
        method:'GET',
        headers:{
            Authorization:`Bearer ${REACT_APP_ACCESS_TOKEN}`
        }
    })
    const result = await response.json();
    return result;
    }
    catch(error){
        return error.message;
    }
    }
   