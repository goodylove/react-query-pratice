import React from "react";
import { useParams } from "react-router-dom";
import { useFetchSingleData } from "../Hooks/useFetchSingleData";

function RQSinglePage() {
  const { heroId } = useParams();
  const { isLoading, data } = useFetchSingleData(heroId);
  return <div>{data?.data.name}</div>;
}

export default RQSinglePage;
