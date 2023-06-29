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
    </ul>
  );
}
