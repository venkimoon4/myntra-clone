import { useSelector } from "react-redux"
import Product from "./Product";

const WomanProducts = () => {

  const womanProducts=useSelector((store)=>store.womanProducts);

  return (
    <main className='products-container'>
      {womanProducts.map((item)=><Product item={item}/>)}
    </main>
  )
}

export default WomanProducts
