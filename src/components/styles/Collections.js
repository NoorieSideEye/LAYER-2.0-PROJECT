import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'white',
    color: 'orange',
    padding: theme.spacing(2),
  },
  button: {
    backgroundColor: 'green',
    color: 'white',
    borderRadius: theme.spacing(1),
    padding: theme.spacing(1),
  },
}));

export { useStyles };
