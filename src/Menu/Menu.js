import React from 'react';

import {
  Link
} from "react-router-dom";

function Menu() {
  return (
      <nav
             aria-label="Main navigation" >
       <ul>
          <li><Link itemProp="url" to="/">Homepage</Link></li>
          <li><Link itemProp="url" to="/about">About</Link></li>
          <li><Link itemProp="url" to="/login">Login</Link></li>
        </ul>
     </nav>
  );
}









    //   <nav>
    //       role="navigation"
    //       aria-label="Main menu"
    //       itemScope
    //       itemType="http://schema.org/SiteNavigationElement"

    //       <ul>
    //         <li><Link itemProp="url" to="/">Homepage</Link></li>
    //         <li><Link itemProp="url" to="/>about.html">About</Link></li>
    //         <li><Link itemProp="url" to="/>login.html">Login</Link></li>
    //      </ul>
    //  </nav>


export default Menu;
