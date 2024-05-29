import { useEffect, useState } from "react";

export default function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((response) => {
        if (!response.ok) {
          throw new error(`HTTP error! status:${response.status}`);
        }
        return response.json();
      })
      .then((response) => setData(response[currency]))
      .catch((error) => {
        setError(error.message);
        console.log(error);
      });
  }, [currency]);
  return data;
}
