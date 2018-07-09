import 'angular';
import uiRouter from '@uirouter/angularjs';
import {BoardComponent} from './board.component';
import {BoardService} from "./board.service";
import {BoardHttpService} from "./board.http.service";
import {BoardListModule} from "./board-list/board-list.module"

export const BoardModule = angular
    .module('board', [
        uiRouter,
        BoardListModule
    ])
    .component('board', BoardComponent)
    .service('BoardService', BoardService)
    .service('BoardHttpService', BoardHttpService)
    .config($stateProvider => {
        'ngInject';
        $stateProvider
            .state('board', {
                parent: 'app',
                url: 'board',
                component: 'board'
            });
    })
    .name;