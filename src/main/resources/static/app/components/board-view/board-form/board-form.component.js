import template from "./board-form.html";

export const BoardFormComponent = {
    bindings: {
        tasks: '<',
    },
    controllerAs: 'ctrl',
    template,
    controller: class BoardFormController {
        constructor() {
            'ngInject';
        }

        $onInit() {
        }

        createTask() {

        }
    }
};