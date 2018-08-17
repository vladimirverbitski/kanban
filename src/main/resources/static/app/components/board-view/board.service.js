export class BoardService {
    constructor(BoardHttpService) {
        'ngInject';
        this.boardHttpService = BoardHttpService;
        this._categoryList = [];
        this._taskList = [];
        this._selectedFields = [];
    }

    loadCats() {
        return this.boardHttpService.getCats()
            .then(response => this._categoryList = response);
    }

    get categoryList() {
        return this._categoryList;
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

    submitNewTask() {
        this.boardHttpService.submitBoard(this.boardModel.task.request);
    }
}