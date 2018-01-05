import React from 'react';
import { Link } from 'react-router-dom';

const NoMatch = () => (
  <div className="container">
    <div >Oooops, not found! </div>
    <div><Link to="/"> Back to main </Link></div>
  </div>
);

export { NoMatch };

