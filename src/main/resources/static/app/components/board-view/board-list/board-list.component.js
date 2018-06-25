import template from "./board-list.html";

export const BoardListComponent = {
    template,
    controller: class BoardListController {

        constructor(BoardService) {
            "ngInject";
            this.boardService = BoardService;
            this.boardService.loadTasks();
            this.boardService.loadCats();
        }

        $onInit() {

        }

    }
};