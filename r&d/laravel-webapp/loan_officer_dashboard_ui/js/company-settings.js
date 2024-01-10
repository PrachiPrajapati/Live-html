jQuery.noConflict();
jQuery(document).ready(function ($) {
    //jquery to bind the chart based on the tab viewed
    $('ul.all_reports .border-bottom-sec li a').each(function () {
        $(this).click(function () {
            localStorage.setItem('report-activeTab', $(this).attr('href'));
            if ($(this).attr('href') == '') {
                setTimeout(function () {
                    bindCustomFields();
                }, 1000);
            } else if ($(this).attr('href') == '') {
                setTimeout(function () {
                    bindCustomFields();
                }, 1000);
            } 
            //jquery to activate the tab which last visited
            $('ul.all_reports .border-bottom-sec li.nav-item a').removeClass('active');
            if (activeTab) {
                $('.tab-content .tab-pane').each(function () {
                    $(this).addClass('active');
                });
                    $(this).removeClass('active');
            }
        }); 
    });
});