import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { remove } from '../store/cartSlice';

const Cart = () => {
  const disptach=useDispatch();
  const product = useSelector(state=>state.cart);
  const handleRemove=(productId)=>{
    disptach(remove(productId));
  }
  return (
    <div>
      <h3>Cart</h3>
      <div className="cartWrapper">
        {
          product.map(product=>(
            <div className='cartCard'>
              <img src={product.image} alt="" />
              <h5>{product.title}</h5>
              <h5>{product.price}</h5>
              <button className="btn" onClick={()=>handleRemove(product.id)}>Remove</button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Cart