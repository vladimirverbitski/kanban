import 'angular';

export class BoardHttpService {

    constructor($http) {
        "ngInject";
        this.$http = $http;
    }

    postCategory(request) {
        return this.$http.post('/api/categories', request)
            .then(response => response.data);
    }

    getCats() {
        return this.$http.get('/api/categories')
            .then(response => response.data);
    }

    getTasks() {
        return this.$http.get('/api/tasks')
            .then(response => response.data);
    }

    submitTask(request, taskId) {
        if (taskId == undefined) {
            return this.$http
                .post('/api/tasks', request)
                .then(response => response.data)
        }
    }
}