import {SomeButtonModule} from "./some-button/some-button.module";

export const SharedComponentsModule = angular
    .module('SharedComponents', [
        SomeButtonModule
    ])
    .name;