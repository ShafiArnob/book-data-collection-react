import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function SingleBook() {
  const {id} = useParams()
  const [book, setBook] = useState({})
  useEffect(()=>{
    fetch(`http://localhost:8000/books/${id}`)
    .then(res => res.json())
    .then(data => setBook(data))
  },[id])

  return (
    <div>
      <h1>SingleBook</h1>
      <h2>{id}</h2>
    </div>
  )
}

export default SingleBook