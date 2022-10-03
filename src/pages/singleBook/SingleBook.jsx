import React from 'react'
import { useParams } from 'react-router-dom'

function SingleBook() {
  const {id} = useParams()
  return (
    <div>
      <h1>SingleBook</h1>
      <h2>{id}</h2>
    </div>
  )
}

export default SingleBook