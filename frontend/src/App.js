import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookList from "./components/booklist/booklist";
import AddBook from "./components/inputdata/addbook";
import Login from "./components/users/login";
import Register from "./components/users/register";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/bookList" element={<BookList/>}></Route>
        <Route path="/addList" element={<AddBook/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
