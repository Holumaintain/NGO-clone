import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.scss";

export default function NotFound() {
  return (
    <div className="notfound-page">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you’re looking for doesn’t exist.</p>
      <Link to="/" className="btn-home">Back to Home</Link>
    </div>
  );
}
