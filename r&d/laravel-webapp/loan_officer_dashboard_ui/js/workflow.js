jQuery.noConflict();
jQuery(document).ready(function ($) {
    $('.btn_clear_filter').each(function () {
        $(this).click(function () {
            window.location.reload();
        });
    });
    jcf.replace('.table-dropdown select');
    $('.subscribe-btn .slider').click(function(){
        var no = $(this).attr('data-bind');
         $('.active-status-' + no).toggleClass('show');
     });

    //bind the recurring annual reminder date selection option
    var start = moment();
    var end = moment();

    //bind the recurring reminder date selection option, setup the date configuration
    initRecurringReminderDatePicker(start);

    //initialize datepicker configuration
    function initRecurringReminderDatePicker(start) {
        $('.recurring_reminder_date').daterangepicker({
            startDate: start,
            singleDatePicker: true,
            showDropdowns: false,
            timePicker: false,
            timePicker24Hour: false,
            locale: {
                applyLabel: 'Confirm',
                daysOfWeek: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                direction: 'custom-datepicker-new ltr'
            }
        }, cb_recurring_reminder);
    }

    //bind Close event
    $('.recurring_reminder_date').on('showCalendar.daterangepicker', function (ev, picker) {
        $('.drp-calendar').find('.custom_title').remove();
        $('.drp-calendar').prepend('<div class="custom_title broadcast_send_date_ui">Reminder date' +
            '<a href="javascript:void(0)">' +
            '<img src="../../svg/loanofficer/dashboard/cross.png" align="right" class="img-fluid datepicker_close">' +
            '</a>' +
            '</div>');
        bindClose();
    });

    //bind the datepicker calender range UI text
    function cb_recurring_reminder(start, end) {
        if (start != '') {
            $('.span_recurring_reminder_reportrange').html(start.format('MMM D, YYYY'));
            $('input#add_task_annually_reminder_date').val(start.format('YYYY-MM-DD'));
        } else {
            $('.span_recurring_reminder_reportrange').html('');
            $('input#add_task_annually_reminder_date').val('');
        }
    }

    //trigger on page load
    cb_recurring_reminder(start, end);
    //bind the calendar close event on the close icon.
    function bindClose() {
        $('.datepicker_close').on('click', function () {
            $('.cancelBtn').click();
        });
    }
    ///////////////////////////////////////////
    bindWorkFlow();
    function bindWorkFlow() {
        if ($('.workflow-sec').is(':visible')) {
            //jQuery for initializing lead source dropdown
            $('.dropdown').dropdown({
                label: {
                    duration: 0,
                },
                debug: true,
                performance: true,
            });

            //jQuery for Accordion
            $('.workflow-accordion-1').click(function () {
                if ($('.workflow-accordion-1-content').is(':visible') == false) {
                    $('.workflow-accordion-1 .marketing_collapsible_integration_section').css({
                        "margin-top": "0",
                        "transform": "rotate(0deg)"
                    });
                    $('.content-wrapper').removeClass('empty_class');
                } else {
                    $('.workflow-accordion-1 .marketing_collapsible_integration_section').css({
                        "margin-top": "0",
                        "transform": "rotate(180deg)"
                    });
                    $('.content-wrapper').addClass('empty_class');
                }

                //jquery to reduce the collapsible container height.
                // var c_height = $('.marketing_toggle_content').height();
                // var orig_height = $('.sidenav').height();
                // var new_height = orig_height-c_height;
                // $('.sidenav').css({'height': new_height + 'px'});


                $('.workflow-accordion-1-content').slideToggle('slow', function () {
                    //$('#marketing_target').DataTable().draw();
                });
            });
            $('.workflow-accordion-2').click(function () {
                if ($('.workflow-accordion-2-content').is(':visible') == false) {
                    $('.workflow-accordion-2 .marketing_collapsible_integration_section').css({
                        "margin-top": "0",
                        "transform": "rotate(0deg)"
                    });
                    $('.content-wrapper').removeClass('empty_class');
                } else {
                    $('.workflow-accordion-2 .marketing_collapsible_integration_section').css({
                        "margin-top": "0",
                        "transform": "rotate(180deg)"
                    });
                    $('.content-wrapper').addClass('empty_class');
                }

                //jquery to reduce the collapsible container height.
                // var c_height = $('.marketing_toggle_content').height();
                // var orig_height = $('.sidenav').height();
                // var new_height = orig_height-c_height;
                // $('.sidenav').css({'height': new_height + 'px'});


                $('.workflow-accordion-2-content').slideToggle('slow', function () {
                    //$('#marketing_target').DataTable().draw();
                });
            });
            $('.workflow-accordion-3').click(function () {
                if ($('.workflow-accordion-3-content').is(':visible') == false) {
                    $('.workflow-accordion-3 .marketing_collapsible_integration_section').css({
                        "margin-top": "0",
                        "transform": "rotate(0deg)"
                    });
                    $('.content-wrapper').removeClass('empty_class');
                } else {
                    $('.workflow-accordion-3 .marketing_collapsible_integration_section').css({
                        "margin-top": "0",
                        "transform": "rotate(180deg)"
                    });
                    $('.content-wrapper').addClass('empty_class');
                }

                //jquery to reduce the collapsible container height.
                // var c_height = $('.marketing_toggle_content').height();
                // var orig_height = $('.sidenav').height();
                // var new_height = orig_height-c_height;
                // $('.sidenav').css({'height': new_height + 'px'});


                $('.workflow-accordion-3-content').slideToggle('slow', function () {
                    //$('#marketing_target').DataTable().draw();
                });
            });
            //jQuery for initializing commision archived report data table
            $('.workflow-table').DataTable({
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
            $('.workflow-table').fadeIn('slow');
            $('table.dataTable').fadeIn('slow');
            $('.workflow-table').DataTable().draw();
        }
    }
});