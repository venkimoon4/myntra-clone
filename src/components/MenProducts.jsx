import { useSelector } from "react-redux"
import Product from "./Product"

const MenProducts = () => {

  const menProducts=useSelector((store)=>store.menProducts)
  
  return (
    <>
      <main className='products-container'>
      {menProducts.map((item)=><Product item={item}/>)}
      </main>
    </>
  )
}

export default MenProducts
