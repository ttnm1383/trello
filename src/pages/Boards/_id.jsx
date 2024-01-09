import Container from '@mui/material/Container'
import AppBar from '~/components/AppBar'
import BoardBar from './BoardBar'
import BoardContent from './BoardContent'


export default function Board() {
  return (
    <Container disableGutters maxWidth={false}>
      <AppBar />
      <BoardBar />
      <BoardContent />
    </ Container>
  )
}
