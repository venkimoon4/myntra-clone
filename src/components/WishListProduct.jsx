import { IoHeartDislikeOutline } from "react-icons/io5";
import { wishlistActions } from "../store/wishlistSlice";
import { useDispatch, useSelector } from "react-redux";
import { GrAddCircle } from "react-icons/gr";
import { AiTwotoneDelete } from "react-icons/ai";
import { bagActions } from "../store/bagSlice";


const WishListProduct=({item})=>{

  const dispatch=useDispatch();

  const handleAddProductToBag=(itemId)=>{
    dispatch(bagActions.addProductsToBag(itemId))
  }

  const handleRemoveProductFromBag=(itemId)=>{
    dispatch(bagActions.removeProductsFromBag(itemId))
  }

  const bag=useSelector((store)=>store.bag)

  const handleRemoveItemFromWishList=(itemId)=>{
   dispatch(wishlistActions.removeItemToWishList(itemId))
  }

  const elementFound=bag.includes(item.id);

  return(
    <>
    <div className="product product-checkout-container">
        <div className="image-container">
          <img src={item.image} width="120px"></img>
        </div>

        <div className="product-details">
          <div className="name-container name-container-checkout">
            <h3>{item.company}</h3>
            <p>{item.item_name}</p>
            <h4>
              Rs {item.current_price} <del>Rs {item.original_price}</del>{" "}
              <span> ({item.discount_percentage}% OFF) </span>
            </h4>
          </div>

          <div className="product-return-details">
            <h5>
              {item.return_period} days <span>return available</span>
            </h5>
            <h6>
              Delivery By: <span>{item.delivery_date}</span>
            </h6>

            <div className="wish-cart-btn">
            {elementFound===true ? <button className="btn btn-danger" onClick={()=>handleRemoveProductFromBag(item.id)}><AiTwotoneDelete className="icon"/>Remove</button>:<button style={{backgroundColor:"green"}} onClick={()=>handleAddProductToBag(item.id)}><GrAddCircle className="icon"/>Add to Bag</button> 
            }
            </div>

          </div>

          <div className="delete-product" onClick={()=>handleRemoveItemFromWishList(item.id)}><IoHeartDislikeOutline style={{cursor:"pointer",color:"red"}}/></div>
        </div>

      </div>
    </>
  )

}

export default WishListProduct;