import { createTheme } from '@mui/material'



export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  components: {
    MuiListItem: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: '#444444', 
          },
        },
      },
    },
  },
})
