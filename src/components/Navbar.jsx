import React, { useEffect, useState } from 'react'
import{BsBasket2Fill, BsSearch} from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { searchAction } from '../redux/actions/search';
import {MdBrightness4, MdBrightness5, MdManageSearch, MdOutlineShoppingCart} from 'react-icons/md'


function Navbar() {
  const [redirect, setRedirect] = useState()

  useEffect(()=>{
    setRedirect((window.location.pathname).split('/')[1])
  },[])

  console.log(redirect,"redirect")

  const [color, setColor] = useState(false)
  const dispatch= useDispatch();
  const {cardItems} = useSelector(state => state.card);
  const [search, setSearch] = useState('')
  
  useEffect(()=>{
    const root = document.getElementById('root');
    if(color){
      root.style.backgroundColor="black";
      root.style.color="white";
    } else{
      root.style.backgroundColor="white";
      root.style.color="black";
    }
  },[color])
  const searchPost = (e) => {
    if (e.key === 'Enter') {
      dispatch(searchAction(search))
    }
  }

  const redirectFunc = (name) => {
    if(name == 'home'){
       window.location = "/"
    }else if(name == 'store'){
      window.location = "/store"
    }else if(name == 'contact'){
      window.location = "/contact"
    }else if(name == 'login'){
      window.location = "/login"
    }
  }
  return (
    <div className="justify-between bg-blue-600 rounded-sm max-w-7xl mx-auto pt-3 pb-3 px-4 ">

      
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
            <div className="relative flex h-16 items-center justify-between">

               {/* Mobile menu 
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                
              
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div> button*/}

              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">

              
                <div className="flex items-center rounded-xl">
                <img src="https://flowbite.com/docs/images/logo.svg" className="mr-2 h-6" alt="Logo"/>
                <div className='text-xl font-semibold text-gray-100'>UCT Shopping</div>
                 
                  
                  </div>
   
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                  <div className='flex items-center space-x-5'>
                    <div className={`text-lg font-semibold text-gray-900 ${redirect == "/" ? "cursor-pointer  hover:bg-blue-400 text-white font-bold py-2 px-4" : ""} `} onClick={()=>redirectFunc('home')}>Anasayfa</div>
                    <div className={`text-lg font-semibold text-gray-900 ${redirect == "store" ? "cursor-pointer hover:bg-blue-400 border bg-blue-200 border-blue-200 font-bold py-2 px-4 rounded" : ""} `} onClick={()=>redirectFunc('store')}>Mağaza</div>
                    <div className={`text-lg font-semibold text-gray-900 ${redirect == "contact" ? "cursor-pointer hover:bg-blue-400 border bg-blue-200 border-blue-200 font-bold py-2 px-4 rounded" : ""} `} onClick={()=>redirectFunc('contact')}>İletişim</div>
                    <div className={`text-lg font-semibold text-gray-900 ${redirect == "login" ? "cursor-pointer hover:bg-blue-400 border bg-blue-200 border-blue-200 font-bold py-2 px-4 rounded" : ""} `} onClick={()=>redirectFunc('login')}>Giriş</div>
            
                    
                  </div>
          
                  </div>
                 

                </div>
              </div>

                <div className='flex items-center space-x-4'>
   
   <MdManageSearch size={30} /> <input value={search} onKeyPress={searchPost} onChange={e=> setSearch(e.target.value)} className='border p-3 outline-none rounded-lg' type="text" placeholder='Ürün Ara...' />
   <div onClick={()=>setColor(!color)}>
   {
      color ? <MdBrightness5 size={30} className="cursor-pointer"/> : <MdBrightness4 size={30} className="cursor-pointer"/>
   }

   </div>
   <div onClick={()=>dispatch({type:'DRAWER', payload:true})} className='relative'>
   <MdOutlineShoppingCart size={30} className="cursor-pointer"/>
   <span className='absolute -top-2 -right-3 px-2 bg-red-500 text-white rounded-full text-small'>{cardItems.length}</span>
    
   </div>
   </div>
   </div>
   </div>

        </>
    </div>
  )
}


export default Navbar;