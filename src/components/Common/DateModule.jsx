import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles( (theme) => ({
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

const DateModule = ({ handleChangeDate, id }) => {

     const classes = useStyles();
     // const d = new Date();
     // const defaultDate= `${d.getDate()}-${d.getMonth()}-${d.getFullYear()}`
     // const defaultDate = `${d.getFullYear()}-0${`${d.getMonth() + 1}`}-0${d.getDate()}`
     // console.log(defaultDate);
     
     return (
          <form className={classes.container} noValidate>
               <TextField
               name="date"
                    id={id}
                    label="Fecha de consulta"
                    type="date"
                    // defaultValue="2021-03-05"
                    defaultValue=""
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
