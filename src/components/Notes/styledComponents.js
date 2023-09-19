// Style your elements here
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`
export const Heading = styled.h1`
  font-family: Bree Serif;
  color: #4c63b6;
`

export const CardContainer = styled.form`
  margin-top: 40px;
  width: 650px;
  height: 150px;
  box-shadow: 2px 2px 5px 4px #cbd5e1;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const TitleInput = styled.input`
  align-self: stretch;
  border: none;
  outline: none;
`

export const NoteInput = styled.textarea`
  align-self: stretch;
  height: 50px;
  margin-top: 5px;
  border: none;
  outline: none;
`

export const CustomButton = styled.button`
  align-self: flex-end;
  margin-top: 5px;
  margin-right: 10px;
  background-color: #4c63b6;
  color: #ffffff;
  padding: 10px;
  border-radius: 5px;
  padding-left: 15px;
  padding-right: 15px;
  border: none;
  outline: none;
  font-family: Roboto;
  font-size: 14px;
`

export const NoNotesContainer = styled.div`
  margin-top: 20px;
  text-align: center;
`

export const NoNotesHeading = styled.h4``
export const NoNotesParagraph = styled.p``

export const NoNotesImage = styled.img``

export const ResultContainer = styled.div``

export const ItemList = styled.ul`
  align-self: flex-start;
  padding-left: 30%;
  padding-right: 30%;
  list-style-type: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`
