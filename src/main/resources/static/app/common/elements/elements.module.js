import "angular";
import { RequiredDirective } from "./required.directive";

export const ElementsModule = angular
    .module('elements', [])
    .directive('required', RequiredDirective)
    .name;