import template from './board.html';

export const BoardComponent = {
    template,
    controller: class BoardComponent {
        constructor(BoardService) {
            'ngInject';
            this.boardService = BoardService;
        }
    }
};