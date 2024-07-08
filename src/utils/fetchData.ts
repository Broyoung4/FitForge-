const mySecret =
import.meta. env['REACT_APP_RAPID_API_KEY'
];

export const exercisesOptions = {
   method: 'GET',
   params: {limit: '10'},
   headers: {
     'X-RapidAPI-Host':           'exercisedb.p.rapidapi.com',
     'X-RapidAPI-Key': 'a1394e1c20msha5ca01a853e4f0dp1c3e45jsnd97b5cc469a5'
       }
};

export const youtubeOptions =  {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'a1394e1c20msha5ca01a853e4f0dp1c3e45jsnd97b5cc469a5',
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