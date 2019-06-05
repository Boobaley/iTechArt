import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    width: 150
  },
  input: {
    display: 'none',
  },
}));

export default function ContainedButtons(props) {
  const classes = useStyles();
  return <Button variant="contained" color="primary" className={classes.button}{...props}></Button>;
}

const buttonsWrapper = {
    backgroundColor: '#afafaf',
    padding: 10,
    width: "max-content",
    borderRadius: 25
};

const parentCounterWrapper = {
    margin: '0 auto 50px auto',
    width: 'max-content'
};

export {buttonsWrapper, parentCounterWrapper};