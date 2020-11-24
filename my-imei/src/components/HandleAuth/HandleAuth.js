import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, makeStyles, TextField } from '@material-ui/core'
import React from 'react'
import { LoginModal } from '../LoginModal/LoginModal';
import { Hijo } from '../Hijo';


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

  const handleChange = () => {
    console.log('holaaaaaaaaa')
    setNumPadre(2);
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

      <Hijo numPadre={numPadre} change={ handleChange } />
      {/* <LoginModal open={} /> */}
{/* 
        <Dialog open={openLogin} onClose={handleCloseLogin} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Ingresa a ver tus IMEIS</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="email"
              label="Email"
              type="email"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="password"
              label="Contraseña"
              type="password"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseLogin} color="primary" >
              Cancelar
            </Button>
            <Button onClick={handleCloseLogin} color="primary" variant="outlined">
              Ingresar
            </Button>
          </DialogActions>
        </Dialog> */}

      </div>
    </div>
  )
}
