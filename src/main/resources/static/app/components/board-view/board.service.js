export class BoardService {
    constructor(BoardHttpService) {
        'ngInject';
        this.boardHttpService = BoardHttpService;
        this._taskList = [];
        this._selectedFields = [];
    }

    loadTasks() {
        return this.boardHttpService.getTasks()
            .then(response => this._taskList = response);
    }

    get taskList() {
        return this._taskList;
    }

    get selectedField() {
        return this._selectedFields;
    }

    removeSelectedField(field) {
        field.added = false;
        return this._selectedFields.splice(this._selectedFields.map(f => f.code).indexOf(field.code), 1);
    }
}