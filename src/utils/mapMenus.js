export function mapMenusToRoutes(userMenus) {
    let routes = []
    let allRoutes = []
    const routeFiles = require.context("../router/main", true, /\.js/)
    // console.log("routeFiles", routeFiles)
    routeFiles.keys().forEach((key) => {
        const route = require("../router/main" + key.split(".")[1])
        allRoutes.push(route.default)
    })
    console.log("allRoutes", allRoutes)
    const _recurseGetRoute = (menus) => {
        for (const menu of menus) {
            if (menu.type === 2) {
                const route = allRoutes.find((route) => route.path === menu.url)
                if (route) routes.push(route)
            } else {
                _recurseGetRoute(menu.children)
            }
        }
    }
    _recurseGetRoute(userMenus)
    return routes
}
