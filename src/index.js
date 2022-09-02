import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import { AppProvider } from './context.';
import './index.css';
import Home from './pages/Home/Home';
import About from "./pages/About/About";
import BookList from "./components/BookList/BookList";
import BookDetails from "./components/BookDetails/BookDetails";
import Registration from './pages/Registration';
import Login from './pages/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
      <Route path = "" element = {<Registration />} />
      <Route path = "Login" element = {<Login />} />
        <Route path = "Home" element = {<Home />}>
          
          {/* <Route path = "Login" element = {<Login />} /> */}
          <Route path = "/Home/book" element = {<BookList />} />
          <Route path = "/Home/book/:id" element = {<BookDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </AppProvider>
);



 
