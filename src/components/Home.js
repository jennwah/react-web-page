import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>HOME PAGE</h1>
      <Link to="/products" >
        products
      </Link>
    </div>

  )
}

export default Home;