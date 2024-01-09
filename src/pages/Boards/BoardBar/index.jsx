import Box from '@mui/material/Box'

export default function BoardBar() {
  return (
    <Box sx={{
      bgcolor: 'primary.dark',
      width: '100%',
      height: (theme) => theme.var.boardBarHeight,
      display: 'flex',
      alignItems: 'center'
    }}>
      Board Bar
    </Box>
  )
}
