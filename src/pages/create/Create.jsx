import CreateForm from "./CreateForm"
import './Create.css'

function Create() {
  return (
    <div className="create">
      <h1 className="text-4xl text-center">Add Books</h1>
      <CreateForm/>
    </div>
  )
}

export default Create