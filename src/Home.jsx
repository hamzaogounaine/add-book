import React, { useReducer } from 'react'
import Reducer, { initalState } from './reducer/reducer'

const Home = () => {
  const [state , dispatch] = useReducer(Reducer , initalState)
  return (
    <div>
      {state.books.length === 0 && <h1>No Books</h1>}
      {state.books.map((book) => (
        <div key={book.id}>
          <h1>{book.title}</h1>
          <h1>{book.author}</h1>
          <button onClick={() => dispatch({type : 'DELETE_BOOK', payload : book.id})}>Delete</button>
          <button onClick={() => dispatch({type : 'UPDATE_BOOK', payload : {id : book.id, editedBook : 'New Title'}})}>Edit</button>
        </div>
      ))}
    </div>
  )
}

export default Home