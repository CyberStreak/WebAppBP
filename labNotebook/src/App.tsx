import { useState } from 'react'
import { ThemeType } from './theme/model.ts'
import { ThemeSwitch } from './theme/ThemeSwitch.tsx'
import { Notes } from './notes/Notes.tsx'
import { Box } from '@mui/system'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import {AppBar, CssBaseline, Toolbar, Typography} from '@mui/material'

const sxApp = {
  width: '100vw',
  height: `100vh`,
  display: 'grid',
  gridTemplateRows: `auto 1fr`,
  justifyItems: 'center',
}

const sxToolbar = {
  display: 'flex',
  justifyItems: 'end',
  gap: 2,
  justifyContent: 'space-between',
}

const sxMain = {
  width: '100%',
  height: '100%',
  display: 'grid',
  placeItems: 'center',
  overflow: 'auto',
  pt: 2,
  pb: 2,
}

function App() {
  const [themeType, setThemeType] = useState<ThemeType>('dark')

  const theme = createTheme({ palette: { mode: themeType } })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={sxApp}>
        <AppBar position={'static'}>
          <Toolbar sx={sxToolbar}>
            <Typography variant={'h4'}>Lab Notebook</Typography>
            <ThemeSwitch themeType={themeType} onThemeChange={setThemeType} />
          </Toolbar>
        </AppBar>
        <Box sx={sxMain}>
          <Notes />
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default App
