export const HeaderComponent = {
    template: `
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="/">Dashboard</a>
        </div>
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
                <li ui-sref-active="active"><a ui-sref="info">Info</a></li>
                <li ui-sref-active="active"><a ui-sref="board">Boards</a></li>
                <li ui-sref-active="active"><a ui-sref="blog">Blog</a></li>
            </ul>
        </div>
      </div>
    </nav>
  `
};