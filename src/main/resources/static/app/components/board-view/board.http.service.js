import 'angular';

export class BoardHttpService {

    constructor($http) {
        "ngInject";
        this.$http = $http;
    }

    // getTasks() {
    //     return this.$http.get('/data/tasks.json')
    //         .then(response => response.data);
    // }

    getTasks() {
        return this.$http.get('/api/tasks')
            .then(response => response.data);
    }

}