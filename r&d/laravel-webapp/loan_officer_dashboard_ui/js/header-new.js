function searchBox() {
  var x = document.getElementById('text').value;
  var y = document.getElementById('keyword_searcher');
  if (x.length > 0) {
    y.style.display = 'block';
  } else {
    y.style.display = 'none';
  }
}

jQuery.noConflict();
jQuery(document).ready(function ($) {
  //jquery to bind the chart based on the tab viewed
  $('ul.all_reports .border-bottom-sec li a').each(function () {
    $(this).click(function () {
        //jquery to activate the tab which last visited
        $('ul.all_reports li.nav-item a').removeClass('active');
        if (activeTab) {
            $('.tab-content .tab-pane').each(function () {
                $(this).addClass('active');
            });
                $(this).removeClass('active');
        }
    }); 
  });
  $('.create-account-btn .blue_btn').click(function () {    
    $('.add-account-blk').toggleClass('show')
  });
  $('.dialer-sec').click(function () {
    $('.dialer-blk').show();
  });
  $('.dialer_close').click(function () {
    $('.dialer-blk').hide();
  });
  $('ul.contact-list li a').click(function () {    
    $('.contact-list-sec').addClass('show')
  });
  $('.selected-contact button').click(function () {    
    $('.contact-list-sec').removeClass('show')
  });
  document.getElementById("text").addEventListener("onkeyup", function () {
    searchBox();
  });
    // Users can skip the loading process if they want.
  $('.skip').click(function() {
    $('.overlay, body').addClass('loaded');
  })
  
  // Will wait for everything on the page to load.
  $(window).bind('load', function() {
    $('.overlay, body').addClass('loaded');
    setTimeout(function() {
      $('.overlay').css({'display':'none'})
    }, 2000)
  });
  
  // Will remove overlay after 1min for users cannnot load properly.
  setTimeout(function() {
    $('.overlay, body').addClass('loaded');
  }, 60000);
var is_search = "";
$('.cross_icon').click(function() {
    is_search = false;
  $('.search_contact').removeClass('active'); 
  $('#text').val('');
  $('#keyword_searcher').hide();
  $('.active_search').show();
  $('.disable_search').hide();
});
$('.search_hover').click(function() {
  if(is_search == true){
    is_search = false;
    $('.search_contact').removeClass('active'); 
    $('#text').val('');
    $('#keyword_searcher').hide();
    $('.active_search').show();
    $('.disable_search').hide();
    //is_search = true;
  }
  else{
    $('.disable_search').show();
    $('.active_search').hide();
    $('.search_contact').show();
    $('.search_contact').addClass('active');
    is_search = true;
  }
});


$(window).scroll(function(){
  if ($(this).scrollTop() > 41) {
     $('#body-row').addClass('newClass');
  } else {
     $('#body-row').removeClass('newClass');
  }
});
  $('#sidebar-container').fadeIn('slow');
  $('.expanded_menu').fadeIn('slow');
  $('.expanded_menu_collapse').fadeIn('slow');
// Hide submenus
$('#body-row .collapse').collapse('hide');
  //localStorage.removeItem("collapsedMenu");
  collapsedMenu = localStorage.getItem("collapsedMenu");
  console.log(collapsedMenu);



// Collapse/Expand icon
  console.log(collapsedMenu);
if(collapsedMenu == null) {
  $('.main_div').addClass('expanded_menu_collapse');
  $('.main_div').removeClass('expanded_menu');
  $('.integration_section').toggleClass('integration-expanded integration-collapsed');
  $('#collapse-icon').removeClass('fa-angle-double-right');
  $('#sidebar-container').removeClass('sidebar-expanded');
  $('#collapse-icon').addClass('fa-angle-double-left');
  $('#sidebar-container').addClass('sidebar-collapsed');
  $('.menu-collapsed').addClass('d-none');
  $('.sidebar-submenu').addClass('d-none');
  $('.submenu-icon').addClass('d-none');
  $('.navbar').removeClass('show_menu');
} else {
  //alert(1);
  if(collapsedMenu == 1) {
    //collapsed
    $('.main_div').addClass('expanded_menu_collapse');
    $('.main_div').removeClass('expanded_menu');
    $('.integration_section').toggleClass('integration-expanded integration-collapsed');
    $('#collapse-icon').removeClass('fa-angle-double-right');
    $('#sidebar-container').removeClass('sidebar-expanded');
    $('#collapse-icon').addClass('fa-angle-double-left');
    $('#sidebar-container').addClass('sidebar-collapsed');
    $('.menu-collapsed').addClass('d-none');
    $('.sidebar-submenu').addClass('d-none');
    $('.submenu-icon').addClass('d-none');
    $('.navbar').removeClass('show_menu');
  } else {
    //expanded
    $('.main_div').addClass('expanded_menu');
    $('.main_div').removeClass('expanded_menu_collapse');
    $('#collapse-icon').removeClass('fa-angle-double-left');
    $('#sidebar-container').removeClass('sidebar-collapsed');
    $('#collapse-icon').addClass('fa-angle-double-right');
    $('#sidebar-container').addClass('sidebar-expanded');
    $('#sidebar-container').removeClass('sidebar-collapsed');
    $('.menu-collapsed').removeClass('d-none');
    $('.sidebar-submenu').removeClass('d-none');
    $('.submenu-icon').removeClass('d-none');
    $('.navbar').addClass('show_menu');
  }
}

  // $('#sidebar-container').mouseover(function(){
  //   if(collapsedMenu == 1 || collapsedMenu == null) {
  //     $('#collapse-icon').removeClass('fa-angle-double-left');
  //     $(this).removeClass('sidebar-collapsed');
  //     $(this).addClass('hover-effect');
  //     $('#collapse-icon').addClass('fa-angle-double-right');
  //     $('#sidebar-container').addClass('sidebar-expanded');
  //     $('.menu-collapsed').removeClass('d-none');
  //     $('.sidebar-submenu').removeClass('d-none');
  //     $('.submenu-icon').removeClass('d-none');
  //     $('.left_menu svg').css('margin-right','10px');
  //     //$('.expanded_menu').css('margin-left', '68px');
  //     $('.main_div').addClass('expanded_menu_collapse');
  //   }
  // });
  // $('#sidebar-container').mouseout(function(){
  //   if(collapsedMenu == 1 || collapsedMenu == null) {
  //     $('#collapse-icon').removeClass('fa-angle-double-right');
  //     $(this).removeClass('sidebar-expanded');
  //     //$(this).removeClass('hover-effect');
  //     $('#collapse-icon').addClass('fa-angle-double-left');
  //     $('#sidebar-container').addClass('sidebar-collapsed');
  //     $('.menu-collapsed').addClass('d-none');
  //     $('.sidebar-submenu').addClass('d-none');
  //     $('.submenu-icon').addClass('d-none');
  //     $('.left_menu svg').css('margin-right','0px');
  //     //$('.expanded_menu').css('margin-left', '0px');
  //   }
  // });


// Collapse click
$('[data-toggle=sidebar-colapse]').click(function() {
  SidebarCollapse();
});

function SidebarCollapse () {
  $('.menu-collapsed').toggleClass('d-none');
  $('.sidebar-submenu').toggleClass('d-none');
  $('.submenu-icon').toggleClass('d-none');
  $('#sidebar-container').toggleClass('sidebar-expanded sidebar-collapsed');

  if ($('.integration_section').is(':visible')) {
    $('.integration_section').toggleClass('integration-expanded integration-collapsed');
  }
  
    // Collapse/Expand icon
    $('#collapse-icon').toggleClass('fa-angle-double-left fa-angle-double-right');
    if($('#collapse-icon').hasClass('fa-angle-double-left')) {
      //collapsed menu
      $('.main_div').removeClass('expanded_menu');
      $('.main_div').addClass('expanded_menu_collapse');
      $('.navbar').removeClass('show_menu');
      var collapsed = "1";
      localStorage.setItem("collapsedMenu", collapsed);
      collapsedMenu = localStorage.getItem("collapsedMenu");
      $('.accordian-menu-item').removeClass('show-submenu');
      $('.submenu-list').removeClass('custom-arrow');
      $('.add-account-blk').removeClass('show')
    } else {
      //expanded menu
      $('.main_div').addClass('expanded_menu');
      $('.main_div').removeClass('expanded_menu_collapse');
      $('.navbar').addClass('show_menu');
      var collapsed = "0";
      localStorage.setItem("collapsedMenu", collapsed);
      collapsedMenu = localStorage.getItem("collapsedMenu");
      $('#sidebar-container').removeClass('hover-effect');
      $('.left_menu svg').css('margin-right','10px');
    }
  }

  //New Menu Accordian
  $(".new-menu-expand .submenu-icon").each(function () {  
    $(this).click(function(){
      $(this).next('.accordian-menu-item').toggleClass('show-submenu');
      $(this).parent('.submenu-list').toggleClass('custom-arrow');
    });
  });
});