import React from 'react';
import { Link, NavLink } from 'react-router-dom'

const style = {

}


function Header() {
    return (
        <div>
            <div className=" text-3xl font-bold w-1/1 underline bg-green-300 p-0">
                <h1 className='2xl:animate-wiggle 2xl:mx-0  mx-auto  bg-white  w-1/3 lg:w-1/6 text-center p-4 font-lib'>Weber Library</h1>
            </div>
            <div className="text-3xl mt-10  font-bold  p-5 text-center bg-green-300 ">
                <h1 className='inline   bg-white text-xs lg:text-2xl  w-1/4  lg:w-1/6 text-center p-4    font-lib'>
                    <NavLink to={"/"}
                        className={({ isActive }) => `${(isActive) ? 'underline text-red-500' : ""}`}

                    >
                        Search By Image
                    </NavLink>
                </h1>
                <h1 className='inline  bg-white text-xs lg:text-2xl lg:w-1/6 w-1/3 text-center p-4   m-4 font-lib'>
                    <NavLink to={"quote"}
                        className={({ isActive }) => `${(isActive) ? 'underline text-red-600' : ""}`}
                    >
                        Search By Quote
                    </NavLink>
                </h1>
            </div>


        </div>
    );
}

export default Header;