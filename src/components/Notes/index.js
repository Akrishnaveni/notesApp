import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import {
  Container,
  CardContainer,
  TitleInput,
  CustomButton,
  Heading,
  NoteInput,
  NoNotesImage,
  NoNotesContainer,
  NoNotesHeading,
  NoNotesParagraph,
  ItemList,
} from './styledComponents'
import NoteItem from '../NoteItem'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')
  const [noteList, setNoteList] = useState('')

  const onChangeTitle = event => {
    setTitle(event.target.value)
  }

  const onChangeNote = event => {
    setNote(event.target.value)
  }

  const submittedForm = event => {
    event.preventDefault()

    const newNote = {id: uuidv4(), title, note}

    setNoteList(prevState => [...prevState, newNote])
    setTitle('')
    setNote('')
  }

  console.log(noteList)

  return (
    <Container>
      <Heading>Notes</Heading>
      <CardContainer onSubmit={submittedForm}>
        <TitleInput
          type="text"
          placeholder="Title"
          value={title}
          onChange={onChangeTitle}
        />
        <NoteInput
          columns="5"
          placeholder="Take a Note..."
          value={note}
          onChange={onChangeNote}
        />
        <CustomButton>Add</CustomButton>
      </CardContainer>
      <ItemList>
        {noteList.length > 0 &&
          noteList.map(each => <NoteItem key={each.id} note={each} />)}
      </ItemList>
      {noteList.length === 0 && (
        <NoNotesContainer>
          <NoNotesImage
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
            alt="notes empty"
          />
          <NoNotesHeading>No Notes Yet</NoNotesHeading>
          <NoNotesParagraph>Notes you add will appear here</NoNotesParagraph>
        </NoNotesContainer>
      )}
    </Container>
  )
}

export default Notes
