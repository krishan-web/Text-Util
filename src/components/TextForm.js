import React, {useState} from 'react'

export default function TextForm(props) {
    // We have to put it inside function component
    const [text,setText]=useState(''); 

     const handleUpClick=()=>{
           console.log('Upper Case was clicked');
           setText(text.toUpperCase()); // re-render(state change) because it's a state variable 
           props.showAlert("Converted to upperCase","Success");
     }
     const handleLwClick=()=>{
        console.log('Lower Case was clicked');
        setText(text.toLowerCase()); // re-render(state change) because it's a state variable 
        props.showAlert("Converted to LowerCase","Success");
  }
  const handleClearClick=()=>{
    console.log('Clear Case was clicked');
    setText(''); // re-render(state change) because it's a state variable 
    props.showAlert("Text is cleared","Success");
}
const speak = () => {
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
  props.showAlert("Started speaking","Success");
}
const Copy = () => {
  console.log("I'm copied");
  var text=document.getElementById("myBox");
  text.select();
  // text.setSelectionRange(0,9999);
  navigator.clipboard.writeText(text.value);
  document.getSelection().removeAllRanges();
  props.showAlert("Text is copied","Success");

}

const changeFontsize=()=>{
  var text=document.getElementById("myBox");
  if(text.style.fontSize!=='25px'){
    text.style.fontSize='25px';
  }else {
    text.style.fontSize='16px';
  }
  props.showAlert("Fontsize is changed","Success");
}
const handleOnChange=(event)=>{
         console.log('On change');
         setText(event.target.value); //

     }

  return (
   <div> 
<div className="mb-3 my-4" style={{color:(props.mode)==='dark'?"white":"black"}}>
{/* // it's getting render here. */}
  <label htmlFor="myBox"  className="form-label mb-2"><h1>{props.Heading}</h1></label> 
  <textarea className={`form-control ${props.mode==='dark'?"text-dark":"text-dark"}` } style={{backgroundColor:(props.mode)==="dark"?"light":"dark"}} id="myBox" onChange={handleOnChange} value={text} rows="8"></textarea> 
 
</div> 
<button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to upperCase</button>
<button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleLwClick}>Convert to LowerCase</button>
<button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleClearClick}>CLear Text</button>
<button disabled={text.length===0} type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
<button disabled={text.length===0} className="btn btn-primary mx-2" onClick={Copy}>Copy Text</button>
{/* <button className="btn btn-primary mx-2" onClick={handleextraspaces}>Remove Extra Space</button> */}
<button disabled={text.length===0} className="btn btn-primary mx-2" onClick={changeFontsize}>Change Font Size</button>

<div className="container my-3" style={{color:(props.mode)==='dark'?"white":"black"}}>
    <h1 >Your text summary</h1>
    <p>{(text.split(/\s+/)).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    <p>{(0.0008 * text.split(" ").filter((element)=>{return element.length!==0}).length)} Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Nothing to Preview"}</p>
</div>
</div>
  )
}
