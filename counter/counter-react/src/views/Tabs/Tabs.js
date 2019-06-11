import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { tabStyles } from './styles';
import { Link } from 'react-router-dom';
const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
  });
  
  export default function CenteredTabs(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(props.current);
  
    function handleChange(event, newValue) {
      setValue(newValue);
    }
    
    return (
      <Paper className={classes.root}>
        <Tabs 
          value={value} 
          indicatorColor="primary" 
          textColor="primary" 
          onChange={handleChange}
          centered
          style={tabStyles}
        >
          <Tab label="About Us" component={Link} to="/about"/>
          <Tab label="Counters" component={Link} to="/counters"/>
        </Tabs>
      </Paper>
    );
}