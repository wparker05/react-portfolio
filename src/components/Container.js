import React, { useState } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

export default function Container(){
    const [page, setPage] = useState('Home');

    const renderPage = () => {
        if (page === 'Home') {
          return <Home />;
        }
        if (page === 'About') {
          return <About />;
        }
        if (page === 'Blog') {
          return <Projects />;
        }
        return <Contact />;
      };
      
      const pageChange = (page) => {
            setPage(page);
      }

      return (
          <div>
              <Navbar currentPage = {page} handlePageChange={pageChange} />
          </div>
      )
}