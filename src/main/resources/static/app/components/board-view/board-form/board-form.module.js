import "angular";
import {BoardFormComponent} from "./board-form.component";

export const BoardFormModule = angular
    .module('board-form', [])
    .component('boardForm', BoardFormComponent)
    .name;
