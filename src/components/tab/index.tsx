import React, { FunctionComponent } from 'react'
import {
  Link
} from "react-router-dom";
interface TabItem {
  name: string,
  url: string
}
const tabs: TabItem[] = [
  {
    name: '文章',
    url: '/'
  }, {
    name: '站点',
    url: '/sites'
  }
]
const Tab: FunctionComponent = () => {
  return (
    <div className="tabs py-2">
      <ul className="tabs-list flex px-5">
        {
          tabs.map(item => (
            <li key={item.name} className="tabs-item py-2 px-5 mr-2 rounded text-white font-bold text-xl hover:bg-gray-300 hover:bg-opacity-50 active:bg-gray-300 active:bg-opacity-50">
              <Link to={item.url}>{item.name}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Tab