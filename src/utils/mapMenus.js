// 获取第一个菜单
let firstMenu = null
// 动态获取匹配的路由
export function mapMenusToRoutes(userMenus) {
    let routes = []
    let allRoutes = []
    const routeFiles = require.context("../router/main", true, /\.js/)
    // console.log("routeFiles", routeFiles)
    routeFiles.keys().forEach((key) => {
        const route = require("../router/main" + key.split(".")[1])
        allRoutes.push(route.default)
    })
    // console.log("allRoutes", allRoutes)
    const _recurseGetRoute = (menus) => {
        for (const menu of menus) {
            if (menu.type === 2) {
                const route = allRoutes.find((route) => route.path === menu.url)
                if (route) {
                    routes.push(route)
                }
                if (!firstMenu) {
                    firstMenu = menu
                }
            } else {
                _recurseGetRoute(menu.children)
            }
        }
    }
    _recurseGetRoute(userMenus)
    return routes
}

// 获取当前菜单的default-active
export function pathMapToMenu(userMenus, currentPath) {
    for (const menu of userMenus) {
        if (menu.type === 1) {
            let menuChildren = menu.children ? menu.children : []
            const findMenu = pathMapToMenu(menuChildren, currentPath)
            if (findMenu) {
                return findMenu
            }
        } else if (menu.type === 2 && menu.url === currentPath) {
            return menu
        }
    }
}

// 获取面包屑数据
export function pathMapBreadCrumbs(userMenus, currentPath) {
    let breadCrumbs = []
    for (const menu of userMenus) {
        if (menu.type === 1) {
            let menuChildren = menu.children ? menu.children : []
            const findMenu = pathMapToMenu(menuChildren, currentPath)
            if (findMenu) {
                breadCrumbs.push({ name: menu.name, path: menu.url })
                breadCrumbs.push({ name: findMenu.name, path: findMenu.url })
            }
        } else if (menu.type === 2 && menu.url === currentPath) {
            return menu
        }
    }
    return breadCrumbs
}

// 导出第一个菜单
export { firstMenu }
