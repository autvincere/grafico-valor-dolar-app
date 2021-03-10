import React, { useState } from 'react'
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom';

const Navbar = () => {

     const [alignment, setAlignment] = useState('left');

     const handleAlignment = (event, newAlignment) => {
          setAlignment(newAlignment);
     };
     
     return (
          <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
        >
          <ToggleButton value="left" component={Link} to={'/'}>
          Valor Individual
          </ToggleButton>
               <ToggleButton value="center" component={Link} to={'/valor-por-periodos'}>
               Valor Por Períodos
          </ToggleButton>
        </ToggleButtonGroup>
     )
}

export default withRouter(Navbar)
