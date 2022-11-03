import { element, ref } from "../htmlBuilder";
export default function textModel(text = "Hello world")
{
    const [data, subscribe]= ref({text})

    const main = new element("div")
        .class("block")

    new element("h3")
        .html(subscribe, data => data.text)
        .parent(main)

    new element("input")
        .parent(main)
        .model(subscribe, 
            data => data.text, 
            value => data.text = value
        )

    return main
}