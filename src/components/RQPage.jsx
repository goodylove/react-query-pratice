import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchHero = () => {
  return axios.get("http://localhost:3000/heroes");
};
const RQPage = () => {
  const { isLoading, data, isError, error, isFetching } = useQuery(
    "reactQuery",
    fetchHero

    // {
    //   cacheTime: 5000,
    // }
  );
  console.log(isLoading, isFetching);
  if (isLoading) return <h2>Loading....</h2>;
  if (isError) return <h2>{error.message}</h2>;
  return (
    <>
      <h2>RQPage</h2>
      {data?.data.map((item, index) => (
        <div key={index}>{item.name}</div>
      ))}
    </>
  );
};

export default RQPage;
