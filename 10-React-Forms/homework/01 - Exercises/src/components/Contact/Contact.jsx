import React, { useEffect } from 'react'
import './Contact.modules.css'
import { useState,set } from 'react';

// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

 export function validate (inputs) {
  const errors={}
  if(!inputs.name) errors.name="Se requiere un nombre"
  else if(!regexEmail.test(inputs.email))errors.email="Debe ser un correo electrónico"
  else if(inputs.phone<0)errors.phone ="Sólo números positivos"
  else if(!inputs.subject)errors.subject ="Se requiere un asunto"
  else if(!inputs.message)errors.message ="Se requiere un mensaje"

  return errors
}




export default function Contact () {

  useEffect(()=>{
    setErrors(validate(inputs))
  },[inputs])


  const [inputs, setInputs] = React.useState({
    name: '',
    email: '',
    phone:0,
    subject:"",
    message:"",
 });

 const [errors, setErrors] = React.useState({
  name: '',
  email: '',
  phone:0,
  subject:"",
  message:"",
});

const handleChange = (event) => {
  let property = event.target.name
  let value = event.target.value
  setInputs({
    ...inputs,
    [property]:value,
    
  })
}



  const handleSubmit = (event) => {
    event.preventDefault()
    if(Object.keys(errors).length === 0){
      setInputs({
        name: '',
        email: '',
        phone:"",
        subject:"",
        message:"",
      })
      setErrors({
      name: '',
      email: '',
      phone:"",
      subject:"",
      message:"",
      })
      return window.alert("Datos completos")
    } else {
      return window.alert("Debes corregir los errores")
    }
  }




  return <form onSubmit={(event) => handleSubmit(event)}>
    <hr></hr>
    Crear Formulario
    <hr></hr>
    <label>Nombre:</label>
    <input name='name' placeholder='Escribe tu nombre...' type="text" onChange={(event) => handleChange(event)} value={inputs.name} className={errors.name && "Warning"}></input>
    <p className="danger">{errors.name && errors.name}</p>
    <hr></hr>
    <label>Correo Electrónico:</label>
    <input name='email' placeholder='Escribe tu email...' type="text" onChange={(event) => handleChange(event)} value={inputs.email} className={errors.email && "Warning"}></input>
    <p className="danger">{errors.email && errors.email}</p>
    <hr></hr>
    <label>Teléfono:</label>
    <input name='phone' placeholder='Escribe un teléfono...' type="number" onChange={(event) => handleChange(event)} value={inputs.phone} className={errors.phone && "Warning"}></input>
    <p className="danger">{errors.phone && errors.phone}</p>
    <hr></hr>
    <label>Asunto:</label>
    <input name='subject' placeholder='Escribe el asunto...' type="text" onChange={(event) => handleChange(event)} value={inputs.subject} className={errors.subject && "Warning"}></input>
    <p className="danger">{errors.subject && errors.subject}</p>
    <hr></hr>
    <label>Mensaje:</label>
    <textarea name='message' placeholder='Escribe tu mensaje...' type="text" onChange={(event) => handleChange(event)} value={inputs.message} className={errors.message && "Warning"}></textarea>
    <p className="danger">{errors.message && errors.message}</p>
    <hr></hr>
    <button type='submit'>Enviar</button>
    </form>
  
}
