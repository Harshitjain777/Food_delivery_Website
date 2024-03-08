import React, { useEffect, useRef, useState } from 'react'
import { useDispatchCart , useCart } from './ContextReducer';
function Card(props) {
    let dispatch=useDispatchCart();
    let data= useCart();
    let options=props.options;
    let priceOptions=Object.keys(options);
    const [qty , setQty]=useState(1);
    const [size , setSize]=useState("");
    const priceref=useRef();
    const handleAddtocart = async ()=>{
    await dispatch({type:"ADD" , id:props.foodItem._id , name:props.foodItem.name , price:finalPrice , qty:qty , size:size})
    console.log(data);
    }
    useEffect(()=>{
        setSize(priceref.current.value)
    },[])
    let finalPrice=qty * parseInt(options[size]);
    return (
        <div>
            <div className="card mt-3" style={{ "width": "18rem", "minHeight": "360px" }}>
                <img src={props.foodItem.img} style={{ "width": "18rem", "maxHeight": "200px" }} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.foodItem.name}</h5>
                 
                    <div className="container w-100">
                        <select className='m-2 h-100 bg-success rounded' onChange={(e)=>setQty(e.target.value)}>
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                )
                            })}
                        </select>
                        <select className='m-2 h-100  bg-success rounded' ref={priceref} onChange={(e)=>setSize(e.target.value)}>
                           {priceOptions.map((data)=>{
                            return <option key={data} value={data}>{data}</option>
                           })}
                        </select>

                        <div className='d-inline h-100 fs-5'>${finalPrice}/-</div>
                        <hr />
                        <div className='btn bg-success text-white mx-1' onClick={handleAddtocart}>Add to cart</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card