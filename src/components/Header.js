import React, { useState } from 'react';
import Navbar from './Navbar';
import Resume from './Resume';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';

const main = {
  backgroundColor: '#50808E',
  color: 'white',
  fontSize: '20px'
}
export default function Header(){
    const [page, setPage] = useState('About');

    const renderPage = () => {
      switch(page){
        case 'Resume':
          return <Resume />
          break;
        case 'About':
          return <About />
          break;
        case 'Portfolio':
          return <Portfolio />
          break;
        default:
          return <Contact />
      }
      };

      const handlePageChange = (page) => {
           return setPage(page);
      }

      return (
          <div style={main}>
              <Navbar currentPage ={page} handlePageChange={handlePageChange} />
              {renderPage()}

          </div>
      );
}