import { useSelector } from "react-redux";
import Product from "./Product";

const Products=()=>{

  const items=useSelector((store)=>store.products)

  return(
    <>
     {items.map((item)=><Product key={item.id} item={item}/>)}
    </>
  )

}
export default Products;