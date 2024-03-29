import React from 'react'
import UseBattery from '../hooks/UseBattery'

const Battery = () => {
    const { level , charging}=UseBattery();
  return (
    <div>
        <p>Zayatkaniizz: {level}</p>
        <p>Elxan zaryatka dolur hec??: { charging ? "he elxan yigir" : "get zaryatkaya qoydaa sonecey indi"}</p>
    </div>
  )
}

export default Battery