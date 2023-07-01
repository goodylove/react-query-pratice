import React, { useEffect, useState } from "react";
import axios from "axios";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [erro, setError] = useState(false);

  const handleFetch = () => {
    axios
      .get("http://localhost:3000/heroes")
      .then((response) => {
        setIsLoading(false);
        setData(response.data);
      })
      .catch((error) => {
        setError(error);
        // console.log(error.message);
      });

    // setData(response.results);
  };
  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <>
      {isLoading && <h2>loading</h2>}
      <div>
        {data.map((item, index) => (
          <div key={index}>{item.name}</div>
        ))}
      </div>
    </>
  );
};

export default HomePage;
