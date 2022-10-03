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

  console.log(book);
  const {id:bid,who,author,gender,birth,birth_place,death,death_place,title,publisher,publish_date,genre,book_abstract,book_text} = book

  return (
    <div className='flex flex-col items-center '>
      {/* <h1>SingleBook</h1> */}

      <div className='w-4/5'>
        <h2>{id}</h2>
        <p>Who:{book.who}</p>
        
        <div className='bg-gray-100 p-3 my-3 rounded-2xl'>
          <h1>Author</h1>
          <p>Author: {author}</p>
          <p>Gender: {gender}</p>
          <p>Birth: {birth}</p>
          <p>Birth Place: {birth_place}</p>
          <p>Death: {death}</p>
          <p>Death Place: {death_place}</p>
        </div>

        <div className='bg-gray-200 p-3 my-3 rounded-2xl'>
          <h1>Book</h1>
          <p><span className='font-bold'>Title: </span>{title}</p>
          <p><span className='font-bold'>Genre: </span>{genre}</p>
          <p><span className='font-bold'>Publisher: </span>{publisher}</p>
          <p><span className='font-bold'>Publish Date: </span>{publish_date}</p>
          <p><span className='font-bold'>Abstract: </span>{book_abstract}</p>
          <p><span className='font-bold'>Text: </span>{book_text}</p>
        </div>
      </div>
    </div>
  )
}

export default SingleBook