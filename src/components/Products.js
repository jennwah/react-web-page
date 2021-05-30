import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/actions/product';
import { Link } from 'react-router-dom';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.product.productList);

  const fetchAllProducts = async () => {
    const res = await axios.get('https://fakestoreapi.com/products')
    .catch((err) => console.log(err))
    dispatch(setProducts(res.data));
  }

  useEffect(() => {
    fetchAllProducts();
  }, [])

  return (
    <div>
      <h1>products page</h1>
      <Link to="/" >
        HOME
      </Link>
      { products.length > 0 ? products.map((p,i) => {
        return  (
          <div>
            <img src={p.image}></img>
            <h1>{p.title}</h1>
            <p>{p.description}</p>
            <Link to={`/products/${p.id}`}>
              go to product details
            </Link>
          </div>
        )
      }) : <div> loading</div>}
    </div>
  )
}

export default Products;