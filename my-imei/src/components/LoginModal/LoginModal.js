import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@material-ui/core'
import React from 'react'

export const LoginModal = ({openLogin, actionsLogin }) => {

  // const [openLogin, setOpenLogin] = React.useState(false);
  // const [openRegister, setOpenRegister] = React.useState(false);

  // const handleClickOpenLogin = () => {
  //   setOpenLogin(true);
  // };

  // const handleCloseLogin = () => {
  //   setOpenLogin(false);
  // };

  const handleCloseLogin = () => {
    actionsLogin({
      type: 'close',
      payload: {}
    })
  }

  return (
    <>
      
      <Dialog open={openLogin} onClose={handleCloseLogin} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Ingresa a ver tus IMEIS</DialogTitle>
          <DialogContent>
            {/* <DialogContentText>
              To subscribe to this website, please enter your email address here. We will send updates
              occasionally.
            </DialogContentText> */}
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
        </Dialog>
    </>
  )
}
