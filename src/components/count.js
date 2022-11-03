import { element, ref } from "../htmlBuilder";
export default function count()
{
    const [data, subscribe] = ref({count: 0})
    const main = new element("div")
        .class("block")

     new element("button")
        .html(subscribe, data => `Count is: ${data.count}`)
        .event("click", e => data.count++)
        .parent(main)
    
    return main
}