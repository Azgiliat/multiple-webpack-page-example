import dcFactory from "./dcFactory";

export class App {
    constructor() {
        this.dcFactory = dcFactory
    }

    init() {
        this.dcFactory.init();
    }
}
