import "angular";
import {BoardAddComponent} from "./board-add.component";

export const BoardAddModule = angular
    .module('board-form', [])
    .component('boardForm', BoardAddComponent)
    .name;
