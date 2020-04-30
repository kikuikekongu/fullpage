$(function()
{
  var $iconMouse = $(".iconMouse");
  var fadeOutStr = "fadeOut";
  $('#fullpage').fullpage(
  {
    onLeave: function()
    {
      $iconMouse.addClass(fadeOutStr);
    },
    afterLoad: function()
    {
      let num = $.fn.fullpage.getActiveSection();
      let stopTime = 1200;
      if(num.index != 3)
      {
        if(num.index == 0) stopTime = 200;
        if(num.index == 1) stopTime = 600;
        setTimeout(function()
        {
          $iconMouse.removeClass(fadeOutStr);
        }, stopTime);
      }
    } 
  });
})