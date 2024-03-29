import React, { useEffect } from 'react'
import { useState } from 'react';

const UseBattery = () => {
    const [charging,setCharging]=useState(false)
    const [level,setLevel]=useState(0)
    
    useEffect(()=>{
        const HandleBattery = async()=>{
            const battery = await navigator.getBattery();
            setLevel(battery.level * 100);
            setCharging(battery.charging);

            battery.addEventListener("chargingchage", ()=>
            setCharging(battery.charging)
            );

            battery.addEventListener("levelchange", ()=> setLevel(battery.level));


        };

        HandleBattery();

       
    });

  return {level,charging}
   
}

export default UseBattery