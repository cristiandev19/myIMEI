import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, makeStyles, TextField } from '@material-ui/core'
import React from 'react'
import { LoginModal } from '../LoginModal/LoginModal';


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

  const handleCloseLogin = () => {
    setOpenLogin(false);
  };

  const handleClickOpenRegister = () => {
    setOpenRegister(true);
  };

  const handleCloseRegister = () => {
    setOpenRegister(false);
  };

  const handleChange = (event) => {
    console.log("🚀 ~ file: HandleAuth.js ~ line 43 ~ handleChange ~ event", event)
    console.log('holaaaaaaaaa')
    if(event == 'mas') {
      setNumPadre(numPadre + 1);
    } else if (event == 'menos') {
      setNumPadre(numPadre - 1);
    }
  }

  const handleActionsLogin = ({ type, payload }) => {
    console.log("🚀 ~ file: HandleAuth.js ~ line 52 ~ handleActionsLogin ~ { type, payload }", { type, payload })
    if(type === 'close') {
      setOpenLogin(false);
    } else if(type === 'open') {
      setOpenLogin(true);
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
        > Registrarse</Button>

      <LoginModal openLogin={openLogin} actionsLogin={ handleActionsLogin } />

      </div>
    </div>
  )
}
