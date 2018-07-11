$('body').resizabletext({
   minimum   : 500,          // minimum window resize
   maximum   : 1200,         // maximum window resize
   minFont   : 12,           // minimum font to display
   maxFont   : 40,           // maximum font to display
   fontRatio : 30
});
    $(window).bind('resize',function(){                  // this section of the code refreshes the window everytime it's resized.
     window.location.href = window.location.href;        // You will need to keep this section.
});
