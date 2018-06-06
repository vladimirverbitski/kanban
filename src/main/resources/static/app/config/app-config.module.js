import "angular";
import uiRouter from  '@uirouter/angularjs';
import {RouterConfig} from "./router.config";

export const AppConfigModule = angular
    .module('config', [
        uiRouter,
        RouterConfig
    ])
    .config((cfpLoadingBarProvider, $qProvider) => {
        "ngInject";
        $qProvider.errorOnUnhandledRejections(false);
        cfpLoadingBarProvider.includeSpinner = false;
    })
    .name;