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
   <ul className="nav " >
        <li className="nav-item">
            <a href='#about' onClick={() => handlePageChange('About')} className='navbar'>About</a>
        </li>
        <li className="nav-item">
            <a href='#portfolio' onClick={() => handlePageChange('Portfolio')} className='navbar'>Portfolio</a>
        </li>
        <li className="nav-item">
            <a href='#contact' onClick={() => handlePageChange('Contact')} className='navbar'>Contact</a>
        </li>
        <li className="nav-item">
            <a href="#resume" onClick={() => handlePageChange('Resume')} className='navbar'>Resume</a>
        </li>
    </ul>
    </div>
   );
}