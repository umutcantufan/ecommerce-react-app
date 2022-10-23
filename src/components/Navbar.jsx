import React from 'react'
import{BsBasket2Fill,BsLightbulb} from 'react-icons/bs';

const Navbar = () => {
  return (
   <div className='flex items-center justify-between px-3 h-28'>
   <div>LOGO</div>
   <div className='flex items-center space-x-4'><input className='border p-3 outline-none rounded-lg' type="text" placeholder='search' />
   <BsLightbulb size={30} className="cursor-pointer"/>
   <div className='relative'>
   <BsBasket2Fill size={30} className="cursor-pointer"/>
   <span className='absolute -top-2 -right-3 px-2 bg-red-600 text-white rounded-full text-small'>3</span>
    
    </div>
   </div>
   </div>
   
   
   
    
  )
}

export default Navbar