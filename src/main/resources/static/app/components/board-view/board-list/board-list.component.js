import template from "./board-list.html";
import {Task} from "../task";

export const BoardListComponent = {
    template,
    controller: class BoardListController {

        constructor(BoardService, BoardHttpService, BoardModel) {
            "ngInject";
            this.boardService = BoardService;
            this.boardHttpService = BoardHttpService;
            this.boardModel = BoardModel;
            this.taskList = [];
            this.catList = [];
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

        addTask(category) {
            this.taskList = this.taskList.filter(t => t.id);
            this.taskList.push(new Task(category));
        }

        submitNewTask(task) {
            return this.boardHttpService.submitTask(task).then(
                () => {
                    this.boardService.loadTasks()
                        .then(
                            response => this.taskList = response
                        )
                }
            );
        }

    }
};