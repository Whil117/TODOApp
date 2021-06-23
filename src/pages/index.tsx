import styled from '@emotion/styled'
import React from 'react'
import Todo from '../components/TodoApp/Todo'

const MainApp = styled.main`
  font-family: 'Source Sans Pro', sans-serif;
`

const  Home = ()=> {
  return (
    <MainApp>
      <Todo/>
    </MainApp>
  )
}
export default Home