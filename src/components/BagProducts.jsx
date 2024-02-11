// import { items } from "../data/items";
import { useSelector } from "react-redux";
import BagProduct from "./BagProduct";

const BagProducts=()=>{

  const bag=useSelector((store)=>store.bag);
  
  const products=useSelector((store)=>store.products);
  const menProducts=useSelector((store)=>store.menProducts)
  const womanProducts=useSelector((store)=>store.womanProducts);
  const kidsProducts=useSelector((store)=>store.kidsProducts);
  const beautyProducts=useSelector((store)=>store.beautyProducts);

  const newProducts=[];

  bag.forEach((bagId) => {
    products.forEach((product)=>{
      if(bagId===product.id){
        newProducts.push(product)
      }
    })
    menProducts.forEach((menProduct)=>{
      if(bagId===menProduct.id){
        newProducts.push(menProduct)
      }
    })
    womanProducts.forEach((womanProduct)=>{
      if(bagId===womanProduct.id){
        newProducts.push(womanProduct);
      }
    })
    kidsProducts.forEach((kidsProduct)=>{
      if(bagId===kidsProduct.id){
        newProducts.push(kidsProduct);
      }
    })
    beautyProducts.forEach((beautyProduct)=>{
      if(bagId===beautyProduct.id){
        newProducts.push(beautyProduct);
      }
    })
    
  });

  return(
    <>

    {bag.length===0 && <div style={{display:"flex",flexDirection:"column",alignItems:"center", height:"500px", justifyContent:"space-evenly"}}><h1 style={{fontSize:"1.5rem"}}>Your Bag Is Empty 🛒</h1>
    <img src="./images/cart-empty.gif" width="300px"/>
     <h2 style={{color:"green",fontSize:"1.5rem"}}>Please Add Your Products In Bag 🛍️</h2></div>}

     {newProducts.map((item)=><BagProduct key={item.current_price} item={item}/>)}
    </>
  )
}

export default BagProducts;