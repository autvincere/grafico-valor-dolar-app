import React, { useState, useEffect } from 'react'
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom';

const Navbar = () => {

     const [location, setlocation] = useState('home');

     const handleLocation = (event, newAlignment) => {
          setlocation(newAlignment);
     };

     const checkLocation = () => {
          const currentLocation = window.location.pathname.split("/")[1];
          currentLocation === '' ? setlocation('home') : setlocation('valor-por-periodos')
     }

     useEffect(() => { checkLocation() }, [])

     return (
          <ToggleButtonGroup
               value={location}
               exclusive
               onChange={handleLocation}
               aria-label="text location"
          >
               
               <ToggleButton value="home" component={Link} to={'/'}>
                    Valor Individual
               </ToggleButton>
               
               <ToggleButton value="valor-por-periodos" component={Link} to={'/valor-por-periodos'}>
                    Valor Por Períodos
               </ToggleButton>
               
          </ToggleButtonGroup>
     )
}

export default withRouter(Navbar)
