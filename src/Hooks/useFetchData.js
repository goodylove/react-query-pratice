import React from "react";
import axios from "axios";
import { useQuery } from "react-query";

const fetchData = () => {
  return axios.get("http://localhost:3000/heroes");
};
export default function useFetchData() {
  return useQuery("reactQuery", fetchData, {
    // onSuccess, can pass as a parameter to useFetchData
    // onError,can pass as a parameter to useFetchData
    enabled: false,
    select: (data) => {
      const heroName = data.data.map((data) => data.name);
      return heroName;
    },
  });
}
