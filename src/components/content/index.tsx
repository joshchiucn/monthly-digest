import React from 'react'
import MonthItem from '../month-item/index'
import data from '../../data'
function Content () {
  return (
    <div>
      <ul className="month-list">
        {
          data.map((item, index) => (
            <li key={index} className="month">
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