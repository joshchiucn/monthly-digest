import React from 'react'
interface TabItem {
  name: string,
  url: string
}
const tabs: TabItem[] = [
  {
    name: '文章',
    url: '/'
  }
]
function Tab () {
  return (
    <div className="tabs">
      <ul className="tabs-list">
        {
          tabs.map(item => (
            <li className="tabs-item">{item.name}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default Tab