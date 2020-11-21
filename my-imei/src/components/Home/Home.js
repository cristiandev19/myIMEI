import { Container, Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import { CardIMEI } from '../CardIMEI/CardIMEI'
import { HeaderHome } from '../HeaderHome/HeaderHome'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: '20px'
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export const Home = () => {
  let spacing = 4;
  const classes = useStyles();

  let array_card = [0, 1, 2,3, 6, 6];
  return (
    <div>
      <HeaderHome />
      <Container fixed>
        {/* Hola home */}
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={spacing}>
              {array_card.map((value) => (
                <Grid key={value} item>
                  {/* <Paper className={classes.paper} /> */}

                  
                  <CardIMEI />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>

    </div>
  )
}
