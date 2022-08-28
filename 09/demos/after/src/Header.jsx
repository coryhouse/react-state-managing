import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const activeStyle = {
  color: "purple",
};

export default function Header() {
  const { pathname } = useLocation();

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <img alt="Carved Rock Fitness" src="/images/logo.png" />
            </Link>
          </li>
          <li>
            <NavLink
              style={pathname === "/shoes" ? activeStyle : {}}
              to="/shoes"
            >
              Shoes
            </NavLink>
          </li>
          <li>
            <NavLink style={pathname === "/cart" ? activeStyle : {}} to="/cart">
              Cart
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
