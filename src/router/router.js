import {routes} from "@/router/routes";

class Router {
    constructor() {
        this.routes = routes
        this.location = window.location
    }

    matchUrl() {
        for (const route of this.routes) {
            if (this.location.pathname === route.path) {
                this.loadRouteComponent(route.page)
                break
            }
        }
    }

    loadRouteComponent(component) {
        component()
    }

    init() {
        addEventListener( 'popstate', this.matchUrl)
        this.matchUrl()
    }

    destroy() {
        removeEventListener('popstate', this.matchUrl)
    }
}

export const router = new Router()
