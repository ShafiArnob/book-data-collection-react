import './Create.css'

function CreateForm() {
  return (
    <div className="form-container">
      <form className='bg-slate-200'>
        <label>
          <span>who:</span>
          <input type="text" required/>
        </label>
        <label>
          <span>Author:</span>
          <input type="text" required/>
        </label>

        <label>
          <span>Gender:</span>
          <input type="text" required/>
          <span>[e.g m/f]</span>
        </label>

        <label>
          <span>Birth:</span>
          <input type="text" required/>
          <span>[e.g 01-02-2022]</span>
        </label>

        <label>
          <span>Birth Place:</span>
          <input type="text" required/>
        </label>

        <label>
          <span>Death:</span>
          <input type="text" required/>
          <span>[e.g 01-02-2022]</span>
        </label>

        <label>
          <span>Death Place:</span>
          <input type="text" required/>
        </label>

        <h2 className='text-2xl text-center bg-orange-500'>Book</h2>
        
        <label>
          <span>Title:</span>
          <input type="text" required/>
        </label>
        
        <label>
          <span>Publisher:</span>
          <input type="text" required/>
        </label>

        <label>
          <span>Publish Date:</span>
          <input type="text" required/>
        </label>
        
        <label>
          <select class="select w-full max-w-xs">
            <option disabled selected>Genre</option>
            <option>horror</option>
            <option>sci-fi</option>
          </select>
        </label>

        <textarea name="Book text" cols="30" rows="10"></textarea>
        <button class="button">Button</button>
      </form>
    </div>
  )
}

export default CreateForm