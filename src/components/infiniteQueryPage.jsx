import React, { Fragment, useState } from "react";
import { useInfiniteQuery } from "react-query";
import axios from "axios";

const fetchColors = ({ pageParam = 1 }) => {
  return axios.get(`http://localhost:3000/colors?_limit=2&_page=${pageParam}`);
};

export default function InfiniteQueryPage() {
  const [pageNumber, setPageNumber] = useState(1);
  const {
    data,
    isLoading,
    isError,
    error,
    isFetching,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useInfiniteQuery(["colors"], fetchColors, {
    getNextPageParam: (_lastPage, pages) => {
      if (pages.length < 4) {
        return pages.length + 1;
      } else {
        return undefined;
      }
    },
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      {data.pages?.map((item, index) => (
        <Fragment key={index}>
          {item.data.map((color) => (
            <h2 key={color.id}>{color.label}</h2>
          ))}
        </Fragment>
      ))}

      <button disabled={!hasNextPage} onClick={fetchNextPage}>
        load more
      </button>

      <div>{isFetching && !isFetchingNextPage ? "fetching" : null}</div>
    </div>
  );
}
