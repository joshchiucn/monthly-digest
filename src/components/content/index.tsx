import React from 'react'
import MonthItem from './components/month-item'
import data from '../../data'
function Content (): React.ReactNode {
  return (
    <div>
      <ul className="month-list">
        {
          data.map(item => (
            <li className="month">
              <MonthItem months={item}/>
            </li>
          ))
        }
        <li></li>
      </ul>
    </div>
  )
}

export default Content