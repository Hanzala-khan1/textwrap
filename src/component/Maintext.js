import React, { useState } from 'react'

export default function Maintext() {

  const [text, setText] = useState("")
  const upperCase = () => {
    const newtext = text.toUpperCase();
    setText(newtext)
  }
  let handlecopy = () => {
   navigator.clipboard.writeText(text)

  }
  const lowercase = () => {
    const newtext = text.toLowerCase();
    setText(newtext)
  }

  const clear = () => {
    setText("")
  }
   const downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([document.getElementById('ct').value],    
                {type: 'text/plain;charset=utf-8'});
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    document.body.appendChild(element);
    element.click();
  }

  return (
    <div className='td'>
      <div className='inner'>
        <h1 className='mainh enter'> Enter Your Text Here :</h1>
        <textarea className='texta' value={text} onChange={(e) => { setText(e.target.value) }} placeholder="Enter Your Text" id='ct'> </textarea>
        <button onClick={upperCase} className='btbt'>  Convert to Uppercase</button>
        <button onClick={lowercase} className='btbt'> convert to lower case </button>
        
        <button onClick={handlecopy} className="btbt"> Copy Text</button>
        <button onClick={clear} className='btbt'> Clear text</button>
        <button onClick={downloadTxtFile} className='btbt'> Download In File</button>
        <div >
          <h2 className='he'> --- Your Text Summary ---</h2>
          <p className='pe'> {text.split(" ").length - 1} words and {text.length} characters</p>
          <h2 className='he'> Your Text:</h2>
          <p className='pe bol'>  {text}</p>
        </div>
      </div>
    </div>
  )
}
