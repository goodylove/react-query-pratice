import React, { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import { useAddData } from "../Hooks/useFetchData";

const fetchHero = () => {
  return axios.get("http://localhost:3000/heroes");
};
const RQPage = () => {
  const [refetchInterval, setRefetchInterval] = useState(3000);
  const [name, setPostName] = useState("");
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
  const { mutate } = useAddData();
  // if you have multiple  data you can do this
  // const { mutate:addHero } = useAddData()
  if (isLoading) return <h2>Loading....</h2>;
  if (isError) return <h2>{error.message}</h2>;
  const handleAddHero = () => {
    console.log("add  hero", name);
    const hero = { name };
    mutate(hero);
    // addHero(hero);
  };
  return (
    <>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setPostName(e.target.value)}
        />
        <button onClick={handleAddHero}>add hero</button>
      </div>
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
