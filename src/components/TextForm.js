import React, {useState} from 'react'
export default function TextForm(props) {
  const handleUpClick = ()=>{
    let newtext = text.toUpperCase();
    setText(newtext);
  }
  const handleLoClick = ()=>{
    let newtext = text.toLowerCase();
    setText(newtext);
  }
  const handleOnChange = (event)=>{
    setText(event.target.value);
  }
    const [text, setText] = useState('')
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>  
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="5"></textarea>
        </div>
        <button className="btn btn-priamry mx-2" onClick={handleUpClick}>convert to uppercase</button>
        <button className="btn btn-priamry" onClick={handleLoClick}>convert to uppercase</button>
    </div>
    <div className="container my-4">
      <h2>your summary</h2>
      <p>
        {text.split(" ").length} words and {text.length} characters
      </p>
      <p>{.008*text.split(" ").length}Minute to read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}