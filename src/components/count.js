import { element, effect } from "../htmlBuilder";
export default function count()
{
    const data = effect({count: 0})
    const main = element("div")
        .class("block")

     element("button")
        .effect(data)
        .html(() => `Count is: ${data.count}`)
        .event("click", e => data.count++)
        .parent(main)
    
    return main
}