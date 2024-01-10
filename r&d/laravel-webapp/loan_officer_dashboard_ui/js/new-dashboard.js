jQuery.noConflict();
jQuery(document).ready(function ($) {
    $('.recent-activity-notes-1').addClass('show');
    $('.recent-activity-accordion .btn-link').click(function(){
        var no = $(this).attr('data-bind');
        if ($('.recent-activity-notes-' + no).is(':visible')){
            for(var i=1; i<=3; i++) {
                $('.card-header').removeClass('show');
            }
            $('.recent-activity-notes-' + no).addClass('show');
        }
        else{
            $('.card-header').removeClass('show');
            $('.recent-activity-notes-' + no).removeClass('show');
        }
     });
     // Loan Officer Dashboard Accordion
     $('.loan-dashboard-sec .recent-activity-accordion .btn-link').click(function(){
         var no = $(this).attr('data-bind');
         if ($('.loan-dashboard-sec .recent-activity-notes-' + no).is(':visible')){
             for(var i=1; i<=3; i++) {
                 $('.loan-dashboard-sec .card-header').removeClass('show');
             }
             $('.recent-activity-notes-' + no).addClass('show');
         }
         else{
             $('.loan-dashboard-sec .card-header').removeClass('show');
             $('.loan-dashboard-sec .recent-activity-notes-' + no).removeClass('show');
         }
      });
    // $('.recent-activity-accordion .btn-link[aria-expanded="true"]').click(function () { 
    //     $('.card-header').toggleClass('show');
    // });
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

        // ================================================================= //
    // jquery daterangepicker
    var start = moment().subtract(30, 'days');
    var end = moment();
    var template =
        '<div class="daterangepicker">' +
        '<div class="custom_title">Select Period' +
        '<a href="javascript:void(0)">'+
        '<img src="./images/cross.png" align="right" class="img-fluid datepicker_close">' +
        '</a>' +
        '</div>' +
        '<div class="ranges"></div>' +
        '<div style="float: left;">' +

        '<div class="drp-calendar left">' +
        '<div class="calendar-table"></div>' +
        '<div class="calendar-time"></div>' +
        '</div>' +
        '<div class="drp-calendar right">' +
        '<div class="calendar-table"></div>' +
        '<div class="calendar-time"></div>' +
        '</div>' +
        '<div class="drp-buttons">' +
        '<span class="drp-selected" style=""></span>' +
        '<button class="cancelBtn" type="button"></button>' +
        '<button class="applyBtn" disabled="disabled" type="button"></button> ' +
        '</div>' +

        '</div>' +
        '</div>';
     // jquery daterangepicker
    initDaterangepicker(start, end, template);

    function initDaterangepicker(start, end, template) {
        $('.reportrange').daterangepicker({
            startDate: start,
            endDate: end,
            ranges: {
                'Today': [moment(), moment()],
                'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                'Last 7 days': [moment().subtract(6, 'days'), moment()],
                'Last 14 weeks': [moment().subtract(14, 'weeks'), moment()],
                'Last 30 weeks': [moment().subtract(30, 'weeks'), moment()],
                'Last week': [moment().subtract(1, 'week'), moment()],
                'This week': [moment().startOf('week'), moment()],
                // 'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                'This Month': [moment().startOf('month'), moment().endOf('month')],
                'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
            },
            showCustomRangeLabel: false,
            template: template,
            locale: {
                applyLabel: 'Update',
                daysOfWeek: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
            }
        }, cb);
    }

    //customization of the Closing target date picker
    $('.reportrange').on('showCalendar.daterangepicker', function (ev, picker) {
        $('.ranges').find('.custom_data_preset_title').remove();
        $('.ranges').prepend('<div class="custom_data_preset_title">Date Preset</div>');
        bindClose();
    });

    //display full calendar on selecting any ranges
    $('.reportrange').on('apply.daterangepicker', function (ev, picker) {
        var startDate = picker.startDate;
        var endDate = picker.endDate;
        initDaterangepicker(startDate, endDate, template);
        $('.daterangepicker').each(function () {
            if (!$(this).hasClass('show-calendar')) {
                $(this).addClass('show-calendar');
            }
        });
    });

    //bind the calendar close event on the close icon.
    function bindClose() {
        $('.datepicker_close').on('click', function () {
            $('.cancelBtn').click();
        });
    }

    //trigger on page load
    cb(start, end);

    //bind the datepicker calender range UI text
    function cb(start, end) {
        $('.reportrange span').html(start.format('MMM D, YYYY') + ' - ' + end.format('MMM D, YYYY'));
    }

    //jQuery for initializing pipline table 3
     $('#closing-targets-table').DataTable({
        //"scrollY": "100%",
        "bDestroy": true,
        // "scrollX":        "100%",
        // "height": "350px;"
        "dom": 'rt<"bottom right"ip><"clear">',
        "lengthMenu": [10, 25, 50, "All"],
        // "lengthMenu": [[50]],
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
        'columnDefs': [{
            'orderable': false,
            //'className': 'select-checkbox',
            'targets': 0,
            'checkboxes': {
                'selectRow': true
            }
        }],
        language: {
            paginate: {
                next: '<img src="../svg/loanofficer/dashboard/right_arrow.png">',
                previous: '<img src="../svg/loanofficer/dashboard/left_arrow.png">'
            }
        },
        "infoCallback": function (settings, start, end, max, total, pre) {
            return "Showing " + start + " - " + end + " of " + total;
        },
        "paging":false,
        "info": false,
        // "pagingType": "full_numbers",
        // "full_numbers": true
    });
    $('#closing-targets-table').fadeIn('slow');
    $('table.dataTable').fadeIn('slow');
    $('#closing-targets-table').DataTable().draw();
    //jQuery for initializing pipline table 3
    $('#lead-pool-table').DataTable({
        //"scrollY": "100%",
        "bDestroy": true,
        // "scrollX":        "100%",
        // "height": "350px;"
        "dom": 'rt<"bottom right"ip><"clear">',
        "lengthMenu": [10, 25, 50, "All"],
        // "lengthMenu": [[50]],
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
        'columnDefs': [{
            'orderable': false,
            //'className': 'select-checkbox',
            'targets': 0,
            'checkboxes': {
                'selectRow': true
            }
        }],
        language: {
            paginate: {
                next: '<img src="../svg/loanofficer/dashboard/right_arrow.png">',
                previous: '<img src="../svg/loanofficer/dashboard/left_arrow.png">'
            }
        },
        "infoCallback": function (settings, start, end, max, total, pre) {
            return "Showing " + start + " - " + end + " of " + total;
        },
        "paging":false,
        "info": false,
        // "pagingType": "full_numbers",
        // "full_numbers": true
    });
    $('#lead-pool-table').fadeIn('slow');
    $('table.dataTable').fadeIn('slow');
    $('#lead-pool-table').DataTable().draw();

    bindDashboardCharts();
    function bindDashboardCharts() {
         // Marketing ROI Chart
        var chart;
        var pointStart = Date.UTC(2020, 0, 1);
        $('#marketing-roi-chart').highcharts({
            chart: { 
                type: 'line', 
                height: 350, 
                alignTicks: false,
                zoomType: 'x'
            },
            title: {
                 text: '',
                 enabled: false,
                 align: 'left',
                 margin: 10,
                 x: 50,
                 style: {
                     fontWeight: 'bold',
                     color: 'rgba(0,0,0,.9)'
                 }
             },
             subtitle: {
                 text: '',
                 enabled: false,
                 align: 'left',
                 x: 52,
             },
            legend: { enabled: false },
            global: {
                useUTC: false
            },
            credits: {
                enabled: false
            },
            colors: [
                '#657FDB',
                '#CC95C1',
                '#AEE2F5',
                '#DCCEFF',
                '#D1B9D6'
            ],
            plotOptions: {
                series: {
                    pointStart: pointStart,
                    pointInterval: 24 * 3600 * 1000 * 30
                }
            },
            xAxis: {
                type: 'datetime',
                tickInterval: 24 * 3600 * 1000 * 30, //one day
                labels: {
                    rotation: 0,
                    format: '{value:%b}',
                    style: {
                        color: '#9FA3C0'
                    }
                },
                crosshair: {
                    width: 42,
                    color: '#F2F6FE'
                }

            },
            yAxis: {
                minPadding: 0,
                maxPadding: 0,
                gridLineColor: 'rgba(204,204,204,.25)',
                gridLineWidth: 0,
                title: {
                    text: '',
                    rotation: 0,
                    textAlign: 'right',
                    style: {
                        color: 'rgba(0,0,0,.9)',
                    }
                },
                labels: {
                   style: {
                       color: '#9FA3C0'
                   },
                   format: '{value}%',
               },
                lineWidth: .5,
                lineColor: 'rgba(0,0,0,.5)',
                tickWidth: .5,
                tickLength: 12,
                tickColor: 'rgba(0,0,0,.75)'
            },
            tooltip: {
                shared: true,
                useHTML: true,
                borderWidth: 0,
                backgroundColor: "rgba(255,255,255,0)",
                borderRadius: 0,
                shadow: false,
                formatter: function () {
                    var html = '<div class="chart" style="overflow: visible;">' +
                        '<div class="chart_title">' + moment(this.x).format("MMMM, Y") + '</div>' +
                        '<div class="m_t_10">' +
                        '<div>' +
                        '<div class="chart_value" style="font-size:12px;line-height:14.52px;">' +
                        'Repeat Customer' +
                        '</div>' +
                        '<div class="chart_expenses" style="color: #657FDB; font-size:14px;line-height:16.9px;">' +
                        this.points[0].y + '%' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '<div class="m_t_10">' +
                        '<div>' +
                        '<div class="chart_value" style="font-size:12px;line-height:14.52px;">' +
                        'Facebook' +
                        '</div>' +
                        '<div class="chart_expenses" style="color: #CC95C1; font-size:14px;line-height:16.9px;">' +
                        this.points[1].y + '%' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '<div class="m_t_10">' +
                        '<div>' +
                        '<div class="chart_value" style="font-size:12px;line-height:14.52px;">' +
                        'Google' +
                        '</div>' +
                        '<div class="chart_expenses" style="color: #AEE2F5; font-size:14px;line-height:16.9px;">' +
                        this.points[2].y + '%' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '<div class="m_t_10">' +
                        '<div>' +
                        '<div class="chart_value" style="font-size:12px;line-height:14.52px;">' +
                        'Mailiers' +
                        '</div>' +
                        '<div class="chart_expenses" style="color: #DCCEFF; font-size:14px;line-height:16.9px;">' +
                        this.points[3].y + '%' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '<div class="m_t_10">' +
                        '<div>' +
                        '<div class="chart_value" style="font-size:12px;line-height:14.52px;">' +
                        'XFR' +
                        '</div>' +
                        '<div class="chart_expenses" style="color: #D1B9D6; font-size:14px;line-height:16.9px;">' +
                        this.points[4].y + '%' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '</div>';
                    return html;
                }
            }
        });
        chart = $('#marketing-roi-chart').highcharts();


        var jsonString1 = '[{ "date": "2020-6-01", "percentage": "500" }, { "date": "2020-7-02", "percentage": "50" }, { "date": "2020-8-03", "percentage": "2424"}, { "date": "2020-9-04", "percentage": "14040" }, { "date": "2020-10-05", "percentage": "14141" }, { "date": "2020-11-06", "percentage": "4111"} ]';
        var jsonString2 = '[{ "date": "2020-6-01", "percentage": "1288" }, { "date": "2020-7-02", "percentage": "88942" }, { "date": "2020-8-03", "percentage": "44545"}, { "date": "2020-9-04", "percentage": "7588" }, { "date": "2020-10-05", "percentage": "99" }, { "date": "2020-11-06", "percentage": "242"} ]';
        var jsonString3 = '[{ "date": "2020-6-01", "percentage": "1288" }, { "date": "2020-7-02", "percentage": "98942" }, { "date": "2020-8-03", "percentage": "44545"}, { "date": "2020-9-04", "percentage": "7588" }, { "date": "2020-10-05", "percentage": "199" }, { "date": "2020-11-06", "percentage": "2242"} ]';
        var jsonString4 = '[{ "date": "2020-6-01", "percentage": "2388" }, { "date": "2020-7-02", "percentage": "78942" }, { "date": "2020-8-03", "percentage": "64545"}, { "date": "2020-9-04", "percentage": "5588" }, { "date": "2020-10-05", "percentage": "3199" }, { "date": "2020-11-06", "percentage": "6242"} ]';
        var jsonString5 = '[{ "date": "2020-6-01", "percentage": "6388" }, { "date": "2020-7-02", "percentage": "8942" }, { "date": "2020-8-03", "percentage": "94545"}, { "date": "2020-9-04", "percentage": "7588" }, { "date": "2020-10-05", "percentage": "8199" }, { "date": "2020-11-06", "percentage": "8242"} ]';

        var myData1 = JSON.parse(jsonString1);
        var myData2 = JSON.parse(jsonString2);
        var myData3 = JSON.parse(jsonString3);
        var myData4 = JSON.parse(jsonString4);
        var myData5 = JSON.parse(jsonString5);
        var dataArray1 = [];
        var dataArray2 = [];
        var dataArray3 = [];
        var dataArray4 = [];
        var dataArray5 = [];

        $.each(myData1, function (i, obj) {
            //console.log(obj.date);
            var d = new Date(obj.date);
            dataArray1.push([Date.parse(d), parseInt(obj.percentage)]);
        });
        $.each(myData2, function (i, obj) {
            //console.log(obj.date);
            var d = new Date(obj.date);
            dataArray2.push([Date.parse(d), parseInt(obj.percentage)]);
        });
        $.each(myData3, function (i, obj) {
            //console.log(obj.date);
            var d = new Date(obj.date);
            dataArray3.push([Date.parse(d), parseInt(obj.percentage)]);
        });
        $.each(myData4, function (i, obj) {
            //console.log(obj.date);
            var d = new Date(obj.date);
            dataArray4.push([Date.parse(d), parseInt(obj.percentage)]);
        });
        $.each(myData5, function (i, obj) {
            //console.log(obj.date);
            var d = new Date(obj.date);
            dataArray5.push([Date.parse(d), parseInt(obj.percentage)]);
        });

        // add first series values
        chart.addSeries({
            data: dataArray1,
            type: 'spline',
            marker: {
                symbol: 'circle',
                lineWidth: 2
            }
        });

        // add second   series values
        chart.addSeries({
            data: dataArray2,
            type: 'spline',
            marker: {
                symbol: 'circle',
                lineWidth: 2
            }
        });

        // add third   series values
        chart.addSeries({
            data: dataArray3,
            type: 'spline',
            marker: {
                symbol: 'circle',
                lineWidth: 2
            }
        });

        // add fourth   series values
        chart.addSeries({
            data: dataArray4,
            type: 'spline',
            marker: {
                symbol: 'circle',
                lineWidth: 2
            }
        });

        // add fifth   series values
        chart.addSeries({
            data: dataArray5,
            type: 'spline',
            marker: {
                symbol: 'circle',
                lineWidth: 2
            }
        });
        //Funel Chart
        Highcharts.chart('funnel-chart', {
            chart: {
                type: 'funnel',
                plotBackgroundColor: null,
                plotBorderWidth: 0,
                plotShadow: false,
                reflow: false,
                height: 400,
                marginBotton: [30, 0, 30, 0]
            },
            tooltip: {
                shared: true,
                useHTML: true,
                borderWidth: 0,
                backgroundColor: "rgba(255,255,255,0)",
                borderRadius: 0,
                shadow: false,
                formatter: function () {
                    var html = '' +
                        '<div class="funnel_chart">' +
                        '<div class="funnel_chart_title">' + this.point.name + '</div>' +
                        '<div class="funnel_chart_value">' + this.point.value + '</div>' +
                        '</div>';
                    return html;
                }
            },
            data: {
                useHTML: true
            },
            title: {
                text: ''
            },
            exporting: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            plotOptions: {
                series: {
                    dataLabels: {
                        enabled: true,
                        // format: '<b>{point.name}</b> ({point.y:,.0f})',
                        format: '',
                        softConnector: false,
                        connectorWidth: '0',
                    },
                    // tooltip: {
                    //     pointFormat: '<b>{series.name}</b>{point.value}',
                    //     style: {
                    //         color: 'blue',
                    //         fontWeight: 'bold'
                    //     }
                    // },
                    allowPointSelect: false,
                    cursor: 'pointer',
                    center: ['45%', '50%'],
                    neckWidth: '25%',
                    neckHeight: '20%',
                    width: '90%',
                    animation: {
                        duration: 400
                    },
                    borderWidth: 0
                }
            },
            legend: {
                floating: false,
                enabled: true,
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                itemMarginTop: 8,
                itemMarginBottom: 8,
                width: '25%',
                // itemWidth: 170,
                itemStyle : '{ "word-wrap": "break-word"}'
            },
            series: [{
                type: 'funnel',
                name: '',
                colorByPoint: true,
                showInLegend: true,
                data: [
                    {
                        name: '<div><p class="graph_amt">Funded</p><br/><h5 class="graph_value" style="color:#9497C2;">$1,139,580.00</h5></div>',
                        value: '<div><p class="graph_amt"><b>950</b></p><br/><h5 class="graph_value" style="color:#9497C2;">35%</h5></div>',
                        y: 2500,
                        sliced: false
                    },
                    {
                        name: '<div><p class="graph_amt">Submitted to UW</p><br/><h5 class="graph_value" style="color:#9497C2;">$7,800.00</h5></div>',
                        value: '<div><p class="graph_amt"><b>80</b></p><br/><h5 class="graph_value" style="color:#9497C2;">12%</h5></div>',
                        y: 2000,
                        sliced: false,
                    },
                    {
                        name: '<div><p class="graph_amt">Approved</p><br/><h5 class="graph_value" style="color:#9497C2;">$39,580.00</h5></div>',
                        value: '<div><p class="graph_amt"><b>64</b></p><br/><h5 class="graph_value" style="color:#9497C2;">13%</h5></div>',
                        y: 1800,
                        sliced: false
                    },
                    {
                        name: '<div><p class="graph_amt">Waiting on CTC</p><br/><h5 class="graph_value" style="color:#9497C2;">$5,000.00</h5></div>',
                        value: '<div><p class="graph_amt"><b>27</b></p><br/><h5 class="graph_value" style="color:#9497C2;">5%</h5></div>',
                        y: 1000,
                        sliced: false
                    },
                    {
                        name: '<div><p class="graph_amt">Declined - Borrower</p><br/><h5 class="graph_value" style="color:#9497C2;">$1,320.00</h5></div>',
                        value: '<div><p class="graph_amt"><b>32</b></p><br/><h5 class="graph_value" style="color:#9497C2;">12%</h5></div>',
                        y: 1100,
                        sliced: false
                    },
                    {
                        name: '<div><p class="graph_amt">In Closing</p><br/><h5 class="graph_value" style="color:#9497C2;">$12,210.00</h5></div>',
                        value: '<div><p class="graph_amt"><b>49</b></p><br/><h5 class="graph_value" style="color:#9497C2;">13%</h5></div>',
                        y: 2000,
                        sliced: false
                    },
                    {
                        name: '<div><p class="graph_amt">Closed</p><br/><h5 class="graph_value" style="color:#9497C2;">$12,210.00</h5></div>',
                        value: '<div><p class="graph_amt"><b>35</b></p><br/><h5 class="graph_value" style="color:#9497C2;">10%</h5></div>',
                        y: 1200,
                        sliced: false
                    }
                ],
                // data: [
                //     {
                //         name: '<div><p class="graph_amt" style="color: #60698B;">Funded</p><br/><h5 class="graph_value" style="color:#9497C2;">35%</h5></div>',
                //         value: '<div><p class="graph_amt">$1,139,580.00</p><h5 class="graph_value" style="color:#9497C2;">&nbsp&nbsp&nbsp&nbsp(950)</h5></div>',
                //         y: 4000,
                //         sliced: false
                //     },
                //     {
                //         name: '<div><p class="graph_amt" style="color: #60698B;">Submitted to UW</p><br/><h5 class="graph_value" style="color:#9497C2;">12%</h5></div>',
                //         value: '<div<p class="graph_amt">$7,800.00</p><h5 class="graph_value" style="color:#9497C2;">&nbsp&nbsp&nbsp&nbsp(80)</h5></div>',
                //         y: 3000,
                //         sliced: false,
                //     },
                //     {
                //         name: '<div><p class="graph_amt" style="color: #60698B;">Approved</p><br/><h5 class="graph_value" style="color:#9497C2;">13%</h5></div>',
                //         value: '<div<p class="graph_amt">$39,580.00</p><h5 class="graph_value" style="color:#9497C2;">&nbsp&nbsp&nbsp&nbsp(64)</h5></div>',
                //         y: 1500,
                //         sliced: false
                //     },
                //     {
                //         name: '<div><p class="graph_amt" style="color: #60698B;">Waiting on CTC</p><br/><h5 class="graph_value" style="color:#9497C2;">5%</h5></div>',
                //         value: '<div<p class="graph_amt">$5,000.00</p><h5 class="graph_value" style="color:#9497C2;">&nbsp&nbsp&nbsp&nbsp(27)</h5></div>',
                //         y: 1200,
                //         sliced: false
                //     },
                //     {
                //         name: '<div><p class="graph_amt" style="color: #60698B;">Declined - Borrower</p><br/><h5 class="graph_value" style="color:#9497C2;">12%</h5></div>',
                //         value: '<div<p class="graph_amt">$5,000.00</p><h5 class="graph_value" style="color:#9497C2;">&nbsp&nbsp&nbsp&nbsp(32)</h5></div>',
                //         y: 1300,
                //         sliced: false
                //     },
                //     {
                //         name: '<div><p class="graph_amt" style="color: #60698B;">In Closing</p><br/><h5 class="graph_value" style="color:#9497C2;">13%</h5></div>',
                //         value: '<div<p class="graph_amt">$12,210.00</p><h5 class="graph_value" style="color:#9497C2;">&nbsp&nbsp&nbsp&nbsp(49)</h5></div>',
                //         y: 2000,
                //         sliced: false
                //     },
                //     {
                //         name: '<div><p class="graph_amt" style="color: #60698B;">Closed</p><br/><h5 class="graph_value" style="color:#9497C2;">10%</h5></div>',
                //         value: '<div<p class="graph_amt">$234,000.00</p><h5 class="graph_value" style="color:#9497C2;">&nbsp&nbsp&nbsp&nbsp(35)</h5></div>',
                //         y: 1200,
                //         sliced: false
                //     }
                // ],
                colors: [
                '#EBECFB',
                '#FFC9F3',
                '#FFA4F0',
                '#D6ADFF',
                '#B6D3FF',
                '#B3F6E6',
                '#82EC9F'
                ]
            }],
            // responsive: {
            //     rules: [{
            //         condition: {
            //             maxWidth: 500
            //         },
            //         chartOptions: {
            //             plotOptions: {
            //                 series: {
            //                     dataLabels: {
            //                         inside: true
            //                     },
            //                     center: ['50%', '50%'],
            //                     width: '100%'
            //                 }
            //             }
            //         }
            //     }]
            // }
        });
        // Leads bt State Chart
        Highcharts.chart('leads-state-chart', {
            chart: {
                plotBackgroundColor: null,
                align: 'left',
                plotBorderWidth: 0,
                plotShadow: false,
                reflow: false,
                height: 390
            },
            exporting: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            // title: {
            //     text: '<p class="graph_label">Total Leads</p> <br><b class="graph_total">217</b>',
            //     align: 'center',
            //     verticalAlign: 'middle',
            //     y: 10
            // },
            title: {
                text:''
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            accessibility: {
                point: {
                    valueSuffix: '%'
                }
            },
            plotOptions: {
                pie: {
                    size:'85%',
                    align: 'left',
                    allowPointSelect: false,
                    cursor: 'pointer',
                    // width: '60%',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            legend: {
                floating: false,
                layout: 'horizontal',
                align: 'right',
                verticalAlign: 'middle',
                itemMarginTop: 10,
                itemMarginBottom: 10,
                itemWidth: 275,
                // width: '72%',
                itemStyle : '{ "word-wrap": "break-word"}',
                itemPadding : 15
                },
            series: [{
                type: 'pie',
                name: 'Revenue',
                colorByPoint: true,
                innerSize: '60%',
                data: [
                // {
                //     name: '<p class="legends-title">Revenue</p>',
                //     color: 'none'
                // }, 
                {
                    name: '<p class="graph_legends">⏰ &nbsp No Interest</p> <h4 class="graph_value">&nbsp&nbsp 1 &nbsp&nbsp</h4>',
                    color: '#9FA3C0',
                    y: 20,
                    sliced: false,
                    selected: true
                },
                {
                    name: '<p class="graph_legends">⏰ &nbsp Not Qualified</p> <h4 class="graph_value">&nbsp&nbsp 2 &nbsp&nbsp</h4>',
                    color: '#E4E5F2',
                    y: 30,
                    sliced: false,
                    selected: true
                },
                {
                    name: '<p class="graph_legends">⏰ &nbsp Web lead follow up sequence</p> <h4 class="graph_value">&nbsp&nbsp 3 &nbsp&nbsp</h4>',
                    color: '#F585A0',
                    y: 50,
                    sliced: false,
                    selected: true
                }]
            }]
        });
    }
});