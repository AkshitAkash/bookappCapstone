import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>Welcome to My BOOK APP</h2><br />
                <p className='header-text fs-18 fw-3'>Books are referred to as a man’s best friend. They are very beneficial for mankind and have helped it evolve. There is a powerhouse of information and knowledge. Books offer us so many things without asking for anything in return. Books leave a deep impact on us and are responsible for uplifting our mood. <h3>Find about any book you love ranging from different generes and categories. </h3></p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header