import { useState, useEffect } from "react";
import axios from "axios";


const useFetch =  (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);


  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/search/${endpoint}`,
    headers: {
      'X-RapidAPI-Key': 'fa1fb68873mshab664b6a941e2abp1f50f7jsn28bdd63573bf',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    },
    params: {
...query},
    
  };
  
 
  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);

      setData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.log(error)
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
