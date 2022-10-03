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

  // console.log(book);
  return (
    <div>
      <h1>SingleBook</h1>
      <div>
        <h2>{id}</h2>
      </div>
    </div>
  )
}

export default SingleBook