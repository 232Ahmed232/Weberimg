import React ,{createRef} from 'react';
import { Link, NavLink } from 'react-router-dom'
import { exportComponentAsJPEG } from 'react-component-export-image';


function Item(props) {
   
    const handle = () =>{
        console.log(this.name);
    }


    const img = createRef()
    return (
        <Link  
        to={`/image/${props.quote}`}
        className='text-center w-64 m-6'
        >
            <img  ref={img}
            src={props.img} alt={props.name}
                className='rounded-xl h-48 mx-auto'
            />
            {/* <h2 className='my-2 italic font-mono font-semibold tracking-wider'>{props.name}</h2> */}
            <h3 className='italic font-serif font-semibold tracking-wider mt-4  mb-2'>{props.quote}</h3>

        </Link>
    
    );
}

export default Item;
