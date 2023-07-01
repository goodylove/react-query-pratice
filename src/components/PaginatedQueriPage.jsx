import React, { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchColors = (pageNum) => {
  return axios.get(`http://localhost:3000/colors?_limit=2&_page=${pageNum}`);
};

export default function PaginatedQueriPage() {
  const [pageNumber, setPageNumber] = useState(1);
  const { data, isLoading, isError, error, isFetching } = useQuery(
    ["colors", pageNumber],
    () => fetchColors(pageNumber),
    {
      keepPreviousData: true,
    }
  );

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      {data.data?.map((item, index) => (
        <h3 key={index}>
          {item.id}
          {item.label}
        </h3>
      ))}
      <button
        onClick={() => setPageNumber((prev) => prev - 1)}
        disabled={pageNumber === 1}
      >
        prev
      </button>
      <button
        onClick={() => setPageNumber((prev) => prev + 1)}
        disabled={pageNumber === 4}
      >
        next
      </button>
      {isFetching && <h6>Loading</h6>}
    </div>
  );
}
