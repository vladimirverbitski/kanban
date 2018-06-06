import 'angular';
import uiRouter from '@uirouter/angularjs';
import {BlogComponent} from './blog.component';

export const BlogModule = angular
    .module('blog', [
        uiRouter
    ])
    .component('blog', BlogComponent)
    .config(($stateProvider, $urlRouterProvider, $locationProvider) => {
        'ngInject';
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
        $stateProvider
            .state('blog', {
                parent: 'app',
                url: 'blog',
                component: 'blog'
            });
        $urlRouterProvider.otherwise('/');
    })
    .name;