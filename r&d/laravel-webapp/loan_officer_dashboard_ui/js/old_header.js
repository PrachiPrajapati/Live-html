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
  // $('.menu-collapsed').removeClass('d-none');
  // $('.sidebar-submenu').removeClass('d-none');
  // $('.submenu-icon').removeClass('d-none');
} else {
  //alert(1);
  if(collapsedMenu == 1) {
    $('#collapse-icon').removeClass('fa-angle-double-right');
    $('#sidebar-container').removeClass('sidebar-expanded');
    $('#collapse-icon').addClass('fa-angle-double-left');
    $('#sidebar-container').addClass('sidebar-collapsed');
    // $('.menu-collapsed').addClass('d-none');
    // $('.sidebar-submenu').addClass('d-none');
    // $('.submenu-icon').addClass('d-none');
  } else {
    $('#collapse-icon').removeClass('fa-angle-double-left');
    $('#sidebar-container').removeClass('sidebar-collapsed');
    $('#collapse-icon').addClass('fa-angle-double-right');
    $('#sidebar-container').addClass('sidebar-expanded');
    // $('.menu-collapsed').removeClass('d-none');
    // $('.sidebar-submenu').removeClass('d-none');
    // $('.submenu-icon').removeClass('d-none');
  }
}


// Collapse click
$('[data-toggle=sidebar-colapse]').click(function() {
  SidebarCollapse();
});

function SidebarCollapse () {
  // $('.menu-collapsed').toggleClass('d-none');
  // $('.sidebar-submenu').toggleClass('d-none');
  // $('.submenu-icon').toggleClass('d-none');
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
});