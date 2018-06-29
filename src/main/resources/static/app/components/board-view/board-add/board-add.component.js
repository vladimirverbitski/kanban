import template from "./board-add.html";

export const BoardAddComponent = {
    bindings: {
        tasks: '<',
    },
    controllerAs: 'ctrl',
    template,
    controller: class BoardAddController {
        constructor() {
            'ngInject';
        }

        $onInit() {
        }

        createTask() {

        }
    }
};