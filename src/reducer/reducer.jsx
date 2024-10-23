export const initalState = {
  books: [],
  editId : null,
  editedBook : ''
};
const Reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return{
        ...state, books : [...state.books, {id : Date.now(), title : action.payload.title, author: action.payload.author}] 
      };
    
    case 'UPDATE_BOOK':
      return{
        ...state, books :  state.books.map((book) => book.id === action.payload.id ? {...book, title : action.payload.editedBook} : book)
      };
    
    case 'DELETE_BOOK':
      return{
        ...state, books : state.books.filter(book => book.id !== action.payload) 
      };
    

    default:
      break;
  }
};

export default Reducer