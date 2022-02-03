import React from 'react';

const header = {
    display: 'flex',
    padding: '30px 15px',
    justifyContent: 'space-between',
    backgroundColor: '#69A297',
    color: '#DDD8C4', 
    marginBottom: '30px'
}

export default function Navbar({ currentPage, handlePageChange }) {
   return ( 
       <div style={header}>
           <h1 className=''>Wesley Rogers</h1>
   <ul className="nav nav-tabs flex-row" >
        <li className="nav-item">
            <a href='#about' onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About</a>
        </li>
        <li className="nav-item">
            <a href='#portfolio' onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</a>
        </li>
        <li className="nav-item">
            <a href='#contact' onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</a>
        </li>
        <li className="nav-item">
            <a href="#resume" onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>Resume</a>
        </li>
    </ul>
    </div>
   );
}