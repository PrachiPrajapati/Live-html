jQuery.noConflict();
jQuery(document).ready(function ($) {
    //jquery to bind the chart based on the tab viewed
    $('ul.all_reports li a').each(function () {
        $(this).click(function () {
            localStorage.setItem('report-activeTab', $(this).attr('href'));
            if ($(this).attr('href') == '#commission-schedule-tab') {
                setTimeout(function () {
                    bindCommision();
                }, 1000);
            } else if ($(this).attr('href') == '#commission-report-tab') {
                setTimeout(function () {
                    bindCommision();
                }, 1000);
            } 
        });
    });
    //jquery to activate the tab which last visited
    var activeTab = localStorage.getItem('report-activeTab');
    if (activeTab) {
        $('ul.all_reports li.nav-item a').removeClass('active');
        $('.tab-content .tab-pane').each(function () {
            $(this).removeClass('active');
        });
        $('ul.all_reports li.nav-item a[href="' + activeTab + '"]').addClass('active');
        $(activeTab).addClass('active');
    }
    //jquery to clear the search filter
    $('.btn_clear_filter').each(function () {
        $(this).click(function () {
            window.location.reload();
        });
    });
    bindCommision();
    function bindCommision() {
        if ($('#commision-sec').is(':visible')) {
            //jQuery for initializing lead source dropdown
            $('.dropdown').dropdown({
                label: {
                    duration: 0,
                },
                debug: true,
                performance: true,
            });
            //jQuery for initializing commision archived report data table
            $('#commission_archived_reports').DataTable({
                //"scrollY": "100%",
                "bDestroy": true,
                // "scrollX":        "100%",
                // "height": "350px;"
                "dom": 'rt<"bottom right"ip><"clear">',
                "lengthMenu": [[50]],
                "pageLength": 25,
                "scrollCollapse": true,
                "createdRow": function (row, data, dataIndex) {
                    //$(row).addClass('hand-pointer company');
                    $(row).click(function () {
                        var selected = $(row).hasClass("highlight");
                        $("table.dataTable tbody tr").removeClass("highlight");
                        if (!selected)
                            $(row).addClass("highlight");
                    });
                },
                language: {
                    paginate: {
                        next: '<img src="../svg/loanofficer/dashboard/right_arrow.png">',
                        previous: '<img src="../svg/loanofficer/dashboard/left_arrow.png">'
                    }
                },
                "infoCallback": function (settings, start, end, max, total, pre) {
                    return "Showing " + start + " - " + end + " of " + total;
                },
                "paging": false,
                "info": false,
                // "pagingType": "full_numbers",
                // "full_numbers": true
            });
            $('#commission_archived_reports').fadeIn('slow');
            $('table.dataTable').fadeIn('slow');
            $('#commission_archived_reports').DataTable().draw();

            //jQuery for initializing commision schdule data table
            $('#commission_schedule').DataTable({
                //"scrollY": "100%",
                "bDestroy": true,
                // "scrollX":        "100%",
                // "height": "350px;"
                "dom": 'rt<"bottom right"ip><"clear">',
                "lengthMenu": [[50]],
                "pageLength": 25,
                "scrollCollapse": true,
                "createdRow": function (row, data, dataIndex) {
                    //$(row).addClass('hand-pointer company');
                    $(row).click(function () {
                        var selected = $(row).hasClass("highlight");
                        $("table.dataTable tbody tr").removeClass("highlight");
                        if (!selected)
                            $(row).addClass("highlight");
                    });
                },
                language: {
                    paginate: {
                        next: '<img src="../svg/loanofficer/dashboard/right_arrow.png">',
                        previous: '<img src="../svg/loanofficer/dashboard/left_arrow.png">'
                    }
                },
                "infoCallback": function (settings, start, end, max, total, pre) {
                    return "Showing " + start + " - " + end + " of " + total;
                }
                //"paging":         false,
                // "pagingType": "full_numbers",
                // "full_numbers": true
            });
            $('#commission_schedule').fadeIn('slow');
            $('table.dataTable').fadeIn('slow');
            $('#commission_schedule').DataTable().draw();

            //jQuery for initializing commision report data table
            $('#commission_reports').DataTable({
                //"scrollY": "100%",
                "bDestroy": true,
                // "scrollX":        "100%",
                // "height": "350px;"
                "dom": 'rt<"bottom right"ip><"clear">',
                "lengthMenu": [[50]],
                "pageLength": 25,
                "scrollCollapse": true,
                "createdRow": function (row, data, dataIndex) {
                    //$(row).addClass('hand-pointer company');
                    $(row).click(function () {
                        var selected = $(row).hasClass("highlight");
                        $("table.dataTable tbody tr").removeClass("highlight");
                        if (!selected)
                            $(row).addClass("highlight");
                    });
                },
                language: {
                    paginate: {
                        next: '<img src="../svg/loanofficer/dashboard/right_arrow.png">',
                        previous: '<img src="../svg/loanofficer/dashboard/left_arrow.png">'
                    }
                },
                "infoCallback": function (settings, start, end, max, total, pre) {
                    return "Showing " + start + " - " + end + " of " + total;
                }
                //"paging":         false,
                // "pagingType": "full_numbers",
                // "full_numbers": true
            });
            $('#commission_reports').fadeIn('slow');
            $('table.dataTable').fadeIn('slow');
            $('#commission_reports').DataTable().draw();
        }
    }
});