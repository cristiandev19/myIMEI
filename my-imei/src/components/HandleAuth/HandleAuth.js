import { Button } from '@material-ui/core'
import React from 'react'


// window.location.origin + '/phone_photo.jpg'
// src={window.location.origin + '/phone_photo.jpg'}

export const HandleAuth = () => {
  return (
    <div className="main-container">
      <div className="main-container__screen">
        {/* <img className="main-container__image" src={window.location.origin + '/phone_photo.jpg'} style="background-image: url('img_girl.jpg');" alt="Logo" />; */}
        <div
          className="screen-image"
          style={{ backgroundImage: `url(${window.location.origin + '/phone_photo.jpg'})`}}
          alt="Logo" ></div>
      </div>
      <div className="main-container__actions">
        <p>
          hola estas en HandleAuth
        </p>
        <Button variant="contained" size="large" color="primary"> Iniciar sesion</Button>
        <Button variant="contained" size="large" color="secondary"> Registrarse</Button>
      </div>
    </div>
  )
}
