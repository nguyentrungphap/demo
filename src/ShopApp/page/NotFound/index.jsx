import React from "react";
import { Link } from "react-router-dom"; // Make sure to import Link

function NotFound() {
  return (
    <div>
      <h1>404 - Not Found</h1>
      <p>The page you are looking for doesn't exist or has been moved.</p>
      <Link to="/">Go Home</Link>
    </div>
  );
}

export default NotFound;
