jQuery.noConflict();
jQuery(document).ready(function ($) {
    //jquery to bind the chart based on the tab viewed
    $('ul.all_reports li a').each(function () {
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
            $('ul.all_reports li.nav-item a').removeClass('active');
            if (activeTab) {
                $('.tab-content .tab-pane').each(function () {
                    $(this).addClass('active');
                });
                    $(this).removeClass('active');
            }
        }); 
    });
    //jquery to activate the tab which last visited
    // var activeTab = localStorage.getItem('report-activeTab');
    // if (activeTab) {
    //     $('ul.all_reports .border-bottom-sec li.nav-item a').removeClass('active');
    //     $('.tab-content .tab-pane').each(function () {
    //         $(this).removeClass('active');
    //     });
    //     $('ul.all_reports .border-bottom-sec li.nav-item a[href="' + activeTab + '"]').addClass('active');
    //     $(activeTab).addClass('active');
    // }
    //jquery to clear the search filter
    $('.btn_clear_filter').each(function () {
        $(this).click(function () {
            window.location.reload();
        });
    });
    bindCustomFields();
    function bindCustomFields() {
        if ($('.custom-field-sec').is(':visible')) {
            //jQuery for initializing lead source dropdown
            $('.dropdown').dropdown({
                label: {
                    duration: 0,
                },
                debug: true,
                performance: true,
            });
            //jQuery for initializing commision archived report data table
            $('.custom-field').DataTable({
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
            $('.custom-field').fadeIn('slow');
            $('table.dataTable').fadeIn('slow');
            $('.custom-field').DataTable().draw();

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
        }
        if ($('#custom-links-sec').is(':visible')) {
            //jQuery for initializing lead source dropdown
            $('.dropdown').dropdown({
                label: {
                    duration: 0,
                },
                debug: true,
                performance: true,
            });
            //jQuery for initializing commision archived report data table
            $('.custom-field').DataTable({
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
            $('.custom-field').fadeIn('slow');
            $('table.dataTable').fadeIn('slow');
            $('.custom-field').DataTable().draw();

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
        }
    }
});