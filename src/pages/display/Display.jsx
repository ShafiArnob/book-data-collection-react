import { useEffect } from "react"

function Display() {
  
  useEffect(()=>{
    fetch("http://localhost:8000/books")
    .then(res => res.json())
    .then(data => console.log(data))
  },[])


  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row --> */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Display