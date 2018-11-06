import 'angular';
import uiRouter from '@uirouter/angularjs';
import {HomeComponent} from './home.component';

export const HomeModule = angular
    .module('home', [
        uiRouter
    ])
    .component('home', HomeComponent)
    .config(($stateProvider, $urlRouterProvider) => {
        'ngInject';
        $stateProvider
            .state('home', {
                parent: 'app',
                url: 'home',
                component: 'home'
            });
        $urlRouterProvider.otherwise('/');
    })
    .name;