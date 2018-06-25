import 'angular';

export class BoardHttpService {

    constructor($http) {
        "ngInject";
        this.$http = $http;
    }

    getCats() {
        return this.$http.get('/api/categories')
            .then(response => response.data);
    }

    getTasks() {
        return this.$http.get('/api/tasks')
            .then(response => response.data);
    }

}