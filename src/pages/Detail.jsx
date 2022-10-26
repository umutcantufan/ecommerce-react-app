import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { productsActionDetail } from '../redux/actions/products';
import {CgMathMinus, CgMathPlus} from 'react-icons/cg';
import { productsCard } from '../redux/actions/card';
import {  MdCheckCircle, MdStarRate } from "react-icons/md";
import {  IoPricetags} from "react-icons/io5";





const Detail = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const {product} = useSelector(state => state.product);
  const [count, setCount] = useState(1);
  useEffect(()=>{
    dispatch(productsActionDetail(id))
  },[dispatch])
  
  console.log("product",product)
  const increment = (stock) =>{
    if(count <= stock){
      setCount(count + 1 )
    }

  }

  const decrement = () =>{
    
    if(count > 0){
      setCount(count - 1 )
    }
  }

const addCard = () => {
  dispatch(productsCard(id, count))
  dispatch({type: 'DRAWER', payload: true})
}
  return (
    <div className='w-full flex items-center justify-center space-x-5 bg'>
      <img className='w-1/3' src={product?.image} alt="" />
      <div className='w-2/3 space-y-5'>
        <div className='font-bold text-xl  '>{product?.title}</div>
        <div className='opacity-70  text-xl  '>{product?.description}</div>
        <div className='opacity-70  text-xl flex items-center '> <MdCheckCircle className='text-blue-400 font-bold' size={30}/> Kategori:  {product?.category}</div>
        <div className='opacity-70  text-xl flex items-center '> <MdStarRate className='text-yellow- font-bold' size={30}/> Puan: {product?.rating?.rate}  - Stok: {product?.rating?.count} </div>
        <div className='font-bold text-xl flex items-center '>  <IoPricetags className='text-yellow- font-bold' size={27}/> Fiyat: {product?.price} ₺</div>
        <div className='flex items-center space-x-4'>
          <CgMathMinus  onClick={decrement} className='cursor-pointer border rounded-full p-1' size={30}/>
          <span className='text-2xl'>{count}</span>
          <CgMathPlus onClick={()=>increment(product?.rating?.count)} className='cursor-pointer border rounded-full p-1' size={30}/>
        </div>
        <button onClick={addCard} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 border border-blue-700 rounded-lg px-10 w-2/5 '>Sepete Ekle</button>



      </div>
    </div>
    
  )
}

export default Detail