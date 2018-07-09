export class BoardModel {

    _task;

    init(task) {
        this._task = task;
    }

    constructor() {
        'ngInject'
    }

    get task() {
        return this._task;
    }

}