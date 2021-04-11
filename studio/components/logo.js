import React from 'react';

const Logo = () => (
    <div style={{'display': 'flex', 'alignItems': 'center'}}>
      <img src="/static/logo.png" alt="Choose your lens logo" height="40"/>
      <h3 style={{'margin': '0 2rem 0 1.25rem'}}>Blog Studio</h3>
    </div>
  );

export default Logo;