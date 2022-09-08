import { useState } from "react"

export default function TextForm() {
    const handleonclick= ()=> {
        console.log("you clicked on onclick");
        let newtext=text.toUpperCase();
        setText(newtext);
    };

    const handleonchange= (event)=>{
        console.log("onchange");
        setText(event.target.value);
    };
   
    const handlelowercase=()=>{
      console.log("texts are lowercased")
      let newtext1=text.toLowerCase();
      setText(newtext1);        
      };
      const cleartext=()=>{
        let newtext2="";
        setText(newtext2);        
        };
        const handlecapitalize=(txt)=>{
          let nextext3=text.split(' ').map(w=>w[0].toUpperCase()+w.substring(1).toLowerCase()).join(' ');
          setText(nextext3);
          };
          const handlealternate=()=>{
            let nextext3=text;
            navigator.clipboard.writeText(nextext3);
            setText(nextext3);
            };
        
    
    const [text,setText]=useState("Enter your value");

  return (
    <>

<div className="my-3">
<h1>Enter your text to analyze here</h1>
  <textarea className="form-control" onChange={handleonchange} value={text}    id="exampleFormControlTextarea1" rows="20"></textarea>
</div>
<button className="btn btn-primary" onClick={handleonclick} >convert to uppercase</button>
<button onClick={handlelowercase} className="btn btn-primary mx-4">convert to lowercase</button>
<button onClick={cleartext} className="btn btn-primary mx-4">clear</button>
<button onClick={handlecapitalize} className="btn btn-primary mx-4">capitalize text</button>
<button onClick={handlealternate} className="btn btn-primary mx-4">copy</button>

<div className="container my-4">
    <h1 >Your text Summery</h1>
    <p>{text.split(" ").length} of words and {text.length} characters</p>
    <p>completed in {Math.floor(text.split(" ").length * 0.6)} per seconds</p>

    <h2>preview</h2>
    <div className="overflow-auto my-8">
    <p className="overflow-auto">{text}</p>
    </div>
</div>
    </>
  )
}
