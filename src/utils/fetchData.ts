


export const exercisesOptions = {
   method: 'GET',
   params: {limit: '10'},
   headers: {
     'X-RapidAPI-Host':           'exercisedb.p.rapidapi.com',
     'X-RapidAPI-Key': import.meta.env.VITE_APP_RAPID_API_KEY
       }
};

export const youtubeOptions =  {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };

interface fetchDataProps {
  url: string;
  options?: RequestInit;
}

export const fetchData = async(url:fetchDataProps, options:fetchDataProps) => {
  
   const response = await fetch(url, options);
  const data = await response.json();
  return data;
}