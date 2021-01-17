import { Item, MonthData } from '../types/index'
const template: Item = {
  name: '',
  description: '',
  link: '',
  tags: [],
  source: ''
}

const data: MonthData[] = [
  {
    time: '2021-01',
    data: [
      {
        name: 'import、require、export、module.exports 混合使用详解',
        description: '',
        link: 'https://juejin.cn/post/6844903520865386510',
        tags: ['js'],
        source: '掘金'
      }, {
        name: '带你走进webpack世界，成为webpack头号玩家。',
        description: '',
        link: 'https://juejin.cn/post/6844903588607557639',
        tags: ['js'],
        source: '掘金'
      }, {
        name: '代码整洁之道 js版',
        description: '',
        link: 'https://github.com/ryanmcdermott/clean-code-javascript#encapsulate-conditionals',
        tags: ['js', '代码规范'],
        source: 'github'
      }
    ]
  }
]

export default data