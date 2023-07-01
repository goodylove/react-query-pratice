import React from "react";
import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "react-query";

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
// json server support post request
const addData = (data) => {
  return axios.post("http://localhost:3000/heroes", data);
};

export const useAddData = () => {
  const queryClient = useQueryClient();
  return useMutation(addData, {
    onSuccess: () => {
      queryClient.invalidateQueries("reactQuery");
    },
  });
};
