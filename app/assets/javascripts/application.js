// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//= require jquery
//= require jquery_ujs
//= require jquery
$(document).ready(function(){
  $('#menu-toggle').click( function()
        {
            $('#menu-toggle').toggleClass('active');
            $('#navhide').toggleClass('active');

        })
  // User role change
  $('#user_role').change(function(){
  let  user_role = $('#user_role').val();
  if (user_role == "Admin")
  {
    $('#div_user_school_code').addClass('hide');
    $('#div_user_identity').addClass('hide');
    $('#div_user_standard').addClass('hide');
    $('#div_user_section').addClass('hide');
  }
  else if(user_role == "Teacher")
  {
  $('#div_user_school_code').removeClass('hide');
  $('#div_user_identity').addClass('hide');
  $('#div_user_standard').addClass('hide');
  $('#div_user_section').addClass('hide');
  }
  else
  {
    $('#div_user_school_code').removeClass('hide');
    $('#div_user_identity').removeClass('hide');
    $('#div_user_standard').removeClass('hide');
    $('#div_user_section').removeClass('hide');    
  }

})
});
