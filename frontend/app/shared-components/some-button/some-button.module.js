import 'angular';
import {someButtonComponent} from "./some-button.component";

export const SomeButtonModule = angular
    .module('SomeButton', [])
    .component('someButton', someButtonComponent)
    .name;