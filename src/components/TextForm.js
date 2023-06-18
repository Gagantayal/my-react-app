import React, {useState} from 'react'
export default function TextForm(props) {
  const handleUpClick = ()=>{
    setText("you have clicked");
  }
  const handleOnChange = (event)=>{
    setText(event.target.value);
  }
    const [text, setText] = useState('Enter text here')
  return (
    <div>
        <h1>{props.heading}</h1>  
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-priamry" onClick={handleUpClick}>convert to uppercase</button>
    </div>
  )
}