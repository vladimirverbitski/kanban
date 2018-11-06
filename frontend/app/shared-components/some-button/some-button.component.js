import template from './some-button.html';

export const someButtonComponent = {
    template,
    controller: class SomeButton {

        constructor() {
            this.buttonText = "Press me!";
        }

        $onInit() {

        }

        helloWorld() {
            this.buttonText = "Thank you!";
        }
    }
};