var $messages = $('.messages-content'),
    d, h, m,
    i = 0;
var counter = 0;

$(window).load(function() {
  $messages.mCustomScrollbar();
  setTimeout(function() {
    fakeMessage();
  }, 100);
});


function updateScrollbar() {
  $messages.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
    scrollInertia: 10,
    timeout: 0
  });
}

function setDate(){
  d = new Date()
  if (m != d.getMinutes()) {
    m = d.getMinutes();
    // $('<div class="timestamp">' + d.getHours() + ':' + m + '</div>').appendTo($('.message:last'));
    // $('<div class="checkmark-sent-delivered">&check;</div>').appendTo($('.message:last'));
    // $('<div class="checkmark-read">&check;</div>').appendTo($('.message:last'));
  }
}

function insertMessage() {
  msg = $('.message-input').val();
  if ($.trim(msg) == '') {
    return false;
  }
  $('<div class="message message-personal">' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
  setDate();
  $('.message-input').val(null);
  updateScrollbar();
  setTimeout(function() {
    fakeMessage();
  }, 1000 + (Math.random() * 20) * 100);
}

$('.message-submit').click(function() {
  insertMessage();
});

$('input').on('focus', function(e) {
    // e.preventDefault(); e.stopPropagation();
    window.scrollTo(0,0); //the second 0 marks the Y scroll pos. Setting this to i.e. 100 will push the screen up by 100px.
});

$(window).on('keydown', function(e) {
  if (e.which == 13) {
    insertMessage();
    return false;
  }
})
//generate random link with variables inser into below
var linkURL = ["../level2/index.html", "../level5/index.html", "../level6/index.html", "../level8/index.html", "../level9/index.html", "../end/index.html", "#"];
var Fake = [
  'Hi there. How may I help you today?',
  // '<div class="loading"></div>'
  'Sorry, I\'m not sure I understood that. Could you possibly rephrase it?',
  'Sorry, I still don\'t understand. Could you try again?',
  'Okay. I think I know what might help. Check back with me in a minute, I\'m going to look for something.',
  'Not so fast.',
  'Please wait.',
  'Hold on, still looking.',
  'Just a moment. I think I almost found it.',
  'Please bear with me.',
  'Just a few more minutes.',
  'Wow, you\'re awfully impatient aren\'t you.',
  '<a href="'+linkURL[Math.floor(Math.random()*7)]+'">Continue</a>'
]


function fakeMessage() {
  if ($('.message-input').val() != '') {
    return false;
  }
  if (i >= 4 && i <= 9) {
    $('<div class="message loading new"><figure class="avatar"><img src="./ben.png"/></figure><span></span></div>').appendTo($('.mCSB_container'));
    updateScrollbar();
    setTimeout(function() {
      $('.message.loading').remove();
      var ran = Math.round((Math.random() * 6) + 4);
      $('<div class="message new"><figure class="avatar"><img src="./ben.png"/></figure>'+Fake[ran]+'</div>').appendTo($('.mCSB_container')).addClass('new');
      setDate();
      updateScrollbar();
      counter++;
    }, 1000 + (Math.random() * 20) * 100);
    if (counter === 20){i=10}
  } else {
    $('<div class="message loading new"><figure class="avatar"><img src="./ben.png"/></figure><span></span></div>').appendTo($('.mCSB_container'));
    updateScrollbar();
    setTimeout(function() {
      $('.message.loading').remove();
      $('<div class="message new"><figure class="avatar"><img src="./ben.png"/></figure>'+Fake[i]+'</div>').appendTo($('.mCSB_container')).addClass('new');
      setDate();
      updateScrollbar();
      i++;

    }, 1000 + (Math.random() * 20) * 100);
  }
}

$('.button').click(function(){
  $('.menu .items span').toggleClass('active');
   $('.menu .button').toggleClass('active');
});
