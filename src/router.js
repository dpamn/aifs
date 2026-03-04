export const routes = {};

export function registerRoute(path, component) {
    routes[path] = component;
}

export function initRouter() {
    const handleRouteChange = () => {
        const defaultPath = '/';
        let currentPath = window.location.hash.slice(1) || defaultPath;

        // Strip trailing slash if present (except for root '/')
        if (currentPath !== '/' && currentPath.endsWith('/')) {
            currentPath = currentPath.slice(0, -1);
        }

        const component = routes[currentPath] || routes['/404'] || { render: () => '<h1>404 - Page Not Found</h1>', after_render: () => { } };

        const appContainer = document.getElementById('page-content');
        if (appContainer) {
            appContainer.innerHTML = component.render();
            if (typeof component.after_render === 'function') {
                // Use timeout to ensure DOM is updated before binding events
                setTimeout(() => {
                    component.after_render();
                }, 0);
            }
        }
    };

    window.addEventListener('hashchange', handleRouteChange);

    // Initial load
    handleRouteChange();
}

export function navigateTo(path) {
    window.location.hash = path;
}
