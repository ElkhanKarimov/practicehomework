import React from 'react'
import useConnection from '../hooks/useConnection'

const Connection = () => {
    const{status}=useConnection()
  return (
    <div>{status ? "online" : "offline"}</div>
  )
}

export default Connection