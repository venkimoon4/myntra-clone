import { useSelector } from "react-redux";
import Product from "./Product";

const KidsProducts=()=>{

  const kidsProducts=useSelector((store)=>store.kidsProducts)

  return(
      <main className='products-container'>
      {kidsProducts.map((item)=><Product item={item}/>)}
    </main>
  )

}

export default KidsProducts;