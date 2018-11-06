export const AppComponent = {
    template: `
        <header id="left-panel" class="left-panel"></header>
        <div id="right-panel" class="right-panel">
            <ui-view class="main-content"></ui-view>
            <footer class="site-footer"></footer>
        </div>
    `
};