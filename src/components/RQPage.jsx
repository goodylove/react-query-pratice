import React, { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { Link } from "react-router-dom";

const fetchHero = () => {
  return axios.get("http://localhost:3000/heroes");
};
const RQPage = () => {
  const [refetchInterval, setRefetchInterval] = useState(3000);
  // const onSuccess = (data) => {
  //   if (data.data.length === 4) {
  //     setRefetchInterval(false);
  //   }
  //   console.log("the data has been fetched successfully", data);
  // };
  // const onError = (data) => {
  //   // console.log("error has occured", data);
  // };
  const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
    "reactQuery",
    fetchHero,

    {
      // refetchInterval,
      // refetchIntervalInBackground: true,
      // staleTime: 3000,
      // refetchOnWindowFocus: true,
      // enabled: false,
      // onError,
      // onSuccess,
      // select: (data) => {
      //   const heroName = data.data.map((hero) => hero.name);
      //   return heroName;
      // },
    }
  );
  if (isLoading) return <h2>Loading....</h2>;
  if (isError) return <h2>{error.message}</h2>;
  return (
    <>
      <h2>RQPage</h2>
      {data?.data.map((item, index) => (
        <div key={index}>
          <Link to={`/rq-page/${item.id}`}>{item.name}</Link>
        </div>
      ))}
      {/* {data.map((item, index) => (
        <div key={index}>{item}</div>
      ))} */}
      <button onClick={refetch}>Fetch</button>
    </>
  );
};

export default RQPage;
