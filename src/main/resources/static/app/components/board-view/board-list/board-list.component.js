import template from "./board-list.html";
import {Task} from "../task";
import {Category} from "../category";

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
            this.boardMenu = false;
            this.treeOptions = {
                accept: (sourceNode, destNodes, destIndex) => {
                    return true;
                }
            };
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
                .then(response => this.catList = response)
                .then(
                    this.taskList.map(task => {
                        console.log(task.category);
                    })
                );
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

        addBoard() {
            this.catList = this.catList.filter(t => t.id);
            this.catList.push(new Category());
        }

        submitNewBoard(board) {
            return this.boardHttpService.submitBoard(board).then(
                () => {
                    this.boardService.loadCats()
                        .then(
                            response => this.catList = response
                        )
                }
            );
        }

        sortTask(catList) {
            console.log(catList.map(cat => cat));
        }

    }
};