import { useState, useCallback, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);

  const getData = useCallback(async () => {
    let req = await fetch(url);
    if (req.status >= 200 && req.status <= 200) {
      let res = await req.json();
      setData(res);
    } else {
      console.log(req.status);
    }
  }, [url]);

  useEffect(() => {
    getData();
  }, [setData, url]);

  return { data };
}
