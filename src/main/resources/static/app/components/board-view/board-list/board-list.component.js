import template from "./board-list.html";

export const BoardListComponent = {
    template,
    controller: class BoardListController {

        constructor(BoardService) {
            "ngInject";
            this.boardService = BoardService;
            this.taskList = [];
            this.catList = [];
            this.isVisible = false;
        }

        $onInit() {
            this._initTasks();
            this._initCats();
        }

        _initTasks() {
            this.boardService.loadTasks()
                .then(response => this.taskList = response)
        }

        _initCats() {
            return this.boardService.loadCats()
                .then(response => this.catList = response);
        }

        openTaskForm() {
            this.isVisible = this.isVisible ? false : true;
        }

    }
};