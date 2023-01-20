import dcFactory from "../../dcFactory";
import {createElement} from "@/render";

function title() {
    return createElement(
        '<h2>awesome news title</h2>'
    )
}

dcFactory.register(title())
