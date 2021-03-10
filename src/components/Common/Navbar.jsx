import React from 'react'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { Box, Button } from '@material-ui/core'

const Navbar = (props) => {
     console.log(props);
     return (
          <>
               <Button variant="text" component={Link} to={'/'}>Valor Individual</Button>
                         |
               <Button variant="text" component={Link} to={'/valor-por-periodos'}>Valor Por Períodos</Button>
          </>
     )
}

export default withRouter(Navbar)
