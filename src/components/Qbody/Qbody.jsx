import React, { useContext } from 'react';
import Item from '../Item/Item';
import { list } from '../Body/Data';
import searchcontext from '../../context/search/searchcontext';



function Qbody(props) {

    const {itemlist} = useContext(searchcontext)
    
    const value = itemlist
    console.log(value);

    const searchList = list.filter((item) => {
        const search = value.toLowerCase()
        const name = item.quote.toLowerCase()


        return value && name.includes(search)
    })
    return (
        <div className=' bg-slate-300 rounded-xl mt-16  mx-10 p-5 text-center   flex flex-row flex-wrap'>
            
            {
             (searchList.length>0)?   
           
            searchList.map((ele) => 
            <Item key={ele.id}  img={ele.img}  quote={ele.quote}   />
            
            ):
            list.map((ele) => 
            <Item key={ele.id}  img={ele.img}  quote={ele.quote}   />
            
            )
            
        
        }
        </div>
    );
}

export default Qbody;