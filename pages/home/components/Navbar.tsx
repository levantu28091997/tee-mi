import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { FormControl, Select, MenuItem } from '@mui/material'

import WelcomeMessage from './WelcomeMessage';

function Navbar() {
  const [position, setPosition] = React.useState<string>('Full-stack developer')

  const handleChangePosition = (event: { target: { value: string; }; }) => setPosition(event.target.value as string)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <WelcomeMessage position={position}/>
          <Box className='mt-1'>
            <FormControl fullWidth variant="standard">
              <Select
                value={position}
                onChange={handleChangePosition}
              >
                <MenuItem value={'Full-stack developer'}>Full-stack developer</MenuItem>
                <MenuItem value={'Front-end developer'}>Front-end developer</MenuItem>
                <MenuItem value={'Back-end developer'}>Back-end developer</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar

