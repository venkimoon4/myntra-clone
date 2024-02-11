import {useDispatch, useSelector} from "react-redux"
import { bagActions } from "../store/bagSlice";
import { GrAddCircle } from "react-icons/gr";
import { AiTwotoneDelete } from "react-icons/ai";
import { wishlistActions } from "../store/wishlistSlice";

const Product = ({ item }) => {

  
  const dispatch = useDispatch();

  const handleAddProductToBag=(itemId)=>{
    dispatch(bagActions.addProductsToBag(itemId))
  }


  const handleRemoveProductFromBag=(itemId)=>{
    dispatch(bagActions.removeProductsFromBag(itemId))
  }

  const bag=useSelector((store)=>store.bag);

  const elementFound=bag.includes(item.id);

  const wishlist=useSelector((store)=>store.wishlist);


  const handleAddItemsToWishList=(/*itemId*/)=>{
    if(wishlist.includes(item.id)){
     dispatch(wishlistActions.removeItemToWishList(item.id))  
    }
    else{
      dispatch(wishlistActions.addItemToWishList(item.id))
    }
  }

  let isChecked=wishlist.includes(item.id);

  return (
    <>
      <div className="product">
        <div className="image-container">
          <img src={item.image} width="250px"></img>
        </div>

        <div className="rating-container">
          <p>
            {item.rating.stars} ⭐ | {item.rating.count}
          </p>

          <div className="wishList">
          <div className="heart-container wishCheckbox" title="Like">
            <input type="checkbox" className="checkbox" checked={isChecked} id="Give-It-An-Id" onClick={/*()=>*/handleAddItemsToWishList/*(item.id)*/}/>
            <div className="svg-container ">
                <svg viewBox="0 0 24 24" className="svg-outline" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z">
                    </path>
                </svg>
                <svg viewBox="0 0 24 24" className="svg-filled" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z">
                    </path>
                </svg>
                <svg className="svg-celebrate" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="10,10 20,20"></polygon>
                    <polygon points="10,50 20,50"></polygon>
                    <polygon points="20,80 30,70"></polygon>
                    <polygon points="90,10 80,20"></polygon>
                    <polygon points="90,50 80,50"></polygon>
                    <polygon points="80,80 70,70"></polygon>
                </svg>
            </div>
        </div>
        </div>

        </div>



        <div className="name-container">
          <h3>{item.company}</h3>
          <p>{item.item_name}</p>
          <h4>
            Rs {item.current_price} <del>Rs {item.original_price}</del>{" "}
            <span> ({item.discount_percentage}% OFF) </span>
          </h4>
        </div>

        {elementFound===true ? <button className="btn btn-danger" onClick={()=>handleRemoveProductFromBag(item.id)}><AiTwotoneDelete className="icon"/>Remove</button>:<button style={{backgroundColor:"green"}} onClick={()=>handleAddProductToBag(item.id)}><GrAddCircle className="icon"/>Add to Bag</button> 
        }
      </div>
    </>
  );
};

export default Product;
