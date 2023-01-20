import {render} from "./render";

class DcFactory {
    constructor() {
        this.components = []
        this.root = document.body
    }

    register(component) {
        this.components.push(component)
    }

    init() {
        this.components.forEach(component => {
            render(component, this.root)
        })
    }
}

export default new DcFactory()
