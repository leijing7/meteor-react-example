FlowRouter.route('/', {
  action () {
    ReactLayout.render(Layout);
  }
});

FlowRouter.route('/ar', {
  action (params, queryParams) {
    var a = Object.keys(queryParams)[0];
    var r = queryParams[a];
    var ar = {
      'author': a,
      'repo': r
    };
    ReactLayout.render(Layout, {
      content: <Content ar={ar}/>
    });
  }
});

FlowRouter.notFound = {
  action () {
    ReactLayout.render(Layout, {
      content: <NotFoundModal/>
    });
  }
};
