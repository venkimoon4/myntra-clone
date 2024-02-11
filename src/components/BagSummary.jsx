import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";

const BagSummary=()=>{

  const dispatch=useDispatch((store)=>store.bag)

  const bag=useSelector((store)=>store.bag);

  const menProducts=useSelector((store)=>store.menProducts)

  const womanProducts=useSelector((store)=>store.womanProducts)

  const kidsProducts=useSelector((store)=>store.kidsProducts);

  const beautyProducts=useSelector((store)=>store.beautyProducts)
  
  const products=useSelector((store)=>store.products);

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

  let totalMRP=0;
  let discountedMRP=0;
  let convenienceFee=bag.length===0 ? 0 : 99;

  newProducts.forEach((product)=>{
    totalMRP+=product.original_price;
    discountedMRP+=product.current_price;
  })

  const total=discountedMRP+convenienceFee;

  
  const handleOrderBtn=()=>{
    if(bag.length===0){
      alert("Please Add Items In Bag To Order")
    }
    else{
    alert('Order Placed Successfully')
    dispatch(bagActions.clearProductsFromBag())
    }
  }
  



  return(
    <>
    <div className="bag-summary">
     <h2>PRICE DETAILS: <span>({bag.length} items)</span></h2>
     <h4>Total MRP: <span>₹{totalMRP}</span></h4>
     <h4>Discounted on MRP: <span>₹{discountedMRP}</span></h4>
     <h4>Convenienec Fee: <span>₹{convenienceFee}</span></h4>
     <hr/>
     <h3>Total Amount: <span>₹{total}</span></h3>
     <button role="button" className="button-name" onClick={handleOrderBtn}>PLACE ORDER</button>
    </div>
    </>
  )

}

export default BagSummary;