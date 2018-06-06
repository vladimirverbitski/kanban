import 'angular';
import uiRouter from '@uirouter/angularjs';
import { InfoComponent } from './info.component';

export const InfoModule = angular
    .module('info', [
        uiRouter
    ])
    .component('info', InfoComponent)
    .config(($stateProvider, $urlRouterProvider) => {
        'ngInject';
        $stateProvider
            .state('info', {
                parent: 'app',
                url: 'info',
                component: 'info'
            });
        $urlRouterProvider.otherwise('/');
    })
    .name;