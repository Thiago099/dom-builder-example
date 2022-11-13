import { element, effect } from "@thiago-kaique/doom-builder";
import './style.css'

import CounterButton from './components/CounterButton.js'
import EditableTitle from './components/EditableTitle.js'


const main = element("div")
    .class("main")
    .parent(document.body)

element("h1")
    .html("Hello world")
    .parent(main)
    .class("title")
    
CounterButton()
    .parent(main)

EditableTitle("Edit me.")
    .parent(main)