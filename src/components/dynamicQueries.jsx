import React from "react";
import axios from "axios";
import { useQueries } from "react-query";

const fetchHero = (heroId) => {
  return axios.get(`http://localhost:3000/heroes/${heroId}`);
};
export default function DynamicQueries({ heroIds }) {
  const queryResults = useQueries(
    heroIds.map((id) => {
      return {
        queryKey: ["reactQuery", id],
        queryFn: () => fetchHero(id),
      };
    })
  );
  //   const result = queryResults?.map((data) => console.log(data.data));
  //   console.log(result);
  //   console.log(queryResults);

  return (
    <div>
      {/* {result?.map((item, index) => (
        <div key={index}>{item.data.name}</div>
      ))} */}
    </div>
  );
}
