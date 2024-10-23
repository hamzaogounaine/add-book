import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddBookForm from './AddBook';
import Home from './Home';
import Navbar from './Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/addbook" element={<AddBookForm />} />
      </Routes>
    </Router>
  );
}

export default App;