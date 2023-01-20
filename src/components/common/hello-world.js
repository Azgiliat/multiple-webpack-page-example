import {createElement, render} from "../../render";
import dcFactory from "../../dcFactory";

export function helloWorld() {
    return createElement(
        '<h1>Hello World</h1>'
    )
}

dcFactory.register(helloWorld())
