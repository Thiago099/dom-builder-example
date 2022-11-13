import { element, effect } from "./htmlBuilder";
import './style.css'

import count from './components/count.js'
import textModel from './components/text-model.js'


const main = new element("div")
    .class("main")
    .parent(document.body)

new element("h1")
    .html("Hello world")
    .parent(main)
    .class("title")
    
count()
    .parent(main)

textModel("Edit me to see the title change")
    .parent(main)