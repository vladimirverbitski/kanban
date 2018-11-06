import "angular";
import {BoardListComponent} from "./board-list.component";

export const BoardListModule = angular
    .module('board-list', [])
    .component('boardList', BoardListComponent)
    .name;
