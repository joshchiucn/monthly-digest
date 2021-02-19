import React from 'react';
import './style.css'
import Tab from '../tab/index'
import Slogan from '../slogan/index'
function PageHeader () {
  return (
    <div className="page-header ">
      <Tab/>
      <Slogan/>
    </div>
  )
}
export default PageHeader