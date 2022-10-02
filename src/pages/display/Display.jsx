import { useEffect, useState } from "react"
import Book from "../components/Book"

function Display() {
  const [books, setBooks] = useState([])
  
  useEffect(()=>{
    fetch("http://localhost:8000/books")
    .then(res => res.json())
    .then(data => setBooks(data))
  },[])

  // console.log(books);
  return (
    <div className="flex my-8 justify-center w-full h-full">
      <div className="w-full">
      <div className="overflow-x-auto  w-full">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th className="">ID</th>
              <th className="">Who</th>
              <th className="p-1 px-6">Author</th>
              <th className="p-1">Gender</th>
              <th className="p-1">Birth</th>
              <th className="p-1">Birth Place</th>
              <th className="p-1">Death</th>
              <th className="p-1">Death Place</th>
              <th className="p-1 px-6">Book Title</th>
              <th className="p-1 px-6">Publisher</th>
              <th className="p-1 px-6">Publish Date</th>
              <th className="p-1 px-6">Genre</th>
              <th className="p-1 px-6">Abstract</th>
              <th className="p-1 px-6">Book Text</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row --> */}
            {
              books.map(book => <Book key={book.id} book={book}></Book>)
            }
            

          </tbody>
        </table>
      </div>
      </div>
    </div>
  )
}

export default Display