import React from 'react'

export default function Contact() {
 
  const submit=()=>{
  alert("form submitted")
   
  }
  return (
    <section className='contact-sec'>
    <div className='contact-main'>
    <input className='inputc' placeholder=' Enter you Frist NAme' ></input>
    <input className='inputc' placeholder='Enter you Last Name'></input>
    <input className='inputc' placeholder='Enter you Email'></input>
    <input className='inputc' placeholder='Enter you Contact'></input>
    <input className='inputc' placeholder='Description '></input>
    <button className='formbt' onClick={submit}>Submit</button>
    </div>
      
    </section>
  )
}