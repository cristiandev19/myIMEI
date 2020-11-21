import { Container, Grid, makeStyles, TextField } from '@material-ui/core'
import React from 'react'
import { CardIMEI } from '../CardIMEI/CardIMEI'
import { HeaderHome } from '../HeaderHome/HeaderHome'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    }
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  buscador: {
    width: '75%',
    margin: 'auto'
  },
  main: {
    marginTop: '20px',
  }
}));

export const Home = () => {
  let spacing = 4;
  const classes = useStyles();

  let array_card = ['item_add',0, 1, 2,3, 6, 6];
  return (
    <div>
      <HeaderHome />
      <Container fixed className={classes.main}>
        {/* Hola home */}

        <form className={classes.buscador} noValidate autoComplete="off">
          <TextField id="outlined-basic"  fullWidth label="Outlined" variant="outlined" />
        </form>
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={spacing}>
              {array_card.map((value) => (

                <Grid key={value} item>
                  {/* <Paper className={classes.paper} /> */}
                  <CardIMEI alias="hola" imei="hola" estado="hola"  type_card="value"/>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>

    </div>
  )
}
