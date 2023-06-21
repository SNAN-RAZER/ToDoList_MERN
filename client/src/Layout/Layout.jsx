import React from 'react'
import Header from '../Components/Header'
import './Layout.css';
import Content from '../Components/Content';
const Layout = () => {
  return (
   <>
   <div className="header">
   <Header />
   </div>
   <div className="content">
    <Content />
   </div>
   </>
  )
}

export default Layout;