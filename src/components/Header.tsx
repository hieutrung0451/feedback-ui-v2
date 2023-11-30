import React from 'react';

function Header() {
  const headerStyles = {
    backgroundColor: '#023430',
    color: '#00ED64',
  };
  const headerTextStyles = {
    color: '#00ED64',
    textDecoration: 'none',
  };

  return (
    <header style={headerStyles}>
      <div className='container'>
        <h2 style={headerTextStyles}>Movie Feedback</h2>
      </div>
    </header>
  );
}

export default Header;
