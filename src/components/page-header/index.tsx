import React, { FunctionComponent } from 'react';
import './style.css'
import Tab from '../tab/index'
import Slogan from '../slogan/index'
const PageHeader: FunctionComponent = () => (
  <div className="page-header ">
    <Tab/>
    <Slogan/>
  </div>
)
export default PageHeader