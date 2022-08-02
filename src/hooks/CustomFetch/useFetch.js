import { useState, useEffect } from 'react'
import axios from 'axios';

const useFetch = (url) => {
  const [responseData, setResponseData] = useState({
    data: null,
    loading: null,
    error: null,
  });

  useEffect(() => {
    setResponseData({
      data: null,
      loading: true,
      error: null,
    });
    axios
      .get(url)
      .then((response) => {
        setResponseData({
          data: response.data.results,
          loading: false,
          error: null,
        })
      })
      .catch((error) => {
        setResponseData({
          data: null,
          loading: false,
          error
        });
      })
      // .finally(() => {
      //   setLoading(false);
      // });
  }, [url])

  return { responseData };
}

export default useFetch;