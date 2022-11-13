import { element, effect } from "../htmlBuilder";
export default function textModel(text = "Hello world")
{
    const data = effect({text})

    const main = new element("div")
        .class("block")

    new element("h3")
        .effect(data)
        .html(()=>data.text)
        .parent(main)

    new element("input")
        .parent(main)
        .effect(data)
        .model( 
            () => data.text, 
            (value) => data.text = value
        )



    return main
}