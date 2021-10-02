import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <h1>
          <a href="/">Construct Pro</a>
        </h1>
      </div>
      <div className="navBar">
        <ul>
          <li>
            <a href="ar-designer">AR Designer</a>
          </li>
          <li>
            <a href="purchase-furniture">Purchase Furniture</a>
          </li>
          <li>
            <a href="hire-service-providers">Hire Service Providers</a>
          </li>
          <li>
            <a href="planner">Construction Planner</a>
          </li>
          <li>
            <a href="construction-projects">Tenders</a>
          </li>
          <li>
            <a href="material-ads">Material Ads</a>
          </li>
        </ul>
      </div>
      <div className="iconBar dflex">
        <i></i>
        <a href="/login" style={{ padding: "0px 10px" }}>
          Login
        </a>
        <a href="/signup"></a>
      </div>
    </div>
  );
}

export default Header;
