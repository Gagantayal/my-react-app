import React, {useState} from 'react'
export default function TextForm(props) {
  const handleUpClick = ()=>{
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("converted to uppercase!!","success")
  }
  const handleLoClick = ()=>{
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("converted to lowercase!!","success")
  }
  const handleOnChange = (event)=>{
    setText(event.target.value);
  }
    const [text, setText] = useState('')
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>  
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#195495':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="5"></textarea>
        </div>
        <button disabled={text.length===0} type="button" className="btn btn-primary mx-2" onClick={handleUpClick}>convert to uppercase</button>
        <button disabled={text.length===0} type="button" className="btn btn-primary" onClick={handleLoClick}>convert to lowercase</button>
    </div>
    <div className="container my-4" style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>your summary</h2>
      <p>
        {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters
      </p>
      <p>{.008*text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minute to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"enter something in textarea to preview it here"}</p>
    </div>
    </>
  )
}