import React from 'react'
import { useState } from 'react'

const useCounter = () => {

    const [counter, setCounter] = useState(0);

    const Increase = () => {
        setCounter((counter) => counter + 1);
    };

    const Decrease = () => {
        setCounter((counter) => counter - 1);
    };

   
    return {counter,Increase,Decrease};
}

export default useCounter