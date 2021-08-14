import { makeStyles } from '@material-ui/core';
import fontRegular from '../Assets/fonts/Montserrat-Regular.ttf';

export const useStyles = makeStyles((theme) => ({
  forecastContainer: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    fontSize: '1rem',
    fontFamily: fontRegular,
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    paddingTop: '3%',
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.9rem',
    },
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: '1fr 1fr 1fr',
    },
  },
  tempCont: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: '1.7rem',
    [theme.breakpoints.up('sm')]: {
      fontSize: '2.3rem',
    },
  },
  tempData: {
    textAlign: 'center',
  },
  weatherIcon: {
    width: '70px',
    height: '70px',
    [theme.breakpoints.up('sm')]: {
      width: '90px',
      height: '90px',
    },
    [theme.breakpoints.up('md')]: {
      width: '100px',
      height: '100px',
    },
  },
}));