import { Menu, Transition } from '@headlessui/react'
import React, { useEffect, useState } from 'react'
import {Fragment } from 'react'
import {ChevronDownIcon } from '@heroicons/react/20/solid'
import {useDispatch, useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard';
import {searchAction } from '../redux/actions/search';
import {productsAction} from './../redux/actions/products';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Home = () => {
  const dispatch = useDispatch();
  const {products} = useSelector(state => state.products);
  const {search} = useSelector(state => state.search);
  const [sorting, setSorting] = useState('')
  
  useEffect(()=> {
    dispatch(productsAction(sorting))
    dispatch(searchAction())

  },[dispatch, sorting])
  console.log("products", products)

  return (

    <div className='flex flex-wrap justify-center border rounded-lg'>

    

    {
    Array.isArray(search) && search.length > 0 ? 
    search.map((prd, i ) => (
    <ProductCard key={i} prd={prd}/>
    )):

    products && products.map((prd, i ) => (
    <ProductCard key={i} prd={prd}/>
    ))
  }


    </div>
  )
}

export default Home