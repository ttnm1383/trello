import Box from '@mui/material/Box'
import ModeSelect from '~/components/ModeSelect'

export default function AppBar() {
  return (
    <Box sx={{
      bgcolor: 'primary.light',
      width: '100%',
      height: (theme) => theme.var.appBarHeight,
      display: 'flex',
      alignItems: 'center'
    }}>
      <ModeSelect />
    </Box>
  )
}
