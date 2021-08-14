import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  weatherContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-end',
      textAlign: 'justify',
      paddingLeft: '2%',
      paddingRight: '2%',
    },
    [theme.breakpoints.up('lg')]: {
      flexDirection: 'row',
    },
  },
}));