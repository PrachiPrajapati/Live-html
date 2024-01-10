jQuery.noConflict();
jQuery(document).ready(function ($) {
  $('#sidebar-container').fadeIn('slow');
  $('.expanded_menu').fadeIn('slow');
// Hide submenus
$('#body-row .collapse').collapse('hide');
  //localStorage.removeItem("collapsedMenu");
  var collapsedMenu = localStorage.getItem("collapsedMenu");
  console.log(collapsedMenu);



// Collapse/Expand icon
if(collapsedMenu == null) {
  $('#collapse-icon').addClass('fa-angle-double-right');
  $('#sidebar-container').addClass('sidebar-expanded');
  $('.menu-collapsed').removeClass('d-none');
  $('.sidebar-submenu').removeClass('d-none');
  $('.submenu-icon').removeClass('d-none');
} else {
  //alert(1);
  if(collapsedMenu == 1) {
    $('#collapse-icon').removeClass('fa-angle-double-right');
    $('#sidebar-container').removeClass('sidebar-expanded');
    $('#collapse-icon').addClass('fa-angle-double-left');
    $('#sidebar-container').addClass('sidebar-collapsed');
    $('.menu-collapsed').addClass('d-none');
    $('.sidebar-submenu').addClass('d-none');
    $('.submenu-icon').addClass('d-none');
  } else {
    $('#collapse-icon').removeClass('fa-angle-double-left');
    $('#sidebar-container').removeClass('sidebar-collapsed');
    $('#collapse-icon').addClass('fa-angle-double-right');
    $('#sidebar-container').addClass('sidebar-expanded');
    $('.menu-collapsed').removeClass('d-none');
    $('.sidebar-submenu').removeClass('d-none');
    $('.submenu-icon').removeClass('d-none');
  }
}


$('#sidebar-container').mouseover(function(){
  if(collapsedMenu == 1) {
      //alert(12);
      $('#collapse-icon').removeClass('fa-angle-double-left');
      $(this).removeClass('sidebar-collapsed');
      $(this).addClass('hover-effect');
      $('#collapse-icon').addClass('fa-angle-double-right');
      $('#sidebar-container').addClass('sidebar-expanded');
      $('.menu-collapsed').removeClass('d-none');
      $('.sidebar-submenu').removeClass('d-none');
      $('.submenu-icon').removeClass('d-none');
      $('svg').css('margin-right','10px');
    }
  });
$('#sidebar-container').mouseout(function(){
  if(collapsedMenu == 1) {
    $('#collapse-icon').removeClass('fa-angle-double-right');
    $(this).removeClass('sidebar-expanded');
    $(this).removeClass('hover-effect');
    $('#collapse-icon').addClass('fa-angle-double-left');
    $('#sidebar-container').addClass('sidebar-collapsed');
    $('.menu-collapsed').addClass('d-none');
    $('.sidebar-submenu').addClass('d-none');
    $('.submenu-icon').addClass('d-none');
    $('svg').css('margin-right','0px');
  }
});

// Collapse click
$('[data-toggle=sidebar-colapse]').click(function() {
  SidebarCollapse();
});

function SidebarCollapse () {
  $('.menu-collapsed').toggleClass('d-none');
  $('.sidebar-submenu').toggleClass('d-none');
  $('.submenu-icon').toggleClass('d-none');
  $('#sidebar-container').toggleClass('sidebar-expanded sidebar-collapsed');

    // Collapse/Expand icon
    $('#collapse-icon').toggleClass('fa-angle-double-left fa-angle-double-right');
    if($('#collapse-icon').hasClass('fa-angle-double-left')) {
      var collapsedMenu = "1";
      localStorage.setItem("collapsedMenu", collapsedMenu);
    } else {
      var collapsedMenu = "0";
      localStorage.setItem("collapsedMenu", collapsedMenu);
    }
  }
  if ($('.integration_section').is(':visible')) {
    $('.integration_section').toggleClass('integration-expanded integration-collapsed');
  }
});


