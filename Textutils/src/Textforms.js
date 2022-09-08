import {useState} from 'react'

export default function (props) {

const handleonchange=(event)=>{
    settext(event.target.value);

}
const handleonclick= ()=> {
    let newtext=text.toUpperCase();
    settext(newtext);
}
const handleonclick1= ()=> {
    let newtext1=text.toLowerCase();
    settext(newtext1);
}
const handleoncapitalize= ()=> {
    let newtext2=text.split(" ").map(w=>w[0].toUpperCase()+w.slice(1).toLowerCase()).join(" ");
    settext(newtext2);
}
const handleoncopy= ()=> {
    let newtext3=text;
    navigator.clipboard.writeText(newtext3);
    settext(newtext3);
}
const handleonclear= ()=> {
    let newtext4=" ";
    settext(newtext4);
}


const [text, settext] = useState("Enter text here")


  return (
    <div>
<div className="mb-3">
    <h1>{props.heading}</h1>
    <textarea className="form-control" value={text} placeholder="Enter text here" onChange={handleonchange} id="exampleFormControlTextarea1" rows="15"></textarea>
  <div className='my-4 ' >
    <button className="btn btn-primary mx-3" onClick={handleonclick} >Convert to Uppercase</button>
    <button className="btn btn-primary mx-3" onClick={handleonclick1} >Convert to Lowercase</button>
    <button className="btn btn-primary mx-3" onClick={handleoncapitalize} >Capitalize the text</button>
    <button className="btn btn-primary mx-3" onClick={handleoncopy} >Copy the text</button>
    <button className="btn btn-primary" onClick={handleonclear} >Clear</button> 
  </div>
</div>
<div>
    <h2>{props.summery}</h2>
    <p>{text.length} of <b>words</b> and {text.split(" ").length} of <b>characters</b>.</p>
    <p>Completed in {Math.floor(text.split(" ").length*0.9)} of <b>seconds.</b></p>
</div>
<div>
    <h3>{props.preview}</h3>
    <p>{text}</p>
</div>
    </div>
  )
}
