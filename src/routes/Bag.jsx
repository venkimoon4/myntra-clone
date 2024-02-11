import BagProducts from "../components/BagProducts";
import BagSummary from '../components/BagSummary'

const Bag=()=>{

  return(
    <>
    <div className='bag-container'>
    <div className='bag-products'>
    <BagProducts/>
    </div> 
    <BagSummary/>
    </div>
    </>
  )

}

export default Bag;