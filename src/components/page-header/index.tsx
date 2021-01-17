import React from 'react';
import './style.css'
import Tab from './components/tab'
import Slogan from './components/slogan'
function PageHeader () {
  return (
    <div className="page-header ">
      <Tab/>
      <Slogan/>
    </div>
  )
}
export default PageHeader