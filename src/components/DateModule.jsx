import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
     container: {
          display: 'flex',
          flexWrap: 'wrap',
     },
     textField: {
          marginLeft: theme.spacing(1),
          marginRight: theme.spacing(1),
          width: 200,
     },
}));

const DateModule = ({handleChangeDate}) => {
     const [ dates, setDates ] = useState('');
     const classes = useStyles();
     const d = new Date();
     // const defaultDate= `${d.getDate()}-${d.getMonth()}-${d.getFullYear()}`
     const defaultDate= `${d.getFullYear()}-0${`${d.getMonth()+1}`}-${d.getDate()}`
     console.log(defaultDate);
     
     

     return (
          <form className={classes.container} noValidate>
               <TextField
               name="date"
                    id="date"
                    label="Birthday"
                    type="date"
                    defaultValue={defaultDate}
                    className={classes.textField}
                    onChange={ handleChangeDate}
                    InputLabelProps={{
                         shrink: true,
                    }}
               />
          </form>
     )
}

export default DateModule
