import 'angular';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { ElementsModule } from "./elements/elements.module";

export const CommonModule = angular
    .module('app.common', [
        HeaderModule,
        FooterModule,
        ElementsModule
    ])
    .name;