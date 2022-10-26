import { Menu, Transition } from '@headlessui/react'
import React, { useEffect, useState } from 'react'
import {Fragment } from 'react'
import {ChevronDownIcon } from '@heroicons/react/20/solid'
import {useDispatch, useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard';
import {searchAction } from '../redux/actions/search';
import {categoryFilter, productsAction} from './../redux/actions/products';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Store = () => {
  const dispatch = useDispatch();
  const {products} = useSelector(state => state.products);
  const {search} = useSelector(state => state.search);
  const {category} = useSelector(state => state.category);

  const [sorting, setSorting] = useState('');
  const [Pfilter, setCategory] = useState('');
  
  console.log("category",category);

  
  useEffect(()=> {
    dispatch(productsAction(sorting))
    dispatch(searchAction())
    dispatch(categoryFilter(Pfilter))

  },[dispatch, sorting, Pfilter])

  console.log("categoryFilter", categoryFilter)

  return (
    <div>
    <div className='flex items-center justify-center space-x-14 font-bold tracking-wide p-3'>
    

      <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={()=>setCategory('all')}>Tümü</button>
      <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={()=>setCategory('jewelery')}>Mücevher</button>
      <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={()=>setCategory('electronics')}>Elektronik</button>
      <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={()=>setCategory("men's clothing")}>Erkek Giyim</button>
      <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={()=>setCategory("women's clothing")}>Kadın Giyim</button>
   
<Menu as="div" className="relative inline-block text-right p-2">  
  <div>
    <Menu.Button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-2 border-b-4 border-blue-700 hover:border-blue-500 rounded">
      Sırala
      <ChevronDownIcon className="-mr-1 ml-2 h-6 w-6" aria-hidden="true" />
    </Menu.Button> 
  </div>

  <Transition
    as={Fragment}
    enter="transition ease-out duration-100"
    enterFrom="transform opacity-0 scale-95"
    enterTo="transform opacity-100 scale-100"
    leave="transition ease-in duration-75"
    leaveFrom="transform opacity-100 scale-100"
    leaveTo="transform opacity-0 scale-95"
  >
    <Menu.Items className="absolute right-0 z-15 mt-2 w-100 origin-top-right rounded-md bg-white shadow-lg ring-2 ring-black ring-opacity-5 focus:outline-none">
      <div className="py-1"> 
            <Menu.Item>
            {({ active }) => (
            <a className={classNames( active ? 'bg-gray-100 text-gray-900' : 'text-gray-700','block px-4 py-2 text-sm')} onClick={()=>setSorting('asc')}>A-Z</a>)}
            </Menu.Item>
            <Menu.Item>
            {({ active }) => (
            <a className={classNames( active ? 'bg-gray-100 text-gray-900' : 'text-gray-700','block px-4 py-2 text-sm')} onClick={()=>setSorting('desc')}>Z-A</a>)}
            </Menu.Item>
      </div>
    </Menu.Items>

  </Transition>
</Menu>
    </div>

    <div className='flex flex-wrap justify-center'>

     

    {
    search.length > 0 ? 
    search.map((prd, i ) => (
    <ProductCard key={i} prd={prd}/>
    )):
    category.length > 0 ? 
    category.map((prd, i ) => (
    <ProductCard key={i} prd={prd}/>
    )):

    products && products.map((prd, i ) => (
    <ProductCard key={i} prd={prd}/>
    ))
  }


    </div>
    </div>
  )
}

export default Store