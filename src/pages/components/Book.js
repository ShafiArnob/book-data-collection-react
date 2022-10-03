import React from 'react'
import { Link } from 'react-router-dom';

function Book(props) {
  const {id,who,author,gender,birth,birth_place,death,death_place,title,publisher,publish_date,genre,book_abstract,book_text} = props.book
  // console.log(props.book);
  return (
    <tr className='hover'>
      <th className='text-center m-0'>{id}</th>
      <th className='text-center'>
        <Link to={`/books/${id}`}><button className='m-0.5 btn btn-outline btn-xs btn-success'>Show</button></Link>
      </th>
      <td className='text-center'>{who}</td>
      <td className='text-center'>{author}</td>
      <td className='text-center'>{gender}</td>
      <td className='text-center'>{birth}</td>
      <td className='text-center'>{birth_place}</td>
      <td className='text-center'>{death}</td>
      <td className='text-center'>{death_place}</td>
      <td className='text-center'>{title}</td>
      <td className='text-center'>{publisher}</td>
      <td className='text-center'>{publish_date}</td>
      <td className='text-center'>{genre}</td>
      <td className='text-center'>{book_abstract.split(" ").length}</td>
      <td className='text-center'>{book_text.split(" ").length}</td>

    </tr>
  )
}

export default Book