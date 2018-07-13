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

        openTaskForm(category) {
            this.isVisible = category;
        }

        addTask(category) {
            this.isVisible = true;
            this.taskList.push(new Task(category));
        }

        submitNewTask(task, form) {
            if(form.$valid) {
                return this.boardHttpService.submitTask(task).then(
                    this.boardService.loadTasks()
                        .then(
                            response => this.taskList = response
                        )
                );
            }
        }

    }
};