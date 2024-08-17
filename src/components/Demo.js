import React, { useMemo, useState } from 'react'
import { findNthPrime } from '../utils/helper';

const Demo = () => {
    const [text, setText] = useState(0);
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    // console.log('rendering');
    //heavy operation here
    //every time the state changes, this component will re-render to avaoid this we can use useMemo hook

    const prime = useMemo(() => findNthPrime(text, [text]));

  return (
    <div className={'border border-black w-96 h-96 m-4 p-2'+ (isDarkTheme && 'bg-gray-900')}>
        <div>
            <button className='m-10 p-2 bg-green-200' onClick={() => setIsDarkTheme(!isDarkTheme)}>Toggle</button>
        </div>
        <div>
            <input className='w-72 p-2 border border-black' type='number' value={text} onChange={(e) => setText(e.target.value)} />
        </div>
        <div>
            <h1>nth prime: {prime}</h1>
        </div>
    </div>
  )
}

export default Demo;