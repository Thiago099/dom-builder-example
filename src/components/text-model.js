import { element, ref } from "../htmlBuilder";
export default function textModel(text = "Hello world")
{
    const data = ref({text})

    const main = new element("div")
        .class("block")

    new element("h3")
        .html(data, data => data.text)
        .parent(main)

    new element("input")
        .parent(main)
        .model(data, 
            data => data.text, 
            (data, value) => data.text = value
        )



    return main
}