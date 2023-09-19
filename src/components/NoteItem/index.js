// Write your code here
import {ItemContainer, ItemTitle, ItemNote} from './styledComponents'

const NoteItem = props => {
  const {note} = props

  return (
    <ItemContainer>
      <ItemTitle>{note.title}</ItemTitle>
      <ItemNote>{note.note}</ItemNote>
    </ItemContainer>
  )
}

export default NoteItem
