import 'angular';
import uiRouter from '@uirouter/angularjs';
import {BlogComponent} from './blog.component';

export const BlogModule = angular
    .module('blog', [
        uiRouter
    ])
    .component('blog', BlogComponent)
    .config(($stateProvider, $urlRouterProvider) => {
        'ngInject';
        $stateProvider
            .state('blog', {
                parent: 'app',
                url: 'blog',
                component: 'blog'
            });
        $urlRouterProvider.otherwise('/');
    })
    .name;