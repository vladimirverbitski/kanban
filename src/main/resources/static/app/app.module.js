import 'angular';
import uiRouter from '@uirouter/angularjs';
import "angular-ui-tree";
import {AppConfigModule} from "./config/app-config.module";
import {AppComponent} from "./app.component";
import {ComponentsModule} from "./components/components.module";
import {CommonModule} from "./common/common.module";
import {SharedComponentsModule} from "./shared-components/shared-components.module";

export const AppModule = angular
    .module('app', [
        'ui.tree',
        AppConfigModule,
        uiRouter,
        ComponentsModule,
        CommonModule,
        SharedComponentsModule
    ])
    .component('app', AppComponent)
    .config(($stateProvider, $locationProvider) => {
        'ngInject';

        $locationProvider.html5Mode(true);
        $stateProvider
        .state('app', {
            url: '/',
            component: 'app',
            redirectTo: 'info'
        });
    })
    .name;

