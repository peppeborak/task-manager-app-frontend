import { AccountCircle } from '@mui/icons-material'
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
} from '@mui/material'
import { useState } from 'react'
import { LogoutButton } from '../user/logout-button'


export const TopBar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <AppBar position="static">
      <Container>
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h5" sx={{ display: { xs: 'none', md: 'flex' } }}>
            Task Manager App
          </Typography>
          <Typography variant="h5" sx={{ display: { xs: 'flex', md: 'none' }, m: 2 }}>
            TMA
          </Typography>


          <Box>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <MenuItem onClick={handleClose}>All tasks</MenuItem>
              <MenuItem onClick={handleClose}>Completed</MenuItem>
              <LogoutButton/>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
