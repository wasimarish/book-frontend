import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import avatar from '../assets/avatar.png'
import { useSelector } from 'react-redux';
import { useAuth } from '../context/AuthContext';


const navigation =[
    {
        name:"Dashboard",href:'/dashboard'
    },
    {
        name:"Orders",href:'/orders'
    },
    {
        name:"Cart page",href:'/cart'
    },
    {
        name:"Check Oot",href:'/checkout'
    },
]

const Navbar = () => {
    // const currentUser=false;
    const [isDropdownOpen, setIsDropdownOpen]=useState(false);
    console.log(isDropdownOpen);

    const cartItems=useSelector(state=>state.cart.cartItems);
    console.log(cartItems);

    const {currentUser, logout} = useAuth()
    
    const handleLogOut = () => {
        logout()
    }


  return (
    <header className='max-w-screen-2xl mx-auto px-4 py-6 border-4'>
        <nav  className='flex justify-between items-center'>

            <div className='flex items-center md:gap-16 gap-4'>
                <Link to="/">
                    <HiMiniBars3CenterLeft className='size-6' />
                </Link>
                {/* search area */}
                <div className='relative sm:w-72 w-40 space-x-2`'>
                    <IoSearch className='absolute inline-block left-3 inset-y-2'/>
                    <input type="text" placeholder='Search Here' className='bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none' />
                </div>
            </div>
{/* right side */}
            <div className='relative flex items-center md:space-x-3 space-x-2'>
                <div >
                    {
                        currentUser ? <><button onClick={()=>setIsDropdownOpen(!isDropdownOpen)}><img src={avatar} alt="avatar" className={`rounded-full size-7 ${currentUser ? 'ring-2 ring-blue-500' : ''}`} /></button>
                        {
                            isDropdownOpen&&(
                                <div className='absolute right-0 mt-2 w-48 bg-white shadow-lgrounded-md z-40'>
                                    <ul className='py-2 '>
                                        {
                                            navigation.map((item)=>(
                                                <li key={item.name} onClick={()=>setIsDropdownOpen(false)}>
                                                    <Link to={item.href} className='block px-4 py-2 text-sm hover:bg-gray-200'>
                                                    {item.name}
                                                    </Link>
                                                </li>
                                            ))
                                        }
                                         <li>
                                                <button
                                                onClick={handleLogOut}
                                                className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">Logout</button>
                                            </li>
                                    </ul>
                                </div>
                            )
                        }
                        </> :<Link to='/login'><FaUser className="size-6"/></Link>
                    }
                </div>
                <button className='hidden sm:block'>
                    <FaRegHeart  className="size-6" />
                </button>
                <Link to='/cart' className='bg-primary p-1 sm:px-6 px-2 flex items-center rounded-md'>
                    <FaCartShopping />
                    {
                        
                            cartItems.length > 0 ?  <span className="text-sm font-semibold sm:ml-1">{cartItems.length}</span> :  <span className="text-sm font-semibold sm:ml-1">0</span>
                        
                    }
                    {/* <span className='text-sm font-semibold sm:ml-1'>0</span> */}
                </Link>
                
            </div>


        </nav>
    </header>
  )
}

export default Navbar