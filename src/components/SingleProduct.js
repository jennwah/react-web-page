import React, { useEffect } from 'react';
import axios from 'axios';
import { setSelectedProduct, removeSelectedProduct } from '../redux/actions/product';
import { useDispatch, useSelector }from 'react-redux';
import { useParams, Link } from 'react-router-dom';

const SingleProduct = () => {
  const { productID } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(state => state.product.selectedProduct);

  const fetchProductDetails = async () => {
    const res = await axios.get(`https://fakestoreapi.com/products/${productID}`)
    .catch((err) => console.log(err))
    dispatch(setSelectedProduct(res.data))
  }

  useEffect(() => {
    if (productID && productID !== "") {
      fetchProductDetails();
    }
    return () => {
      dispatch(removeSelectedProduct());
    }
  }, [productID])

  return (
    <div>
      <h1>single product</h1>
      { product && product.id ? <div>
        <img src={product.image}></img>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <p>{product.price}</p>
        <p>{product.category}</p>
      </div> : <div>loading</div>}
      <Link to="/">
        HOME PAGE
      </Link>
    </div>

  )
}

export default SingleProduct;