export const RouterConfig = angular
    .module('router-config', [])
    .config(($urlRouterProvider, $locationProvider) => {
        "ngInject";

        $locationProvider.html5Mode(true);
        $urlRouterProvider.deferIntercept();
        $urlRouterProvider.rule(function ($injector, $location) {
            let path = $location.path();

            // Remove trailing slashes from path
            if (path !== '/' && path.slice(-1) === '/') {
                $location.replace().path(path.slice(0, -1));
            }
        });
        $urlRouterProvider.otherwise('/');
    })
    .name;