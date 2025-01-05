import { useState } from 'react';
/* import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
import './App.css';
import axios from 'axios';

function App() {
  const [file, setFile] = useState();

  function handleChange(event) {
    setFile(event.target.files[0]);
  }
  
  function handleSubmit(event) {
    event.preventDefault()
    const url = 'AWS endpoint here'
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', file.Name);
    const config = {
      headers: {
        'content-type': "multipart/form-data",
      }
    };
    axios.post(url, formData, config).then((response) => {
      console.log(response.data);
    });
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <h1>STL File Upload</h1>
      <input type="file" onChange={handleChange}/>
      <button type="submit">Upload</button>
    </form>
    </>
  )
}

export default App
