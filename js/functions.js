$(document).ready(function(){
  darkMode();
  projLink();
});

function darkMode(){
  $('#darkModeBtn').click(function(){
    $('body').toggleClass('dark');
    $('.dropCap').toggleClass('dark');
    $('a').toggleClass('dark');
    $('.codeTag').toggleClass('dark');
    $('.workCard1').toggleClass('dark');
    $('.workCard2').toggleClass('dark');
    $('.workCard3').toggleClass('dark');
    if($('#darkModeBtnImg').attr('class') == 'light'){
      $('#darkModeBtnImg').attr('src', 'images/light-mode.svg');
      $('#darkModeBtnImg').attr('class', 'dark');
    }else($('#darkModeBtnImg').attr('src', 'images/dark-mode.svg'), $('#darkModeBtnImg').attr('class', 'light'));

    if($('#gitLogo').attr('class') == 'light'){
      $('#gitLogo').attr('src', 'images/github-dark.png');
      $('#gitLogo').attr('class', 'dark');
    }else($('#gitLogo').attr('src', 'images/github-light.png'), $('#gitLogo').attr('class', 'light'));

    if($('#linkLogo').attr('class') == 'light'){
      $('#linkLogo').attr('src', 'images/ln-dark.png');
      $('#linkLogo').attr('class', 'dark');
    }else($('#linkLogo').attr('src', 'images/ln-light.png'), $('#linkLogo').attr('class', 'light'));

    if($('#twitterLogo').attr('class') == 'light'){
      $('#twitterLogo').attr('src', 'images/twitter-dark.png');
      $('#twitterLogo').attr('class', 'dark');
    }else($('#twitterLogo').attr('src', 'images/twitter-light.png'), $('#twitterLogo').attr('class', 'light'));

    if($('#emailLogo').attr('class') == 'light'){
      $('#emailLogo').attr('src', 'images/email-light.svg');
      $('#emailLogo').attr('class', 'dark');
    }else($('#emailLogo').attr('src', 'images/email-dark.svg'), $('#emailLogo').attr('class', 'light'));

    if($('#backBtn').attr('class') == 'light'){
      $('#backBtn').attr('src', 'images/left-arrow-dark.svg');
      $('#backBtn').attr('class', 'dark');
    }else($('#backBtn').attr('src', 'images/left-arrow-light.svg'), $('#backBtn').attr('class', 'light'));
  })
}

function projLink(){
  $('#bookLink').css('cursor', 'pointer');
  $('#bookLink').mouseover(function(){
    $('#bookLink').addClass('animate');
  });
  $('#bookLink').mouseout(function(){
    $('#bookLink').removeClass('animate');
  })
}


