import { element, effect } from "@thiago-kaique/dom-builder";
export default function EditableTitle(text = "Hello world")
{
    const data = effect({text})

    const main = element("div")
        .class("card")

    element("h3")
        .effect(data)
        .html(()=>data.text)
        .parent(main)

    element("input")
        .parent(main)
        .effect(data)
        .model( 
            () => data.text, 
            (value) => data.text = value
        )

    return main
}