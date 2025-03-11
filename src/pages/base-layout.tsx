import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper/Paper'
import { Outlet } from 'react-router'
import { TopBar } from '../components/top-bar/top-bar'


const styles = {
  paper: {
    padding: '2em 0',
    borderRadius: '1em',
    boxShadow: '0 0 1em rgba(0, 0, 0, 0.5)',
  },
  paddingBottom: {
    paddingBottom: '4em',
  },
  marginTop: {
    marginTop: '2em',
  },
}

export function BaseLayout() {
  return (
    <>
      <TopBar />
      <Container maxWidth="md" sx={styles.marginTop}>
        <Paper sx={styles.paper}>
          <Container sx={styles.paddingBottom}>
            <Outlet />
          </Container>
        </Paper>
      </Container>
    </>
  )
}
