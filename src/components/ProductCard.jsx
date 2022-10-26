
const ProductCard = ({prd}) => {
  return (
    <div className='hover:border-indigo-600 w-1/5 h-[350px] border rounded-lg m-2 flex flex-col items-center p-1 space-y-2'>
        <img onClick={()=> window.location = `detail/ ${prd.id}`} className='h-32 object-cover' src={prd.image } alt="" />
        <div className='font-bold h-16 text-center mt-2'>{(prd?.title).substring(0,35)}</div>
        <div className='text-center opacity-70 text-sm'>{(prd?.description).substring(0,45)}...</div>
        <div className='font-bold text-lg '>{prd?.price} ₺ </div>
        <button onClick={()=> window.location = `detail/ ${prd.id}`} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1.5 border border-blue-700 rounded-lg w-full p-3 text-white'>Ürünü İncele</button>

    </div> 
  )
}

export default ProductCard