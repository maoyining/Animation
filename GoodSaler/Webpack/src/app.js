//入口文件 初始化
import CheckBox from './js/checkbox'
//import './css/index.css'
let boxOne = new CheckBox('region-radio-wrapper',['华东','华北','华南'])
let boxTwo = new CheckBox('product-radio-wrapper',['手机','笔记本','智能音箱'])
boxOne.init()
boxTwo.init()
boxOne.bindEvents()
boxTwo.bindEvents()