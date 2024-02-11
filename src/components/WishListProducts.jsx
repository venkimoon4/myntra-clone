import {useSelector} from "react-redux"
import WishListProduct from "./WishListProduct";

const WishListProducts=()=>{

  const wishlist=useSelector((store)=>store.wishlist);
  const products=useSelector((store)=>store.products);
  const menProducts=useSelector((store)=>store.menProducts)
  const womanProducts=useSelector((store)=>store.womanProducts);
  const kidsProducts=useSelector((store)=>store.kidsProducts);
  const beautyProducts=useSelector((store)=>store.beautyProducts);

  let newProducts=[];

  wishlist.forEach((wishList) => {
    products.forEach((product)=>{
      if(wishList===product.id){
        newProducts.push(product)
      }
    })
    menProducts.forEach((menProduct)=>{
      if(wishList===menProduct.id){
        newProducts.push(menProduct)
      }
    })
    womanProducts.forEach((womanProduct)=>{
      if(wishList===womanProduct.id){
        newProducts.push(womanProduct);
      }
    })
    kidsProducts.forEach((kidsProduct)=>{
      if(wishList===kidsProduct.id){
        newProducts.push(kidsProduct);
      }
    })
    beautyProducts.forEach((beautyProduct)=>{
      if(wishList===beautyProduct.id){
        newProducts.push(beautyProduct);
      }
    })
  });

  return(
    <>
    <div className='wish-products'>
      
    {wishlist.length===0 && <div style={{display:"flex",flexDirection:"column",alignItems:"center", height:"500px", justifyContent:"space-evenly",margin:"40px ,0px"}}><h1 style={{fontSize:"1.5rem"}}>Your WishList Is Empty ❤️</h1>
    <img src="./images/wish-list-empty.gif"/>
     <h2 style={{color:"green",fontSize:"1.5rem"}}>Please Add You Favorite Products In WishList 🖤</h2></div>}

    {newProducts.map((item)=><WishListProduct item={item}/>)}
    </div>
    </>
  )

}
export default WishListProducts;