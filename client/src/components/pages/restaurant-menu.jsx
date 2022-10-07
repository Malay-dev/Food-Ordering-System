import React, { useState, useEffect, useRef } from 'react';
//make another drawer i.e. for after login
//custom component
import './restaurant-menu.css'
import DehazeIcon from '@mui/icons-material/Dehaze';

export default function RestaurantMenu(){
  const [drawerOpen, setDrawerOpen] = useState(false)
  const drawerToggleOpen = () => {
    setDrawerOpen(true)
  }
  const drawerRef = useRef(null)
  const [isClicked, setIsClicked] = useState();
  useEffect(() => {
    function handleClickOutside(event) {
      if (!drawerRef.current.contains(event.target)) {
        setIsClicked(true);
        setDrawerOpen(false);
      } else {
        setIsClicked(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [drawerRef]);
  const arr = [
    {
      name: "Chicken Biriyani",
      foodType: "Non Veg",
      price: "150",
      imgUrl: "4581920 2.png"
    },
    {
      name: "Sambar Rice",
      foodType: "Veg",
      price: "80",
      imgUrl: "4581920 2.png"
    },
    {
      name: "Meals",
      foodType: "Veg",
      price: "100",
      imgUrl: "shaurma.png"
    },
    {
      name: "Mutton Biriyani",
      foodType: "Non Veg",
      price: "170",
      imgUrl: "shaurma.png"
    },
    {
      name: "Shawarma",
      foodType: "Veg",
      price: "60",
      imgUrl: "4581920 2.png"

    },
    {
      name: "Fish Biriyani",
      foodType: "Non Veg",
      price: "150",
      imgUrl: "4581920 2.png"
    },
    {
      name: "Coke",
      foodType: "Beverages",
      price: "80",
      imgUrl: "shaurma.png"
    },
    {
      name: "Butter Chicken",
      foodType: "Non Veg",
      price: "150",
      imgUrl: "4581920 2.png"
    },
  ]

  const navItems = ["Home", "Orders", "Profile"]

  return (
    <>
      <div className="backGround"></div>
      <div className='menuWrapper'>
        <div className='circleInBackLarge'></div>
        <div className='circleInBackSmall'></div>
        <>
          <div className={`drawerContainer ${drawerOpen ? "drawer-open" : ""} `} ref={drawerRef}>
            <div className='drawerTitle'>Vfood</div>
            <hr></hr>
            <div className='drawerPages'>
              {navItems.map(i => <div className="drawerPage">{i}</div>)}
            </div>
            
          </div>
        </>
        <div className='drawer'><div className='sidebarIcon' onClick={() => drawerToggleOpen()}><DehazeIcon sx={{ fontSize: 50 }} /></div><div className="searchBarSmallContainer"><input className='searchBarSmall' type="text" placeholder='Search...' /></div></div>
        <div className="topbar">
          <div className="title">Gymkhana</div>
          <div className="navBar">
            <div className="navPages">{navItems.map(i => <div className='navPage'>{i}</div>)}</div>

            <div className="navSearch"><input className='searchBar' placeholder="Search..."></input></div>
          </div>
        </div>
        <div className="menuList">
          {arr.map(i => <MenuCard item={i} />)}
          {arr.map(i => <MenuCard item={i} />)}
          {arr.map(i => <MenuCard item={i} />)}
        </div>
      </div>
    </>
  )
}

function MenuCard(props) {
  const [quantity, setQuantity] = useState(0)
  const IncreaseQuantity = (e) => {
    setQuantity(quantity + 1);
  }
  const DecreaseQuantity = (e) => {
    if (quantity >= 1) {
      setQuantity(quantity - 1)
    }
  }
  const food = {
    "Non Veg": "accent-orange",
    "Veg": "accent-green",
    "Beverages": "accent-purple",
  }
  return (
    <>
      <div>
        <div className={"menuContainer " + food[props.item.foodType]}>
          <div className="menuName">{props.item.name}</div>
          <div className='menuPriceQuantity'>
            <div className="menuPriceContainer">₹{props.item.price}</div>
            <div className="menuQuantityContainer">
              <div className="menuQuantityReduce">
                <img src="../../../assets/minus.png" alt="" onClick={(e) => DecreaseQuantity(e)} />
              </div>
              <div className='menuQuantity'>{quantity}</div>
              <div className="menuQuantityIncrease">
                <img src="../../../assets/plus.png" alt="" onClick={(e) => IncreaseQuantity(e)} />
              </div>
            </div>
          </div>
          <div className='menuImgConatiner'><img className='menuImg' src={'../../../assets/' + props.item.imgUrl}></img></div>
        </div>
      </div>
    </>
  )
}
