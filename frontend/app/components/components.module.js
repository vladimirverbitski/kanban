import {BlogModule} from './blog-view/blog.module';
import {HomeModule} from './home-view/home.module';
import {BoardModule} from './board-view/board.module';

export const ComponentsModule = angular
    .module('app.components', [
        BlogModule,
        BoardModule,
        HomeModule
    ])
    .name;