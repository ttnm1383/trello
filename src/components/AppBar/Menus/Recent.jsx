import { useState } from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'

export default function Recent() {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <Button
        id="positioned-button-recent"
        aria-controls={open ? 'positioned-menu-recent' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        endIcon={open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      >
        Recent
      </Button>
      <Menu
        id="positioned-menu-recent"
        aria-labelledby="positioned-button-recent"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Menu Item 1</MenuItem>
        <MenuItem onClick={handleClose}>Menu Item 2</MenuItem>
        <MenuItem onClick={handleClose}>Menu Item 3</MenuItem>
      </Menu>
    </div>
  )
}
