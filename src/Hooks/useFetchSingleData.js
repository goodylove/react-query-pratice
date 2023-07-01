import axios from "axios";
import { useQuery } from "react-query";

const fetchSingleData = (heroId) => {
  return axios.get(`http://localhost:3000/heroes/${heroId}`);
};

export const useFetchSingleData = (heroId) => {
  return useQuery(["reactQuery", heroId], () => fetchSingleData(heroId));
};
// OR

// const fetchSingleData = ({ queryKey }) => {
//   const heroId = queryKey[1];
//   return axios.get(`http://localhost:3000/heroes/${heroId}`);
// };

// export const useFetchSingleData = (heroId) => {
//   return useQuery(["reactQuery", heroId], fetchSingleData);
// };
