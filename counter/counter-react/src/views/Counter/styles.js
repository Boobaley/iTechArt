import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => ({
  button: {
    marginRight: 10,
    padding: 20,
    fontWeight: 700
  },
}));

export default function ContainedButtons(props) {
  const classes = useStyles();

  return (
    <Button variant="contained" className={classes.button}{...props}></Button>
  );
}

const output = {
    fontSize: 50,
    color: '#e59067',
    fontWeight: 700,
    margin: '0 auto',
    width: 200,
    padding: '10px 50px',
    borderRadius: '20px',
    border: '1px solid #e0e0e0',
    textAlign: 'center',
    marginBottom: 50,
    boxShadow: 'inset 0px 0px 0px 10px black',
    backgroundColor: '#3b3a3a'
}

const buttonsWrapper = {
    display: 'flex',
    justifyContent: 'center'
}

const counterWrapper = {
    padding: 50,
    backgroundColor: '#883e3e',
    width: 320,
    margin: '0 auto',
    borderRadius: 70,
    marginTop: 50
}

export {output, buttonsWrapper, counterWrapper};