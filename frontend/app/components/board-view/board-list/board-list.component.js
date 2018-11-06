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
                accept: (sourceNodeScope, destNodesScope, destIndex) => {
                    return true;
                },
                dropped: (event) => {
                    let sourceModel = event.source.nodeScope.$modelValue.id;
                    const destModel = event.dest.nodesScope.$parent.$parent.$parent.category.id.toString();

                    this.changeCategory(sourceModel, destModel);
                },
                removed: (node) => {
                    return node;
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
                .then(() => {
                    this.catList.map(cat => {
                        cat.tasks = [];
                        this.taskList.map(task => {
                                if (cat.id.toString() === task.category) {
                                    cat.tasks = [...cat.tasks, task];
                                }
                            }
                        )
                    })
                });
        }

        addBoard() {
            this.catList = this.catList.filter(t => t.id);
            this.catList.push(new Category());
        }

        addTask(category) {
            this.catList.filter(cat => cat.tasks.map(t => t.id));
            this.catList.map(cat => cat.tasks.push(new Task(category)));
        }


        submitNewTask(task) {
            return this.boardHttpService.submitTask(task).then(
                () => {
                    this.boardService.loadTasks()
                        .then(
                            response => this.taskList = response
                        )
                        .then( () => this._initCats() )
                }
            );
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

        changeCategory(taskId, catId) {
            this.taskList.map(task => {
                if (task.id === taskId && task.category !== catId.toString()) {
                    task.category = catId;

                    return this.boardHttpService.updateTask(task, task.id).then(
                        () => {
                            this.boardService.loadTasks()
                                .then(
                                    response => this.taskList = response
                                )
                        }
                    );
                }
            });
        }

        removeTask(id) {
            return this.boardHttpService.removeTask(id).then(
                () => {
                    this.boardService.loadTasks()
                        .then(
                            response => this.taskList = response
                        )
                        .then( () => this._initCats() )
                }
            );
        }

        removeBoard(id) {
            return this.boardHttpService.removeBoard(id).then(
                () => {
                    this.boardService.loadCats()
                        .then(
                            response => this.catList = response
                        )
                }
            );
        }

    }
};