import React, {useState,useRef, useEffect} from 'react';

const Demo2 = () => {
    const [y, setY] = useState(0);
    let x = 0;

    const ref = useRef(0);
    // console.log(ref);

    const i = useRef(null);
    useEffect(() => {
        i.current = setInterval(() => {console.log('namaste react', Math.random())}, 1000);
        // return () => clearInterval(i.current);
    },[])

  return (
    <div className='border border-black w-96 h-96 m-4 p-2'>
        <div>
            <button className='bg-green-100 px-2 m-2' onClick={() => { x=x+1; console.log(x);}}>Increase x</button>
            <span className='font-bold text-xl'>Let = {x}</span>
        </div>
        <div>
            <button className='bg-green-100 px-2 m-2' onClick={() => {setY(y+10); console.log(y)}}>Increase Y</button>
            <span className='font-bold text-xl'>Let = {y}</span>
        </div>
        <div>
            <button className='bg-green-100 px-2 m-2' onClick={() =>{ ref.current = ref.current + 1; console.log('ref', ref.current)}}>Increase Ref</button>
            <span className='font-bold text-xl'>Ref = {ref.current}</span>
        </div>
        <button className='bg-red-500 rounded-lg text-white m-4 p-2' onClick={() => clearInterval(i.current)}>Stop prinitng</button>
    </div>
  )
}

export default Demo2;