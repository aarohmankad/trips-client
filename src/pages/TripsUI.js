import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import request from 'superagent';

class TripsUserInterface extends Component {
    constructor(){
        super();
    }

    render(){
        return(
            <div className="trips-UI-page">
                <Paper className="trips-UI-paper">
                    <h1>Trips</h1>
                    <form>
                        <textField>
                        id="outlined-name"
                        className="sign-in-formfield"
                        label="Email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        margin="normal"
                        variant="outlined"
                        type="email"
                        name="email"
                        autoComplete="email"
                        fullWidth
                        </textField>
                    </form>
                </Paper>
             </div>
        )
       
           
    }
}

const styles = theme => ({
    container:{
        display: 'flex',
        flexWrap: 'wrap',
    },
    TextField:{
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
});

function DateAndTimePickers(props){
    const { classes } = props;
        return (
            <form  className = {classes.container} noValidate>
            <TextField
                id="datetime-local"
                label="Next Trip"
                type="datetime-local"
                defaultValue="2018-11-01-24T08:00"
                className={classes.TextField}
                InputLabelProps={{
                    shrink: true,
                }}
                />
            </form>
        );
        
        
}

DateAndTimePickers.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DateAndTimePickers)