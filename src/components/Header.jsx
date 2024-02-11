import { CiUser, CiHeart } from "react-icons/ci";
import { FaBagShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const Header = () => {

  const bag=useSelector((store)=>store.bag);
  const wishlist=useSelector((store)=>store.wishlist)

  const handleActive=(obj)=>{
    if(obj.isActive==true){
      return{
        borderBottom: "4px solid #f54e77"
      }
    }
  }

  return (
    <>
      <header>
        <div className="left-section">
          <div>
            <Link to="/" className="image">
              <img src="./images/myntra-logo.webp" width="70px"></img>
            </Link>
          </div>

          <div>
            <NavLink to="men" style={(obj)=>{
              return handleActive(obj);
            }}>MEN</NavLink>
          </div>

          <div>
            <NavLink to="woman" style={(obj)=>{
              return handleActive(obj);
            }}>WOMEN</NavLink>
          </div>

          <div>
            <NavLink to="kids" style={(obj)=>{
              return handleActive(obj);
            }}>KIDS</NavLink>
          </div>
          <div>
            <NavLink to="homeandliving" style={(obj)=>{
              return handleActive(obj);
            }}>HOME & LIVING</NavLink>
          </div>
          <div>
            <NavLink to="beauty" style={(obj)=>{
              return handleActive(obj);
            }}>BEAUTY</NavLink>
          </div>
          <div>
            <a href="https://www.myntra.com/studio/home?appRoute=%7B%22url%22%3A%22%2Fstudio%2Fhome%22%7D" target="blank_" style={{textDecoration:"none",color:"black"}}>
              STUDIO<sup>NEW</sup>
            </a>
          </div>
        </div>

        <div className="middle-section">
          <button>
            <span className="material-symbols-outlined">search</span>
          </button>
          <input placeholder="Search for products , brand and more"></input>
        </div>

        <div className="right-section">
          <div>
            <NavLink>
              <CiUser className="icon" />
              <p>Profile</p>
            </NavLink>
          </div>

          <div className="wish-icon-container">
            <NavLink to="/wish-list" style={(obj)=>{
              return handleActive(obj);
            }}>
              <CiHeart className="icon"/>
              <p>Wishlist</p>
              {wishlist.length!==0 && <div className="wish-count">{wishlist.length}</div>}
            </NavLink>
          </div>

          <div className="bag-icon-container">
            <NavLink to="/bag" style={(obj)=>{
              return handleActive(obj);
            }}>
              <FaBagShopping className="icon" />
              <p>Bag</p>
              {bag.length!==0 && <div className="bag-count">{bag.length}</div>}
            </NavLink>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
