import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">VIEW CARD</Link>
        </li>
        <li>
          <Link to="/pagination">VIEW PAGINATION</Link>
        </li>
      </ul>
    </nav>
  );
}
