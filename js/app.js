$(function() {

  var userFeed = new Instafeed({
    get: 'user',
    userId: '1709131919',
    accessToken: '1709131919.1677ed0.b21f4c41cad74087b1a87248b82c81e2',
    clientId: '	044e8365c1cc4837aa910a6a4d7f05dd',
    target: 'instafeed',
    links: true,
    limit: 8,
    sortBy: 'most-recent',
    resolution: 'standard_resolution',
    template: '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3"><div class="photo-box"><div class="image-wrap"><a href="{{link}}"><img src="{{image}}"></a><div class="likes">{{likes}} Likes</div></div><div class="description">{{caption}}<div class="date">{{model.date}}</div></div></div></div>'

  });
userFeed.run();

});
