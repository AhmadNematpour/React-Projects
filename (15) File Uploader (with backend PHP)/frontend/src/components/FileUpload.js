import React, { useState } from 'react'
import Progress from './Progress'
import ShowData from './ShowData'
import axios from 'axios';
import { Link } from 'react-router-dom'

function FileUpload() {

  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("انتخاب عکس");
  const [uploadPrecentage, setUploadPrecentage] = useState(0);
  const [message, setMessage] = useState(""); 

  const onChange = e => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name)
  }
  
  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', file);
    axios.post('http://127.0.0.1:8000/api/upload', formData, {
      headers: {
        "Content-Type" : "multipart-form-data"
      },
      onUploadProgress: progressEvent => {
        setUploadPrecentage(
          parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total))
        )
        setTimeout(() => setUploadPrecentage(0), 5000)
      }
    })  
    .then(res => {
      setMessage(res.data.message);
    })
    .catch()

  }

  return (
    <>
        {message && 
          <div className='alert mt-2 alert-success'>
            <p>{message}</p>
          </div>
        }
      <form onSubmit={handleSubmit}>
        <div className='form-group mt-3'>
          <label htmlFor='customFile' className='custom-file-label mb-2'>{fileName}</label>
          <input type="file" className='form-control' name='image' id='customFile' onChange={onChange} />
          <Progress precentage={uploadPrecentage} />
        </div>
        <input type="submit" className='btn btn-primary mt-5' value="ارسال عکس" />
      </form>

      <div className='gallery text-center mt-5'>
        <Link to="/gallery" className='btn btn-success mt-3 w-25'>نمایش تصاویر</Link>
      </div>

    </>
  )
}

export default FileUpload