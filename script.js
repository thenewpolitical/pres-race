(function($) {
    $(document).ready(function() {
    
        $('.test')
            .sprite({fps: 9, no_of_frames: 5, play_frames: 30});
            //.active();
            /*.spRandom({
		          top: 70,
		          left: 100,
		          right: 200,
		          bottom: 340,
		          speed: 4000,
		          pause: 3000
		      });*/
        
        window.actions = {
            run_slowly_forwards: function() {
                $('.test')
                    .fps(10)
                    .spState(1);
            }
        }
        
    });
});

$(function() {
  var moveLeft = 20;
  var moveUp = 400;

  $('div.test').hover(function(e) {
    $('div.test-info').show();
  }, function() {
    $('div.test-info').hide();
  });

  $('div.test').mousemove(function(e) {
    $("div.test-info").css('top', e.pageY - moveUp).css('left', e.pageX + moveLeft);
  });

});
