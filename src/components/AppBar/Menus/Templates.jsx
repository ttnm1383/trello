import { useState } from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'

export default function Templates() {
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
        id="positioned-button-templates"
        aria-controls={open ? 'positioned-menu-templates' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        endIcon={open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      >
        Templates
      </Button>
      <Menu
        id="positioned-menu-templates"
        aria-labelledby="positioned-button-templates"
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
