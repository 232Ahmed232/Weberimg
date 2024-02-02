import React, { useState, createRef } from 'react';
import { useParams } from 'react-router-dom'
import { list } from './components/Body/Data';
import Draggable from 'react-draggable';
import { exportComponentAsJPEG } from 'react-component-export-image';




function Imgview(props) {
    const { quote } = useParams()
    const [oppa, setop] = useState(1)
    const [color, setcolor] = useState("white")


    const imgr = createRef()

    const img = createRef()

    // const downloadimd = () => {
    //     setop("100")
    //     setInterval(exportComponentAsJPEG(img),10000)
    //     // exportComponentAsJPEG(i)
    // }

    return (
        <div className='text-center'>

            <div ref={imgr} className='text-center  download'>
                <Draggable>
                    <h1 
                    style={{color:color}}
                    className={`hover:bg-black cursor-pointer hover:text-white absolute top-48 z-20 text-center   lg:text-3xl text-xs font-black  p-2 capitalize shadow-black shadow-lg`}>
                        {quote}
                        </h1>
                </Draggable>
                {list.map((ele) => {
                    return ((ele.quote === quote) ?

                        <img  ref={img} src={ele.img} 
                        style={{opacity:oppa}}
                        className={`z-10  object-cover mx-auto`} alt="" />



                        : <span>  </span>)
                })}


            </div>
            <button onClick={() => exportComponentAsJPEG(imgr)}
                className='bg-purple-500 text-white  w-1/3 p-3 rounded-lg mx-auto mb-2 mt-2 font-bold hover:bg-black hover:text-white'>
                Download Image With Quote</button>
            <button onClick={() => exportComponentAsJPEG(img)}
                className='bg-purple-800  text-white w-1/3 p-3 rounded-lg mx-auto ml-3 mb-2 mt-2 font-bold hover:bg-black hover:text-white'>
                Download Image </button>

            <button 
            className='bg-slate-800 text-white w-1/3 p-3 rounded-lg mx-auto ml-3 mb-2 mt-2 font-bold hover:bg-black hover:text-white'
            onClick={() => setop(1)}
            >
                Bright Image </button> 
            <button 
            className='bg-slate-300 w-1/3 p-3 rounded-lg mx-auto ml-3 mb-2 mt-2 font-bold hover:bg-black hover:text-white'
            onClick={() => setop(0.5)}
            >
                Light Image </button> 
                <br />
            <button 
            className='bg-red-500 w-1/6 p-3 rounded-lg mx-auto ml-3 mb-2 mt-2 font-bold hover:bg-black hover:text-white'
            onClick={() => setcolor("red")}
            >
                Red Quote</button> 
            <button 
            className='bg-blue-500 w-1/6 p-3 rounded-lg mx-auto ml-3 mb-2 mt-2 font-bold hover:bg-black hover:text-white'
            onClick={() => setcolor("blue")}
            >
                Blue Quote </button> 
            <button 
            className='bg-green-500 w-1/6 p-3 rounded-lg mx-auto ml-3 mb-2 mt-2 font-bold hover:bg-black hover:text-white'
            onClick={() => setcolor("green")}
            >
                Green Quote </button> 
            <button 
            className='bg-black text-white w-1/6 p-3 rounded-lg mx-auto ml-3 mb-2 mt-2 font-bold hover:bg-black hover:text-white'
            onClick={() => setcolor("black")}
            >
                Black Quote </button> 
            <button 
            className='bg-slate-200 text-black w-1/6 p-3 rounded-lg mx-auto ml-3 mb-2 mt-2 font-bold hover:bg-black hover:text-white'
            onClick={() => setcolor("white")}
            >
                White Quote </button> 

            <h1 className='mx-auto italic text-xl underline font-semibold'>Quote can can be dragged</h1>

        </div>
    );
}

export default Imgview;