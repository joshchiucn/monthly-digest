import React from 'react'
import MonthItem from './components/month-item'
import data from '../../data'
function Content (): React.ReactNode {
  return (
    <div>
      <ul>
        {
          data.map(item => (
            <li></li>
          ))
        }
        <li></li>
      </ul>
    </div>
  )
}

export default Content