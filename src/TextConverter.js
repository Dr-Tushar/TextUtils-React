import React,{useState} from 'react'

export default function TextConverter(props) {
    function handleToUpper() {
    let msg= text.toUpperCase();
    setText(msg);
  }
  function handleToLower() {
    let msg= text.toLowerCase();
    setText(msg);
  }
  function handleToCopy() {
  navigator.clipboard.writeText(text);
  alert("The text is copied Successfully...!!")
  }
  function handleToCut() {
  navigator.clipboard.writeText(text);
  setText("");
  // alert("The text is ready to move...!!")  
  }
  function handleToClear() {
    setText("");
    }
  function handleOnChange(event) {
    setText(event.target.value);
  }
  function splitfunc(){
    if(!text) return 0;
    // else if(text[text.length-1]==" ") {

    // }
    else return text.split(" ").length
  }
  function timeInMinFunc(){
    let minupto1 = 0.008 * text.split(" ").length;
    if(!text) return 0;
    else return minupto1.toFixed(1)
  }
  function timeInSecFunc(){
    let secupto1 =0.48 * text.split(" ").length
    if(!text) return 0;
    else return secupto1.toFixed(1);
  }
  function handleToSpaces(){
    let xtra=text.split(/[ ]+/);
    setText(xtra.join(" "));
  }
  const [text, setText]=useState("");
  // setText("The new message is this");
  return (
    <>
    <div className={`text-${props.txtmode==='light'?'dark':'light'}`}>
      <div className="container">
        <h2 className="my-3">Please Enter your message to convert below:</h2>
        <textarea className="form-control"placeholder="Enter your message" id="txtarea1" value={text} onChange={handleOnChange} rows="8"></textarea>
        <button className="btn btn-primary my-3 mx-2" onClick={handleToUpper}>Convert to UpperCase</button>
        <button className="btn btn-primary my-3 mx-2" onClick={handleToLower}>Convert to LowerCase</button>
        <button className="btn btn-primary my-3 mx-2" onClick={handleToCopy}>Copy the Text</button>
        <button className="btn btn-primary my-3 mx-2" onClick={handleToCut}>Cut the Text</button>
        <button className="btn btn-primary my-3 mx-2" onClick={handleToClear}>Clear the Textbox</button>
        <button className="btn btn-primary my-3 mx-2" onClick={handleToSpaces}>Remove Extra Spaces</button>
        <h2>Your text summary</h2>
        <p>{splitfunc()} words and {text.length} characters</p>
        <p>Takes {timeInMinFunc()} minutes or {timeInSecFunc()} seconds to read it</p>
        <h2>Preview</h2>
        <p>{text.length===0?"Please write something in the above textbox to see something here":text}</p>
        {/* <p className='container text-white bg-dark rounded'>{text}</p> */}
      </div>
    </div>
    </>
  )
}
