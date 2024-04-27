import React from 'react';

function LoginLayout({ children }) {
  return (
    <div> 
      <header>
        {/* Login header content */}
      </header>
      <main>
        {children}
      </main>
      <footer>
        {/* Login footer content */}
      </footer>
    </div>
  );
}

export default LoginLayout;