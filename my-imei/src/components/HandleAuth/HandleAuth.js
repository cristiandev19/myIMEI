import { Button, makeStyles } from '@material-ui/core'
import React from 'react'
import { LoginModal } from '../LoginModal/LoginModal';
import { RegisterModal } from '../RegisterModal/RegisterModal';


const useStyles = makeStyles((theme) => ({
  buttons: {
    width: '200px',
    marginTop: '5px',
    marginBottom: '5px'
  }
}));


export const HandleAuth = () => {
  const classes = useStyles();
  const [numPadre, setNumPadre] = React.useState(0);

  const [openLogin, setOpenLogin] = React.useState(false);
  const [openRegister, setOpenRegister] = React.useState(false);

  const handleClickOpenLogin = () => {
    setOpenLogin(true);
  };


  const handleClickOpenRegister = () => {
    setOpenRegister(true);
  };




  const handleActionsLogin = ({ type, payload }) => {
    console.log("🚀 ~ file: HandleAuth.js ~ line 52 ~ handleActionsLogin ~ { type, payload }", { type, payload })
    switch (type) {
      case 'close':
        setOpenLogin(false);
        break;

      case 'open':
        setOpenLogin(true);
        break;

      default:
        break;
    }
  }

  const handleActionsRegister = ({ type, payload }) => {
    switch (type) {
      case 'close':
        setOpenRegister(false);
        break;

      case 'open':
        setOpenRegister(true);
        break;

      default:
        break;
    }
  }

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
        <Button
          variant="contained"
          className={classes.buttons}
          size="large"
          color="primary"
          onClick={handleClickOpenLogin}
        > Iniciar sesion</Button>
        <Button
          variant="contained"
          className={classes.buttons}
          size="large"
          color="secondary"
          onClick={handleClickOpenRegister}
        > Registrarse</Button>

      <LoginModal
        openLogin={ openLogin }
        actionsLogin={ handleActionsLogin }
      />
      <RegisterModal
        openRegister={ openRegister }
        actionsRegister={ handleActionsRegister }
      />

      </div>
    </div>
  )
}
