import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/heroes-page"> tradition-page</Link>
      </li>
      <li>
        <Link to="/rq-page"> react-query</Link>
      </li>
      <li>
        <Link to="/rq2-page"> react-query2</Link>
      </li>
      <li>
        <Link to="/dynamic"> dynamic-queries</Link>
      </li>
      <li>
        <Link to="/depend"> dependent-queries</Link>
      </li>
      <li>
        <Link to="/pagnation"> pagination</Link>
      </li>
      <li>
        <Link to="/infinite"> infinite</Link>
      </li>
    </ul>
  );
}
