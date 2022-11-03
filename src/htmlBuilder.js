import ObservableSlim from 'observable-slim';

export function ref(initial_value){
    const callbacks = [];
    const data = ObservableSlim.create(initial_value, true, (changes)=> {
        for(const callback of callbacks){
            callback(data);
        }
    });
    function subscribe(callback){
        callback(data)
        callbacks.push(callback);
    }
    initial_value.subscribe = subscribe;
    return data
}

export class element{
    // constructor
    constructor(name) {
        this.element = document.createElement(name);
    }
    removeClass(name)
    {
        this.element.classList.remove(...(name.split(" ")));
    }
    #HandleReactivity(response_callback,data,no_callback, yes_callback)
    {
        if(response_callback === undefined)
        {
            no_callback()
        }
        else
        {
            data.subscribe(yes_callback)
        }
    }
    class(name, obj, callback)
    {
        this.#HandleReactivity(callback, obj, 
        ()=>{
            this.element.classList.add(...(name.split(" ")));
        },
        (data)=>{
            if(callback(data))
            {
                this.class(name)
            }
            else
            {
                this.removeClass(name)
            }
        })
        return this
    }
    parent(object)
    {
        if(object.element !== undefined)
        {
            object.element.appendChild(this.element);
        }
        else
        {
            object.appendChild(this.element);
        }
        return this
    }
    event(event, callback)
    {
        const callbackFunction = (e) => callback(e,remove);
        const remove = () =>
        {
            this.element.removeEventListener(event, callbackFunction);
        }
        this.element.addEventListener(event, callbackFunction);
        return this
    }
    property(name, obj,callback)
    {
        this.#HandleReactivity(callback, obj, 
        ()=>{
            this.element[name] = obj;
        },
        (data)=>{
            this.element[name] = callback(data);
        })
        return this
    }
    style(name, obj,callback)
    {
        this.#HandleReactivity(callback, obj, 
        ()=>{
            this.element.style[name] = obj;
        },
        (data)=>{
            this.element.style[name] = callback(data);
        })
        return this
    }
    
    html(obj, callback)
    {
        this.#HandleReactivity(callback, obj, 
        ()=>{
            this.element.innerHTML = obj;
        },
        (data)=>{
            this.element.innerHTML = callback(data)
        })
        return this
    }
    remove()
    {
        this.element.remove();
    }

    model(data,get,set)
    {
        this.property("value", data, (obj) => get(obj))
        this.event("input", (e) => {
            set(data, e.target.value)
        })
    }
}