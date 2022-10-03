import { useState } from 'react'
import './Create.css'
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
// import { useNavigate } from 'react-router-dom';

function CreateForm() {



  const [response, setResponse] = useState('')

  const [who,setWho] = useState('')
  const [author,setAuthor] = useState('')
  const [gender,setGender] = useState('')
  const [birth,setBirth] = useState('')
  const [birthPlace,setBirthPlace] = useState('')
  const [death,setDeath] = useState('')
  const [deathPlace,setDeathPlace] = useState('')
  const [title,setTitle] = useState('')
  const [publisher,setPublisher] = useState('')
  const [publishDate,setPublishDate] = useState('')
  const [genre,setGenre] = useState('')
  const [abstract, setAbstract] = useState('')
  const [bookText,setBookText] = useState('')
  // const [,set] = useState('')

  const removeNewline = (str) =>{
    str = str.toString()
    str = str.replace(/\r?\n|\r/g, " ")
    // str = str.replace(/\r?\d|\r/g, " ")
    str = str.replace(/[.,/#!$%^&*;:{}=\-_`~()'"॥€]/g," ");
    str = str.replace(/[a-zA-Z]/," ")
    return str
  }
  const removeNewLineNotBookText = (str) =>{
    str = str.toString()
    str = str.replace(/\r?\n|\r/g, "")
    // str = str.replace(/\r?\d|\r/g, "")
    str = str.replace(/[.,/#!$%^*=\-_`~()'"॥€]/g,"");
    // str = str.replace(/[a-zA-Z]/," ")
    return str
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    const newBookTitle=removeNewLineNotBookText(title)
    const newBookAbstract = removeNewline(abstract)
    const newBookText = removeNewline(bookText)
    // console.log({who,author,gender,birth,birthPlace,death,deathPlace});
    // console.log({title,publisher,publishDate,genre,newBookText});
    // console.log(newBookText);

    const data ={
      who:who,
      id:title,
      author:author,
      gender:gender,
      birth:birth,
      birth_place:birthPlace,
      death:death,
      death_place:deathPlace,
      title:newBookTitle,
      publisher:publisher,
      publish_date:publishDate,
      genre:genre,
      book_abstract:newBookAbstract,
      book_text:newBookText
    }

    postData(data)
  }

  const postData = (data) =>{
    fetch('http://localhost:8000/books', {
      method: 'POST', // or 'PUT'
      headers: {'Content-Type': 'application/json',},
      body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((data) => {
      const notify = () => toast.success("Successfull!!!");
      notify()
      

    })
    .catch((error) => {
      toast.error('Error:', error);
    });

    
  }

  return (
    <>
    <div className="form-container">
      <form onSubmit={handleSubmit} className='bg-slate-200'>
        <div className='grid grid-cols-3'>
          <label>
            <select className="select w-full max-w-xs" required onChange={(e) => setWho(e.target.value)}>
              <option disabled selected>Who</option>
              <option>arnob</option>
              <option>robin</option>
              <option>hamza</option>
            </select>
          </label>
          <label>
            <span>Author:</span>
            <input type="text" onChange={(e) => setAuthor(e.target.value)} required/>
          </label>

          <label>
            <span>Gender:</span>
            <input type="text" onChange={(e) => setGender(e.target.value)} required/>
            <span>[e.g m/f]</span>
          </label>

          <label>
            <span>Birth:</span>
            <input type="text" onChange={(e) => setBirth(e.target.value)}/>
            <span>[e.g 01-02-2022]</span>
          </label>

          <label>
            <span>Birth Place:</span>
            <input type="text" onChange={(e) => setBirthPlace(e.target.value)}/>
          </label>

          <label>
            <span>Death:</span>
            <input type="text" onChange={(e) => setDeath(e.target.value)}/>
            <span>[e.g 01-02-2022]</span>
          </label>

          <label>
            <span>Death Place:</span>
            <input type="text" onChange={(e) => setDeathPlace(e.target.value)}/>
          </label>
        </div>

        <h2 className='text-2xl text-center bg-orange-500'>Book</h2>
        
        <label>
          <span>Title:</span>
          <input type="text" onChange={(e) => setTitle(e.target.value)} required/>
        </label>
        
        <label>
          <span>Publisher:</span>
          <input type="text" onChange={(e) => setPublisher(e.target.value)}/>
        </label>

        <label>
          <span>Publish Date:</span>
          <input type="text" onChange={(e) => setPublishDate(e.target.value)}/>
        </label>
        
        {/* ############################ Genres ############################ */}
        <label>
          <select className="select w-full max-w-xs" required onChange={(e) => setGenre(e.target.value)}>
            <option disabled selected>Genre</option>
            <option>horror</option>
            <option>sci-fi</option>
            <option>comedy</option>
            <option>romance</option>
            <option>detective</option>
            <option>biography</option>
            <option>war</option>
            <option></option>
          </select>
        </label>

        <label className='w-full'>
          <h3 className='text-2xl'>Book Abstract: </h3>
          <textarea className='w-full' name="Book text" cols="30" rows="10"  onChange={(e) => setAbstract(e.target.value)}></textarea>
        </label>

      <label className='w-full'>
        <h3 className='text-2xl'>Book Text: </h3>
        <textarea className='w-full' name="Book text" cols="30" rows="10"  onChange={(e) => setBookText(e.target.value)} required></textarea>
      </label>

        <button type='submit' className="button">Submit</button>
      </form>
    </div>
    
    </>
  )
}

export default CreateForm