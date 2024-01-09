import Box from '@mui/material/Box'

export default function BoardContent() {
  return (
    <Box sx={{
      bgcolor: 'primary.main',
      width: '100%',
      height: (theme) => `calc(100vh - ${theme.var.appBarHeight} - ${theme.var.boardBarHeight})`,
      display: 'flex',
      alignItems: 'center'
    }}>
      Board Content
    </Box>
  )
}
