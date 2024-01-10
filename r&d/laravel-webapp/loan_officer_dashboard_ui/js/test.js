jQuery.noConflict();
jQuery(document).ready(function ($) {
    // Columns Filter
    $('.all-select .dt-checkboxes').click(function(){
        if($(this).is(':checked')){
            $('input.dt-checkboxes').prop('checked', true);
        }
        else {
            $('input.dt-checkboxes').prop('checked', false);
        }
    });
    // Fixed Data Table Column Width
    $('.marketing_target').dataTable( {
        "columnDefs": [
          { "width": "5%", "targets": 0 },
          { "width": "10%", "targets": 2 },
          { "width": "10%", "targets": 10 }
        ]
      } );
    //=============================================================================================================
    // jQuery to set configuration
    //=============================================================================================================
    function setHighChartGlobalOpt() {
        Highcharts.setOptions({
            global: {
                useUTC: false
            },
            credits: {
                enabled: false
            },
            colors: [
                '#3F68B8',
                '#9FA3C0'
            ],
            chart: {
                alignTicks: false,
                zoomType: 'x',
                type: 'line',
            },
            title: {
                text: ''
            },
            subtitle: {
                text: ''
            },
            legend: { enabled: false },
            plotOptions: {
                line: {
                    lineWidth: 3,
                    marker: {
                        enabled: true,
                        symbol: 'circle',
                        radius: 5
                    }
                },
            },
            xAxis: {
                title: {
                    text: '',
                    rotation: 0,
                    textAlign: 'center',
                    style: {
                        color: 'rgba(0,0,0,.9)'
                    }
                },
                labels: {
                    style: {
                        color: '#9FA3C0',
                        fontSize: '12px',
                        fontWeight: '300',
                        fontFamily: '"Inter",serif'
                    }
                },
                lineWidth: .5,
                lineColor: '#3F68B8',
                tickWidth: .5,
                tickLength: 6,
                tickColor: 'rgba(0,0,0,.75)',
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
                        color: '#9FA3C0',
                        fontWeight: '300',
                        fontFamily: '"Inter",serif',
                        fontSize: '12px'
                    }
                },
                lineWidth: .5,
                lineColor: 'rgba(0,0,0,.5)',
                tickWidth: .5,
                tickLength: 12,
                tickColor: 'rgba(0,0,0,.75)'
            },
            /*tooltip: {
             xDateFormat: '%b, %Y'
             },*/
            tooltip: {
                shared: true,
                useHTML: true,
                borderWidth: 0,
                backgroundColor: "rgba(255,255,255,0)",
                borderRadius: 0,
                shadow: false,
                formatter: function () {
                    var html = '' +
                        '<div class="chart">' +
                        '<div class="chart_title">' + moment(this.x).format("MMMM, Y") + '</div>' +
                        //'<div class="content_center m_t_10">' +
                        //'<div class="color_filled blue_filled"></div>' +
                        '<div>' +
                        '<div class="chart_value">' +
                        'Total logged time' +
                        '</div>' +
                        '<div class="chart_expenses">' +
                        this.points[0].y + 'h' +
                        '</div>' +
                        '</div>' +
                        //'</div>' +
                        //'<div class="content_center m_t_10">' +
                        //'<div class="color_filled" style="background-color:#9FA3C0"></div>' +
                        '<div>' +
                        '<div class="chart_value">' +
                        'Daily average' +
                        '</div>' +
                        '<div class="chart_expenses" style="color:#9FA3C0">' + (this.points[1].y) + 'h' +
                        '</div>' +
                        '</div>' +
                        //'</div>' +
                        '</div>';
                    return html;
                }
            },/**/
        });
    }

    //initialize variables
    var goals_table;
    var rows_selected = [];

    //jquery for the my team date range picker
    var start = moment().subtract(30, 'days');
    var end = moment();
    var template =
        '<div class="daterangepicker">' +
        '<div class="custom_title">Select Period' +
        '<a href="javascript:void(0)">' +
        '<img src="../svg/loanofficer/dashboard/cross.png" align="right" class="img-fluid datepicker_close">' +
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

    // Change the button text & add active class
    $('.role_jRadioDropdown').change(function () {
        var dropdown = $(this).closest('.dropdown');
        var thislabel = $(this).closest('label');

        dropdown.find('label').removeClass('active');
        if ($(this).is(':checked')) {
            thislabel.addClass('active');
            dropdown.find('ins').html(thislabel.text());
        }

    });

    //Add tabindex on labels
    $('label.dropdown-item').each(function (index, value) {
        $(this).attr('tabindex', 0);
        $(this).find('input').attr('tabindex', -1);
    });

    //Add keyboard navigation
    $('label.dropdown-item').keypress(function (e) {
        if ((e.keyCode ? e.keyCode : e.which) == 13) {
            $(this).trigger('click');
        }
    });

    //jquery to reload the page on the page resize
    $(window).resize(function () {
        window.location.reload();
    });

    function bindTimeChart() {
        if ($('#container2').is(':visible')) {
            setHighChartGlobalOpt();
            // ============================================================================================================
            // setup configuration for the time chart
            //=============================================================================================================
            var jsonString = '[{"date": "2019-10-1", "total": "100", "average": "420" },{ "date": "2019-11-01", "total": "75", "average": "325" },{ "date": "2019-12-01", "total": "25", "average": "300" },{ "date": "2020-01-01", "total": "125", "average": "150" }, { "date": "2020-02-01", "total": "95", "average": "175" }, { "date": "2020-03-01", "total": "50", "average": "340" }, { "date": "2020-04-01", "total": "100", "average": "175" }, { "date": "2020-05-01", "total": "75", "average": "360" }, { "date": "2020-06-01", "total": "40", "average": "400" }, { "date": "2020-07-01", "total": "40", "average": "400" }, { "date": "2020-08-01", "total": "50", "average": "350" }, { "date": "2020-09-01", "total": "50", "average": "400" }, { "date": "2020-10-01", "total": "50", "average": "300" }, { "date": "2020-11-01", "total": "30", "average": "400" }]';
            var myData = JSON.parse(jsonString);
            var dataArray = [];
            var dataArray_a = [];
            $.each(myData, function (i, obj) {
                //console.log(obj.date);
                var d = new Date(obj.date);
                dataArray.push([Date.parse(d), parseInt(obj.average)]);
                dataArray_a.push([Date.parse(d), parseInt(obj.total)]);
            });
            $('#container2').highcharts({
                chart: {
                    type: 'line',
                    reflow: true
                },
                title: {},
                subtitle: {},
                legend: { enabled: false },
                plotOptions: {
                    series: {
                        //pointStart: pointStart,
                        pointInterval: 24 * 3600 * 1000 * 30
                    }
                },
                xAxis: {
                    min: Date.UTC(2019, 09, 0),
                    max: Date.UTC(2020, 10, 1),
                    //allowDecimals: false,
                    type: 'datetime',
                    tickInterval: 24 * 3600 * 1000 * 30, //one day
                    labels: {
                        rotation: 0,
                        format: '{value:%b}'
                    },

                },
                yAxis: {}
            });
            var chart = $('#container2').highcharts();
            // add first series values
            chart.addSeries({
                data: dataArray,
                name: 'Total'
            });

            // add second series values
            chart.addSeries({
                data: dataArray_a,
                name: 'Average'
            });

            //jquery to bind the datatable
            $('#team_time').DataTable({
                //"scrollY":        "500px",
                "scrollCollapse": true,
                "pageLength": 25,
                "dom": 'rt<"bottom right"ip><"clear">',
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
                "bDestroy": true
            });
            $('#team_time').fadeIn('slow');
            $('table.dataTable').fadeIn('slow');
            $('#team_time').DataTable().draw();

            //jquery to bind the table logged Time popup
            $('#tablelogged_time').DataTable({
                bFilter: false,
                bInfo: false,
                "paging": false,
                "bDestroy": true,
                "createdRow": function (row, data, dataIndex) {
                    //$(row).addClass('hand-pointer company');
                    $(row).click(function () {
                        var selected = $(row).hasClass("highlight");
                        $("table.dataTable tbody tr").removeClass("highlight");
                        if (!selected)
                            $(row).addClass("highlight");
                    });
                },
            });

            //jquery for export icon click event in time tab
            $(document).on('click', '.export_time_btn', function (e) {
                $('#time-report-csv').submit();
            });
        }
    }

    function bindCallChart() {
        if ($('#number_calls').is(':visible')) {
            setHighChartGlobalOpt();
            // ============================================================================================================
            // setup configuration for the call chart
            //=============================================================================================================
            var call_chart;
            var pointStart = Date.UTC(2020, 0, 1);
            var jsonString = '[{ "date": "2020-6-01", "total": "1", "average": "10" },{ "date": "2020-7-01", "total": "3", "average": "15" }, { "date": "2020-8-01", "total": "2", "average": "18" }, { "date": "2020-9-01", "total": "4", "average": "20" }, { "date": "2020-10-01", "total": "1", "average": "19" }, { "date": "2020-11-01", "total": "6", "average": "30" } ]';
            var myData = JSON.parse(jsonString);
            var dataArray = [];
            var dataArray_a = [];
            $.each(myData, function (i, obj) {
                //console.log(obj.date);
                var d = new Date(obj.date);
                dataArray.push([Date.parse(d), parseInt(obj.total)]);
                dataArray_a.push([Date.parse(d), parseInt(obj.average)]);
            });

            //setup configuration for the talk chart
            var talk_chart;
            var second_pointStart = Date.UTC(2020, 0, 1);
            var second_jsonString = '[{ "date": "2020-6-01", "total": "0.1", "average": "1.9" },{ "date": "2020-7-01", "total": "0.3", "average": "2.2" }, { "date": "2020-8-01", "total": "0.2", "average": "2.1" }, { "date": "2020-9-01", "total": "0.4", "average": "2.8" }, { "date": "2020-10-01", "total": "0.1", "average": "1.8" }, { "date": "2020-11-01", "total": "0.5", "average": "4" } ]';
            var second_myData = JSON.parse(second_jsonString);
            var second_dataArray = [];
            var second_dataArray_a = [];
            $.each(second_myData, function (i, obj) {
                //console.log(obj.date);
                var second_d = new Date(obj.date);
                second_dataArray.push([Date.parse(second_d), parseFloat(obj.average)]);
                second_dataArray_a.push([Date.parse(second_d), parseFloat(obj.total)]);
            });

            //setup configuration for the lo chart
            var lo_chart;
            var third_pointStart = Date.UTC(2020, 0, 1);
            var third_jsonString = '[{ "date": "2020-6-01", "total": "5", "average": "2" },{ "date": "2020-7-01", "total": "8", "average": "4" }, { "date": "2020-8-01", "total": "7", "average": "3" }, { "date": "2020-9-01", "total": "13", "average": "5" }, { "date": "2020-10-01", "total": "3", "average": "1" }, { "date": "2020-11-01", "total": "20", "average": "7" } ]';
            var third_myData = JSON.parse(third_jsonString);
            var third_dataArray = [];
            var third_dataArray_a = [];
            $.each(third_myData, function (i, obj) {
                //console.log(obj.date);
                var third_d = new Date(obj.date);
                third_dataArray.push([Date.parse(third_d), parseFloat(obj.total)]);
                third_dataArray_a.push([Date.parse(third_d), parseFloat(obj.average)]);
            });

            //display the Calls chart
            $('#number_calls').highcharts({
                chart: { type: 'line' },
                title: {},
                subtitle: {},
                colors: [
                    '#B8883F',
                    '#3FB87E'
                ],
                legend: { enabled: false },
                plotOptions: {
                    series: {
                        pointStart: pointStart,
                        pointInterval: 24 * 3600 * 1000 * 30
                    }
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
                            '<div class="chart">' +
                            '<div class="chart_title">' + moment(this.x).format("MMMM, Y") + '</div>' +
                            //'<div class="content_center m_t_10">' +
                            //'<div class="color_filled" style="background-color: #B8883F;"></div>' +
                            '<div>' +
                            '<div class="chart_value">' +
                            'Total calls' +
                            '</div>' +
                            '<div class="chart_expenses" style="color: #3FB87E;">' +
                            this.points[0].y + 'h' +
                            '</div>' +
                            '</div>' +
                            //'</div>' +
                            //'<div class="content_center m_t_10">' +
                            //'<div class="color_filled" style="background-color:#3FB87E"></div>' +
                            '<div>' +
                            '<div class="chart_value">' +
                            'Daily average' +
                            '</div>' +
                            '<div class="chart_expenses" style="color:#B8883F;">' + (this.points[1].y) + 'h' +
                            '</div>' +
                            '</div>' +
                            '</div>' +
                            '</div>';
                        return html;
                    }
                },
                xAxis: {
                    min: Date.UTC(2020, 5, 0),
                    max: Date.UTC(2020, 10, 1),
                    //allowDecimals: false,
                    type: 'datetime',
                    tickInterval: 24 * 3600 * 1000 * 30, //one day
                    labels: {
                        rotation: 0,
                        format: '{value:%b}'
                    },

                },
                yAxis: {}
            });
            call_chart = $('#number_calls').highcharts();

            // add first series values
            call_chart.addSeries({
                data: dataArray
            });

            // add second series values
            call_chart.addSeries({
                data: dataArray_a
            });


            //display the Talk Times chart
            $('#number_talktime').highcharts({
                chart: { type: 'line' },
                title: {},
                colors: [
                    '#573FB8',
                    '#B83FAC'
                ],
                subtitle: {},
                legend: { enabled: false },
                plotOptions: {
                    series: {
                        pointStart: pointStart,
                        pointInterval: 24 * 3600 * 1000 * 30
                    }
                },
                tooltip: {
                    shared: true,
                    useHTML: true,
                    borderWidth: 0,
                    backgroundColor: "rgba(255,255,255,0)",
                    borderRadius: 0,
                    shadow: false,
                    formatter: function () {
                        var second_html = '' +
                            '<div class="chart">' +
                            '<div class="chart_title">' + moment(this.x).format("MMMM, Y") + '</div>' +
                            //'<div class="content_center m_t_10">' +
                            //'<div class="color_filled" style="background: #573FB8;"></div>' +
                            '<div>' +
                            '<div class="chart_value">' +
                            'Total talk time' +
                            '</div>' +
                            '<div class="chart_expenses" style="color:#573FB8">' +
                            this.points[0].y + 'h' +
                            '</div>' +
                            '</div>' +
                            //'</div>' +
                            //'<div class="content_center m_t_10">' +
                            //'<div class="color_filled" style="background: #B83FAC;"></div>' +
                            '<div>' +
                            '<div class="chart_value">' +
                            'Daily average' +
                            '</div>' +
                            '<div class="chart_expenses" style="color:#B83FAC;">' + (this.points[1].y) + 'h' +
                            '</div>' +
                            //'</div>' +
                            '</div>' +
                            '</div>';
                        return second_html;
                    }
                },
                xAxis: {
                    min: Date.UTC(2020, 5, 0),
                    max: Date.UTC(2020, 10, 1),
                    allowDecimals: true,
                    type: 'datetime',
                    tickInterval: 24 * 3600 * 1000 * 30, //one day
                    labels: {
                        rotation: 0,
                        format: '{value:%b}'
                    },

                },
                yAxis: {
                    allowDecimals: true,
                    labels: {
                        rotation: 0,
                        format: '{value}h'
                    }
                }
            });
            talk_chart = $('#number_talktime').highcharts();

            // add first series values
            talk_chart.addSeries({
                data: second_dataArray
            });

            // add second   series values
            talk_chart.addSeries({
                data: second_dataArray_a
            });


            //display the LO ($) chart
            $('#number_lo').highcharts({
                chart: { type: 'line' },
                title: {},
                subtitle: {},
                colors: [
                    '#3FA2B8',
                    '#3F6FB8'
                ],
                legend: { enabled: false },
                tooltip: {
                    shared: true,
                    useHTML: true,
                    borderWidth: 0,
                    backgroundColor: "rgba(255,255,255,0)",
                    borderRadius: 0,
                    shadow: false,
                    formatter: function () {
                        var html = '' +
                            '<div class="chart">' +
                            '<div class="chart_title">' + moment(this.x).format("MMMM, Y") + '</div>' +
                            //'<div class="content_center m_t_10">' +
                            //'<div class="color_filled" style="background: #3FA2B8;"></div>' +
                            '<div>' +
                            '<div class="chart_value">' +
                            'LO Per Minute' +
                            '</div>' +
                            '<div class="chart_expenses" style="color:  #3FA2B8">' +
                            this.points[0].y + 'h' +
                            '</div>' +
                            '</div>' +
                            //'</div>' +
                            //'<div class="content_center m_t_10">' +
                            //'<div class="color_filled" style="background: #3F6FB8;"></div>' +
                            '<div>' +
                            '<div class="chart_value">' +
                            'LO Per Call' +
                            '</div>' +
                            '<div class="chart_expenses" style="#3F6FB8;">' + (this.points[1].y) + 'h' +
                            '</div>' +
                            //'</div>' +
                            '</div>' +
                            '</div>';
                        return html;
                    }
                },
                plotOptions: {
                    series: {
                        pointStart: pointStart,
                        pointInterval: 24 * 3600 * 1000 * 30
                    }
                },
                xAxis: {
                    min: Date.UTC(2020, 5, 0),
                    max: Date.UTC(2020, 10, 1),
                    //allowDecimals: false,
                    type: 'datetime',
                    tickInterval: 24 * 3600 * 1000 * 30, //one day
                    labels: {
                        rotation: 0,
                        format: '{value:%b}'
                    },

                },
                yAxis: {
                    allowDecimals: true,
                    labels: {
                        rotation: 0,
                        format: '${value}'
                    }
                }
            });
            lo_chart = $('#number_lo').highcharts();

            // add first series values
            lo_chart.addSeries({
                data: third_dataArray
            });

            // add second series values
            lo_chart.addSeries({
                data: third_dataArray_a
            });

            //jquery to bind the datatable
            $('#team_call').DataTable({
                //"scrollY":        "500px",
                "scrollCollapse": true,
                "pageLength": 25,
                "dom": 'rt<"bottom right"ip><"clear">',
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
                "bDestroy": true
            });
            $('#team_call').fadeIn('slow');
            $('table.dataTable').fadeIn('slow');
            $('#team_call').DataTable().draw();

            //jquery for export icon click event in calls tab
            $(document).on('click', '.export_calls_btn', function (e) {
                $('#call-report-csv').submit();
            });
        }
    }

    function bindRevenueChart() {
        if ($('#revenue').is(':visible')) {
            setHighChartGlobalOpt();
            // ============================================================================================================
            // setup configuration for the revenue chart
            //=============================================================================================================
            var chart;
            var pointStart = Date.UTC(2020, 0, 1);
            var jsonString = '[{ "date": "2019-10-01", "Net_Revenue": "200", "LO_Commission": "500" ,"Our_Cut": "300", "Profit_Per_Loan_Officer": "400" },{ "date": "2019-11-01", "Net_Revenue": "150", "LO_Commission": "450" ,"Our_Cut": "250", "Profit_Per_Loan_Officer": "350" },{ "date": "2019-12-01", "Net_Revenue": "100", "LO_Commission": "400" ,"Our_Cut": "200", "Profit_Per_Loan_Officer": "300" },{ "date": "2020-01-01", "Net_Revenue": "50", "LO_Commission": "350" ,"Our_Cut": "150", "Profit_Per_Loan_Officer": "250" },{ "date": "2020-02-01", "Net_Revenue": "200", "LO_Commission": "500" ,"Our_Cut": "300", "Profit_Per_Loan_Officer": "400" },{ "date": "2020-03-01", "Net_Revenue": "150", "LO_Commission": "450" ,"Our_Cut": "250", "Profit_Per_Loan_Officer": "350" },{ "date": "2020-04-01", "Net_Revenue": "100", "LO_Commission": "400" ,"Our_Cut": "200", "Profit_Per_Loan_Officer": "300" },{ "date": "2020-05-01", "Net_Revenue": "200", "LO_Commission": "500" ,"Our_Cut": "300", "Profit_Per_Loan_Officer": "400" },{ "date": "2020-06-01", "Net_Revenue": "150", "LO_Commission": "450" ,"Our_Cut": "250", "Profit_Per_Loan_Officer": "350" },{ "date": "2020-07-01", "Net_Revenue": "100", "LO_Commission": "400" ,"Our_Cut": "200", "Profit_Per_Loan_Officer": "300" },{ "date": "2020-08-01", "Net_Revenue": "50", "LO_Commission": "350" ,"Our_Cut": "150", "Profit_Per_Loan_Officer": "250" },{ "date": "2020-09-01", "Net_Revenue": "200", "LO_Commission": "500" ,"Our_Cut": "300", "Profit_Per_Loan_Officer": "400" },{ "date": "2020-10-01", "Net_Revenue": "150", "LO_Commission": "450" ,"Our_Cut": "250", "Profit_Per_Loan_Officer": "350" },{ "date": "2020-11-01", "Net_Revenue": "100", "LO_Commission": "400" ,"Our_Cut": "200", "Profit_Per_Loan_Officer": "300" },{ "date": "2020-12-01", "Net_Revenue": "200", "LO_Commission": "500" ,"Our_Cut": "300", "Profit_Per_Loan_Officer": "400" }]';
            var myData = JSON.parse(jsonString);
            var dataArray = [];
            var dataArray_a = [];
            var dataArray_b = [];
            var dataArray_c = [];
            $.each(myData, function (i, obj) {
                //console.log(obj.date);
                var d = new Date(obj.date);
                dataArray.push([Date.parse(d), parseInt(obj.Net_Revenue)]);
                dataArray_a.push([Date.parse(d), parseInt(obj.LO_Commission)]);
                dataArray_b.push([Date.parse(d), parseInt(obj.Our_Cut)]);
                dataArray_c.push([Date.parse(d), parseInt(obj.Profit_Per_Loan_Officer)]);
            });

            $('#revenue').highcharts({
                chart: { type: 'line' },
                title: {},
                subtitle: {},
                legend: { enabled: false },
                plotOptions: {
                    series: {
                        pointStart: pointStart,
                        pointInterval: 24 * 3600 * 1000 * 30
                    }
                },
                colors: [
                    '#3FA2B8',
                    '#C38C21',
                    '#3F6FB8',
                    '#8A3FB8'
                ],
                xAxis: {
                    min: Date.UTC(2019, 09, 0),
                    max: Date.UTC(2020, 10, 1),
                    //allowDecimals: false,
                    type: 'datetime',
                    tickInterval: 24 * 3600 * 1000 * 30, //one day
                    labels: {
                        rotation: 0,
                        format: '{value:%b}'
                    },
                    crosshair: {
                        width: 42,
                        color: '#F2F6FE'
                    }
                },
                yAxis: {
                    allowDecimals: true,
                    labels: {
                        rotation: 0,
                        format: '${value}'
                    }
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
                            '<div class="chart revenue_graph">' +
                            '<div class="chart_title">' + moment(this.x).format("MMMM, Y") + '</div>' +
                            // '<div class="content_center m_t_10">' +
                            // '<div class="color_filled" style="background: #3FA2B8;"></div>' +
                            '<div>' +
                            '<div class="chart_value">' +
                            'Net Revenue' +
                            '</div>' +
                            '<div class="chart_expenses" style="color:#3FA2B8;">' +
                            '$' + this.points[0].y +
                            '</div>' +
                            '</div>' +
                            // '</div>' +
                            // '<div class="content_center m_t_10">' +
                            // '<div class="color_filled" style="background-color:#C38C21"></div>' +
                            '<div>' +
                            '<div class="chart_value">' +
                            'LO Commission' +
                            '</div>' +
                            '<div class="chart_expenses" style="color:#C38C21">' +
                            '$' + this.points[1].y +
                            '</div>' +
                            '</div>' +
                            // '</div>' +
                            // '<div class="content_center m_t_10">' +
                            // '<div class="color_filled" style="background-color:#3F6FB8"></div>' +
                            '<div>' +
                            '<div class="chart_value">' +
                            'Our Cut' +
                            '</div>' +
                            '<div class="chart_expenses" style="color:#3F6FB8">' +
                            '$' + this.points[2].y +
                            '</div>' +
                            '</div>' +
                            // '</div>' +
                            // '<div class="content_center m_t_10">' +
                            // '<div class="color_filled" style="background-color:#8A3FB8"></div>' +
                            '<div>' +
                            '<div class="chart_value">' +
                            'Profit per LO, $' +
                            '</div>' +
                            '<div class="chart_expenses" style="color:#8A3FB8">' +
                            '$' + this.points[3].y +
                            '</div>' +
                            // '</div>' +
                            '</div>' +
                            '</div>';
                        return html;
                    }
                }
            });
            chart = $('#revenue').highcharts();

            // add first series values
            chart.addSeries({
                data: dataArray
            });

            // add second series values
            chart.addSeries({
                data: dataArray_a
            });

            // add third series values
            chart.addSeries({
                data: dataArray_b
            });

            // add fourth series values
            chart.addSeries({
                data: dataArray_c
            });

            //jquery to bind the datatable
            $('#team_revenue').DataTable({
                //"scrollY":        "500px",
                "scrollCollapse": true,
                "pageLength": 25,
                "dom": 'rt<"bottom right"ip><"clear">',
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
                "bDestroy": true
            });
            $('#team_revenue').fadeIn('slow');
            $('table.dataTable').fadeIn('slow');
            $('#team_revenue').DataTable().draw();

            //jquery for export icon click event in revenue tab
            $(document).on('click', '.export_revenue_btn', function (e) {
                $('#revenue-report-csv').submit();
            });
        }
    }

    function bindLeadChart() {
        if ($('#lead').is(':visible')) {
            setHighChartGlobalOpt();
            // ============================================================================================================
            // setup configuration for the lead chart
            //=============================================================================================================
            var jsonString = '[{ "date": "2019-10-01", "Leads_Taken": "200", "Submissions": "500" ,"Funded": "300"},{ "date": "2019-11-01", "Leads_Taken": "150", "Submissions": "450" ,"Funded": "250"},{ "date": "2019-12-01", "Leads_Taken": "100", "Submissions": "400" ,"Funded": "200"},{ "date": "2020-01-01", "Leads_Taken": "50", "Submissions": "350" ,"Funded": "150"},{ "date": "2020-02-01", "Leads_Taken": "200", "Submissions": "500" ,"Funded": "300"},{ "date": "2020-03-01", "Leads_Taken": "150", "Submissions": "450" ,"Funded": "250"},{ "date": "2020-04-01", "Leads_Taken": "100", "Submissions": "400" ,"Funded": "200"},{ "date": "2020-05-01", "Leads_Taken": "200", "Submissions": "500" ,"Funded": "300"},{ "date": "2020-06-01", "Leads_Taken": "150", "Submissions": "450" ,"Funded": "250"},{ "date": "2020-07-01", "Leads_Taken": "100", "Submissions": "400" ,"Funded": "200"},{ "date": "2020-08-01", "Leads_Taken": "50", "Submissions": "350" ,"Funded": "150"},{ "date": "2020-09-01", "Leads_Taken": "200", "Submissions": "500" ,"Funded": "300"},{ "date": "2020-10-01", "Leads_Taken": "150", "Submissions": "450" ,"Funded": "250"},{ "date": "2020-11-01", "Leads_Taken": "100", "Submissions": "400" ,"Funded": "200"},{ "date": "2020-12-01", "Leads_Taken": "200", "Submissions": "500" ,"Funded": "300"}]';
            var myData = JSON.parse(jsonString);
            var dataArray = [];
            var dataArray_a = [];
            var dataArray_b = [];
            $.each(myData, function (i, obj) {
                //console.log(obj.date);
                var d = new Date(obj.date);
                dataArray.push([Date.parse(d), parseInt(obj.Leads_Taken)]);
                dataArray_a.push([Date.parse(d), parseInt(obj.Submissions)]);
                dataArray_b.push([Date.parse(d), parseInt(obj.Funded)]);
            });

            $('#lead').highcharts({
                chart: {
                    type: 'line',
                    reflow: true
                },
                title: {},
                subtitle: {},
                legend: { enabled: false },
                plotOptions: {
                    series: {
                        //pointStart: pointStart,
                        pointInterval: 24 * 3600 * 1000 * 30
                    }
                },
                colors: [
                    '#8A3FB8',
                    '#3FA2B8',
                    '#3F68B8'
                ],
                xAxis: {
                    min: Date.UTC(2019, 09, 0),
                    //max: Date.UTC(2020, 10, 1),
                    //allowDecimals: false,
                    type: 'datetime',
                    tickInterval: 24 * 3600 * 1000 * 30, //one day
                    labels: {
                        rotation: 0,
                        format: '{value:%b}'
                    },

                },
                yAxis: {
                    allowDecimals: true,
                    labels: {
                        rotation: 0,
                        format: '${value}'
                    }
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
                            '<div class="chart revenue_graph">' +
                            '<div class="chart_title">' + moment(this.x).format("MMMM, Y") + '</div>' +
                            // '<div class="content_center m_t_10">' +
                            // '<div class="color_filled" style="background: #3FA2B8;"></div>' +
                            '<div>' +
                            '<div class="chart_value">' +
                            'Leads Taken' +
                            '</div>' +
                            '<div class="chart_expenses" style="color:#3FA2B8;">' +
                            this.points[0].y +
                            '</div>' +
                            '</div>' +
                            // '</div>' +
                            // '<div class="content_center m_t_10">' +
                            // '<div class="color_filled" style="background-color:#3F6FB8"></div>' +
                            '<div>' +
                            '<div class="chart_value">' +
                            'Submissions' +
                            '</div>' +
                            '<div class="chart_expenses" style="color:#3F6FB8">' +
                            this.points[1].y +
                            '</div>' +
                            '</div>' +
                            // '</div>' +
                            // '<div class="content_center m_t_10">' +
                            // '<div class="color_filled" style="background-></div>' +
                            '<div>' +
                            '<div class="chart_value">' +
                            'Funded' +
                            '</div>' +
                            '<div class="chart_expenses" style="color:#8A3FB8">' +
                            this.points[2].y +
                            '</div>' +
                            '</div>' +
                            // '</div>' +
                            '</div>';
                        return html;
                    }
                }
            });
            var chart = $('#lead').highcharts();

            // add first series values
            chart.addSeries({
                data: dataArray
            });

            // add second series values
            chart.addSeries({
                data: dataArray_a
            });

            // add third series values
            chart.addSeries({
                data: dataArray_b
            });

            //jquery to bind the datatable
            $('#team_lead').DataTable({
                //"scrollY":        "500px",
                "scrollCollapse": true,
                "pageLength": 25,
                "dom": 'rt<"bottom right"ip><"clear">',
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
                "bDestroy": true
            });
            $('#team_lead').fadeIn('slow');
            $('table.dataTable').fadeIn('slow');
            $('#team_lead').DataTable().draw();

            $('#leadstaken_table').DataTable({
                bFilter: false,
                bInfo: false,
                "paging": false,
                "bDestroy": true,
                "createdRow": function (row, data, dataIndex) {
                    //$(row).addClass('hand-pointer company');
                    $(row).click(function () {
                        var selected = $(row).hasClass("highlight");
                        $("table.dataTable tbody tr").removeClass("highlight");
                        if (!selected)
                            $(row).addClass("highlight");
                    });
                },
            });

            //jquery for export icon click event in leads tab
            $(document).on('click', '.export_leads_btn', function (e) {
                $('#leads-report-csv').submit();
            });
        }
    }

    function bindLeaderboard() {
        if ($('#leaderboard').is(':visible')) {
            // ============================================================================================================
            // setup configuration for the leaderboard listing
            //=============================================================================================================
            //jquery to bind the datatable
            $('#team_leaders').DataTable({
                //"scrollY": "600px",
                "scrollCollapse": true,
                "pageLength": 25,
                "dom": 'rt<"bottom right"ip><"clear">',
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
                "bDestroy": true
            });
            $('#team_leaders').fadeIn('slow');
            $('table.dataTable').fadeIn('slow');
            $('#team_leaders').DataTable().draw();
            $('#team_leaders').on('page.dt', function () {
                $('.dataTables_scrollBody').animate({
                    scrollTop: 0
                }, 'slow');
            });

            //jquery for export icon click event in leaderboard tab
            $(document).on('click', '.export_leaderboard_btn', function (e) {
                $('#leaderboard-report-csv').submit();
            });
        }
    }

    function bindGoals() {
        if ($('#goals').is(':visible')) {
            // ============================================================================================================
            // setup configuration for the goals listing
            //=============================================================================================================
            //jquery to bind the datatable
            goals_table = $('#goals_table').DataTable({
                //"scrollY": "600px",
                //"scrollCollapse": true,
                "pageLength": 25,
                "dom": 'rt<"bottom right"ip><"clear">',
                'columnDefs': [{
                    'orderable': false,
                    //'className': 'select-checkbox',
                    'targets': 0,
                    'checkboxes': {
                        'selectRow': true
                    }
                }],
                "createdRow": function (row, data, dataIndex) {
                    //$(row).addClass('hand-pointer company');
                    $(row).click(function () {
                        var selected = $(row).hasClass("highlight");
                        $("table.dataTable tbody tr").removeClass("highlight");
                        if (!selected)
                            $(row).addClass("highlight");
                    });
                },
                select: {
                    style: 'multi+shift',
                    selector: 'td:first-child'
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
                // order: [
                //     [1, 'asc']
                // ],
                "bDestroy": true
            });
            $('#goals_table').fadeIn('slow', function () {
                bindcheckboxclick();
            });
            $('table.dataTable').fadeIn('slow', function () {
                bindcheckboxclick();
            });
            $('#goals_table').DataTable().draw();

            //jQuery to bind the checkbox clicks
            bindcheckboxclick();

            $('#goals_table').on('draw.dt', function () {
                bindGoalViewPage();
                bindGoalsTooltip();
            });
            $('.dt-checkboxes-select-all').click(false);

            //multi select dropdown jQuery
            $('.dropdown_goals').dropdown({
                label: {
                    duration: 0,
                },
                debug: true,
                performance: true,
            });

            bindGoalsTooltip();

            //jquery to select all & deselect all option
            $('#goals_checkboxes').click(function () {
                if ($(this).is(':checked')) {
                    goals_table.column().checkboxes.select();
                } else {
                    goals_table.column().checkboxes.deselect();
                }
                setTimeout(function () {
                    calculateTotalSelected();
                }, 500);
            });

            //jquery to display the select all & deselect all option
            $('.goals_checkboxes').click(function () {
                $('.dropdown-checkbox').toggle();
                $('.integation_dropdown').toggleClass("custom_arrow");
            });

            //jquery to select all & deselect all the goals listing.
            $('.goals_select_all').each(function () {
                $(this).click(function () {
                    $('.dropdown-checkbox').toggle();
                    if ($(this).attr('data-table-bind') == 'current_page_users') {
                        goals_table.column().checkboxes.deselect();
                        $('#goals_table tbody input[type="checkbox"]:not(:checked)').trigger('click');
                        $('#goals_checkboxes').prop('indeterminate', true);
                    } else if ($(this).attr('data-table-bind') == 'select_all') {
                        goals_table.column().checkboxes.select();
                        $('#goals_checkboxes').prop('checked', true);
                        $('#goals_checkboxes').prop('indeterminate', false);
                    } else {
                        goals_table.column().checkboxes.deselect();
                        $('#goals_checkboxes').prop('checked', false);
                    }
                    setTimeout(function () {
                        calculateTotalSelected();

                    }, 500);
                });
            });
        }
    }

    function bindGoalsTooltip() {
        //show tooltip on progress bar hover
        $('.progress-bar').each(function () {
            $(this).tooltip({
                title: '' +
                    '<div class="">' +
                    '<div class="tooltip_title_2">Daily</div>' +
                    '<div class="content_center m_t_10">' +
                    // '<div class="color_filled blue_filled"></div>'+
                    '<div>' +
                    '<div class="chart_value_2">' +
                    $(this).attr('data-bind') +
                    '</div>' +
                    '<div class="chart_expenses_2">' +
                    '60 <span>/100</span>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>',
                html: true,
                placement: 'top'
            });
        });
    }

    // ============================================================================================================
    // jquery for the goals page start
    //=============================================================================================================
    // jquery to handle the checkbox
    function bindcheckboxclick() {
        // Handle click on checkbox
        $('#goals_table tbody, #goals_table thead').on('click', 'input[type="checkbox"]', function (e) {
            var $row = $(this).closest('tr');

            // Get row data
            var data = goals_table.row($row).data();

            if (typeof data !== 'undefined') {
                // Get row ID
                var rowId = data[0];

                // Determine whether row ID is in the list of selected row IDs
                var index = $.inArray(rowId, rows_selected);

                // If checkbox is checked and row ID is not in list of selected row IDs
                if (this.checked && index === -1) {
                    rows_selected.push(rowId);

                    // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
                } else if (!this.checked && index !== -1) {
                    rows_selected.splice(index, 1);
                }

                if (this.checked) {
                    $row.addClass('selected');
                } else {
                    $row.removeClass('selected');
                }

                //console.log(rows_selected);

                // Update state of "Select all" control
                updateDataTableSelectAllCtrl(goals_table);

                // Prevent click event from propagating to parent
                e.stopPropagation();
            } else {
                setTimeout(function () {
                    calculateTotalSelected();
                }, 500);
            }
        });
    }

    // Updates "Select all" control in a data table
    function updateDataTableSelectAllCtrl(table) {
        var $table = table.table().node();
        var $chkbox_all = $('tbody input[type="checkbox"]', $table);
        var $chkbox_checked = $('tbody input[type="checkbox"]:checked', $table);
        var chkbox_select_all = $('thead input[type="checkbox"]', $table).get(0);

        if ($chkbox_checked.length === 0) { // If none of the checkboxes are checked
            chkbox_select_all.checked = false;
            if ('indeterminate' in chkbox_select_all) {
                chkbox_select_all.indeterminate = false;
                $("#goals_checkboxes").prop("indeterminate", false);
            }
        } else if ($chkbox_checked.length === $chkbox_all.length) { // If all of the checkboxes are checked
            chkbox_select_all.checked = true;
            if ('indeterminate' in chkbox_select_all) {
                chkbox_select_all.indeterminate = false;
                $("#goals_checkboxes").prop("indeterminate", false);
            }
        } else { // If some of the checkboxes are checked
            chkbox_select_all.checked = true;
            if ('indeterminate' in chkbox_select_all) {
                chkbox_select_all.indeterminate = true;
                $("#goals_checkboxes").prop("indeterminate", true);
            }
        }

        calculateTotalSelected();
    }

    //jQuery to display the number of selected records againsts the checkboxes
    function calculateTotalSelected() {
        //var selected_row_cnt = goals_table.rows('.selected').data().length;
        var selected_row_cnt = goals_table.column(0).checkboxes.selected().length;
        var total_row_cnt = goals_table.rows().data().length;

        if (selected_row_cnt == 0) {
            $("#value_selected").hide();
            $('.new_goal').show();
            $('.create_goal').hide();
            $('.single_goal').hide();
            $('.multiple_goal').hide();
        } else if (selected_row_cnt == 1) {
            $("#value_selected").show();
            $('.new_goal').hide();
            $('.create_goal').hide();
            $('.single_goal').show();
            $('.multiple_goal').hide();
        } else {
            $("#value_selected").show();
            $('.new_goal').hide();
            $('.create_goal').hide();
            $('.single_goal').hide();
            $('.multiple_goal').show();
            $('.popup_total').html(selected_row_cnt + '/' + total_row_cnt);
        }
        $('#count-checked-checkboxes').html();
        $('#count-checked-checkboxes').html(selected_row_cnt + '/' + total_row_cnt);
    }

    //jQuery for redirecting user to specific user goal page
    function bindGoalViewPage() {
        $('.profile_name').click(function () {
            if ($(this).hasClass('not_assigned')) {
                window.location.href = $('#individual_goal_url_2').val();
            } else {
                window.location.href = $('#individual_goal_url').val();
            }
        });
    }

    //bind the jQuery on the page load for the users view goal page
    bindGoalViewPage();
    // ============================================================================================================
    // jquery for the goals page stop
    //=============================================================================================================

    function bindGoalsDetails() {
        if ($('#view_number_lo').is(':visible')) {
            setHighChartGlobalOpt();
            // ============================================================================================================
            // setup configuration for the goal view chart
            //=============================================================================================================
            var call_chart;
            var pointStart = Date.UTC(2020, 0, 1);
            var jsonString = '[{ "date": "2020-6-01", "total": "1", "average": "10" },{ "date": "2020-7-01", "total": "3", "average": "15" }, { "date": "2020-8-01", "total": "2", "average": "18" }, { "date": "2020-9-01", "total": "4", "average": "20" }, { "date": "2020-10-01", "total": "1", "average": "19" }, { "date": "2020-11-01", "total": "6", "average": "30" } ]';
            var myData = JSON.parse(jsonString);
            var dataArray = [];
            var dataArray_a = [];
            $.each(myData, function (i, obj) {
                //console.log(obj.date);
                var d = new Date(obj.date);
                dataArray.push([Date.parse(d), parseInt(obj.total)]);
                dataArray_a.push([Date.parse(d), parseInt(obj.average)]);
            });

            //setup configuration for the talk chart
            var talk_chart;
            var second_pointStart = Date.UTC(2020, 0, 1);
            var second_jsonString = '[{ "date": "2020-6-01", "total": "0.1", "average": "1.9" },{ "date": "2020-7-01", "total": "0.3", "average": "2.2" }, { "date": "2020-8-01", "total": "0.2", "average": "2.1" }, { "date": "2020-9-01", "total": "0.4", "average": "2.8" }, { "date": "2020-10-01", "total": "0.1", "average": "1.8" }, { "date": "2020-11-01", "total": "0.5", "average": "4" } ]';
            var second_myData = JSON.parse(second_jsonString);
            var second_dataArray = [];
            var second_dataArray_a = [];
            $.each(second_myData, function (i, obj) {
                //console.log(obj.date);
                var second_d = new Date(obj.date);
                second_dataArray.push([Date.parse(second_d), parseFloat(obj.average)]);
                second_dataArray_a.push([Date.parse(second_d), parseFloat(obj.total)]);
            });

            //setup configuration for the lo chart
            var lo_chart;
            var third_pointStart = Date.UTC(2020, 0, 1);
            var third_jsonString = '[{ "date": "2020-6-01", "total": "5", "average": "2", "funded": 1 },{ "date": "2020-7-01", "total": "8", "average": "4", "funded": 1 }, { "date": "2020-8-01", "total": "7", "average": "3", "funded": 1 }, { "date": "2020-9-01", "total": "13", "average": "5", "funded": 1 }, { "date": "2020-10-01", "total": "5", "average": "3", "funded": 1 }, { "date": "2020-11-01", "total": "20", "average": "7", "funded": 1 } ]';
            var third_myData = JSON.parse(third_jsonString);
            var third_dataArray = [];
            var third_dataArray_a = [];
            var third_dataArray_b = [];
            $.each(third_myData, function (i, obj) {
                //console.log(obj.date);
                var third_d = new Date(obj.date);
                third_dataArray.push([Date.parse(third_d), parseFloat(obj.total)]);
                third_dataArray_a.push([Date.parse(third_d), parseFloat(obj.average)]);
                third_dataArray_b.push([Date.parse(third_d), parseFloat(obj.funded)]);
            });

            //display the Calls chart
            $('#view_number_calls').highcharts({
                chart: { type: 'line' },
                title: {},
                subtitle: {},
                colors: [
                    '#B8883F',
                    '#3FB87E'
                ],
                legend: { enabled: false },
                plotOptions: {
                    series: {
                        pointStart: pointStart,
                        pointInterval: 24 * 3600 * 1000 * 30
                    }
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
                            '<div class="chart">' +
                            '<div class="chart_title">' + moment(this.x).format("MMMM, Y") + '</div>' +
                            //'<div class="content_center m_t_10">' +
                            //'<div class="color_filled" style="background-color: #B8883F;"></div>' +
                            '<div>' +
                            '<div class="chart_value">' +
                            'Total calls' +
                            '</div>' +
                            '<div class="chart_expenses" style="color: #3FB87E;">' +
                            this.points[0].y + 'h' +
                            '</div>' +
                            '</div>' +
                            //'</div>' +
                            //'<div class="content_center m_t_10">' +
                            //'<div class="color_filled" style="background-color:#3FB87E"></div>' +
                            '<div>' +
                            '<div class="chart_value">' +
                            'Daily average' +
                            '</div>' +
                            '<div class="chart_expenses" style="color:#B8883F;">' + (this.points[1].y) + 'h' +
                            '</div>' +
                            '</div>' +
                            '</div>' +
                            '</div>';
                        return html;
                    }
                },
                xAxis: {
                    min: Date.UTC(2020, 5, 0),
                    max: Date.UTC(2020, 10, 1),
                    //allowDecimals: false,
                    type: 'datetime',
                    tickInterval: 24 * 3600 * 1000 * 30, //one day
                    labels: {
                        rotation: 0,
                        format: '{value:%b}'
                    },

                },
                yAxis: {}
            });
            call_chart = $('#view_number_calls').highcharts();

            // add first series values
            call_chart.addSeries({
                data: dataArray
            });

            // add second series values
            call_chart.addSeries({
                data: dataArray_a
            });


            //display the Talk Times chart
            $('#view_number_talktime').highcharts({
                chart: { type: 'line' },
                title: {},
                colors: [
                    '#573FB8',
                    '#7DCEBF'
                ],
                subtitle: {},
                legend: { enabled: false },
                plotOptions: {
                    series: {
                        pointStart: pointStart,
                        pointInterval: 24 * 3600 * 1000 * 30
                    }
                },
                tooltip: {
                    shared: true,
                    useHTML: true,
                    borderWidth: 0,
                    backgroundColor: "rgba(255,255,255,0)",
                    borderRadius: 0,
                    shadow: false,
                    formatter: function () {
                        var second_html = '' +
                            '<div class="chart">' +
                            '<div class="chart_title">' + moment(this.x).format("MMMM, Y") + '</div>' +
                            //'<div class="content_center m_t_10">' +
                            //'<div class="color_filled" style="background: #573FB8;"></div>' +
                            '<div>' +
                            '<div class="chart_value">' +
                            'Total talk time' +
                            '</div>' +
                            '<div class="chart_expenses" style="color:#573FB8">' +
                            this.points[0].y + 'h' +
                            '</div>' +
                            '</div>' +
                            //'</div>' +
                            //'<div class="content_center m_t_10">' +
                            //'<div class="color_filled" style="background: #B83FAC;"></div>' +
                            '<div>' +
                            '<div class="chart_value">' +
                            'Daily average' +
                            '</div>' +
                            '<div class="chart_expenses" style="color:#7DCEBF;">' + (this.points[1].y) + 'h' +
                            '</div>' +
                            //'</div>' +
                            '</div>' +
                            '</div>';
                        return second_html;
                    }
                },
                xAxis: {
                    min: Date.UTC(2020, 5, 0),
                    max: Date.UTC(2020, 10, 1),
                    allowDecimals: true,
                    type: 'datetime',
                    tickInterval: 24 * 3600 * 1000 * 30, //one day
                    labels: {
                        rotation: 0,
                        format: '{value:%b}'
                    },

                },
                yAxis: {
                    allowDecimals: true,
                    labels: {
                        rotation: 0,
                        format: '{value}h'
                    }
                }
            });
            talk_chart = $('#view_number_talktime').highcharts();

            // add first series values
            talk_chart.addSeries({
                data: second_dataArray
            });

            // add second   series values
            talk_chart.addSeries({
                data: second_dataArray_a
            });


            //display the LO ($) chart
            $('#view_number_lo').highcharts({
                chart: { type: 'line' },
                title: {},
                subtitle: {},
                colors: [
                    '#3FA2B8',
                    '#3F6FB8',
                    '#8A3FB8'
                ],
                legend: { enabled: false },
                tooltip: {
                    shared: true,
                    useHTML: true,
                    borderWidth: 0,
                    backgroundColor: "rgba(255,255,255,0)",
                    borderRadius: 0,
                    shadow: false,
                    formatter: function () {
                        var html = '' +
                            '<div class="chart revenue_graph">' +
                            '<div class="chart_title">' + moment(this.x).format("MMMM, Y") + '</div>' +
                            // '<div class="content_center m_t_10">' +
                            // '<div class="color_filled" style="background: #3FA2B8;"></div>' +
                            '<div>' +
                            '<div class="chart_value">' +
                            'Leads Taken' +
                            '</div>' +
                            '<div class="chart_expenses" style="color:#3FA2B8;">' +
                            this.points[0].y +
                            '</div>' +
                            '</div>' +
                            // '</div>' +
                            // '<div class="content_center m_t_10">' +
                            // '<div class="color_filled" style="background-color:#3F6FB8"></div>' +
                            '<div>' +
                            '<div class="chart_value">' +
                            'Submissions' +
                            '</div>' +
                            '<div class="chart_expenses" style="color:#3F6FB8">' +
                            this.points[1].y +
                            '</div>' +
                            '</div>' +
                            // '</div>' +
                            // '<div class="content_center m_t_10">' +
                            // '<div class="color_filled" style="background-></div>' +
                            '<div>' +
                            '<div class="chart_value">' +
                            'Funded' +
                            '</div>' +
                            '<div class="chart_expenses" style="color:#8A3FB8">' +
                            this.points[2].y +
                            '</div>' +
                            '</div>' +
                            // '</div>' +
                            '</div>';
                        return html;
                    }
                },
                plotOptions: {
                    series: {
                        pointStart: pointStart,
                        pointInterval: 24 * 3600 * 1000 * 30
                    }
                },
                xAxis: {
                    min: Date.UTC(2020, 5, 0),
                    max: Date.UTC(2020, 10, 1),
                    //allowDecimals: false,
                    type: 'datetime',
                    tickInterval: 24 * 3600 * 1000 * 30, //one day
                    labels: {
                        rotation: 0,
                        format: '{value:%b}'
                    },

                },
                yAxis: {
                    allowDecimals: true,
                    labels: {
                        rotation: 0,
                        format: '${value}'
                    }
                }
            });
            lo_chart = $('#view_number_lo').highcharts();

            // add first series values
            lo_chart.addSeries({
                data: third_dataArray
            });

            // add second series values
            lo_chart.addSeries({
                data: third_dataArray_a
            });

            // add third series values
            lo_chart.addSeries({
                data: third_dataArray_b
            });
        }
        $('.add_value').click(function () {
            $('.empty_value').html('<input type="text" name="site_name" class="input_text m_b_0">');
        });

        $('.edit_single_goal_apply').click(function () {
            $('.add_value').html('<img src="' + $('#trash_img_url').val() + '" class="delete_value img-fluid" />')
        });
        $(document).on('click', '.delete_value', function (e) {
            $('.empty_value').html('<div class="not_assigned">Not assigned</div>');
            $('.add_value').html('<img src="' + $('#blue_plus_img_url').val() + '" class="delete_value img-fluid" />')
        });
    }

    function bindLoanFinanceChart() {
        if ($('#loanfinance').is(':visible')) {
            //jQuery for slide arrow click event
            $('.marketing_arrow_down').click(function () {
                if ($('.marketing_toggle_content').is(':visible') == false) {
                    $('.marketing_collapsible_integration_section').css({
                        "margin-top": "0",
                        "transform": "rotate(0deg)"
                    });
                    $('.content-wrapper').removeClass('empty_class');
                } else {
                    $('.marketing_collapsible_integration_section').css({
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


                $('.marketing_toggle_content').slideToggle('slow', function () {
                    //$('#marketing_target').DataTable().draw();
                });
            });
            //pie chart
            Highcharts.chart('loan-finance-pie-chart-container', {
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: 0,
                    plotShadow: false
                },
                credits: {
                    enabled: false
                },
                title: {
                    text: '',
                    align: 'center',
                    verticalAlign: 'middle',
                    y: 10
                },
                tooltip: {
                    shared: true,
                    useHTML: true,
                    borderWidth: 0,
                    backgroundColor: "rgba(255,255,255,0)",
                    borderRadius: 0,
                    shadow: false,
                    formatter: function () {
                        var html = '<div class="chart">' +
                            // '<div class="content_center m_t_10">' +
                            // '<div class="color_filled lightblue_filled">' +
                            // '</div>' +
                            // '<div>' +
                            '<div class="chart_value" style="margin-top:0px;">' +
                            this.point.name +
                            '</div>' +
                            '<div class="chart_expenses">' +
                            this.point.y +
                            '</div>' +
                            // '</div>' +
                            // '</div>' +
                            '</div>';
                        return html;
                    }
                },
                accessibility: {
                    point: {
                        valueSuffix: '%'
                    }
                },
                plotOptions: {
                    pie: {
                        dataLabels: {
                            enabled: true,
                            distance: -50,
                            style: {
                                fontWeight: 'bold',
                                color: 'white'
                            }
                        },
                        /* startAngle: -90,
                         endAngle: 90, */
                        center: ['50%', '50%'],
                        size: '110%'
                    },
                    series: {
                        states: {
                            hover: {
                                enabled: false
                            },
                            inactive: {
                                opacity: 1
                            }
                        }
                    }
                },
                series: [{
                    type: 'pie',
                    innerSize: '70%',
                    data: [{
                        name: 'Open',
                        y: 30,
                        dataLabels: {
                            enabled: false
                        },
                        color: 'rgb(50,70,211)'
                    }, {
                        name: 'Closed',
                        y: 70,
                        dataLabels: {
                            enabled: false
                        },
                        color: 'rgba(50,70,211, 0.2)'
                    }]
                }]
            });

            var team_loan_finance = $('#team_loan_finance').DataTable({
                "scrollCollapse": true,
                "pageLength": 25,
                "dom": 'rt<"bottom right"ip><"clear">',
                "language": {
                    "paginate": {
                        "next": '<img src="../svg/loanofficer/dashboard/right_arrow.png">',
                        "previous": '<img src="../svg/loanofficer/dashboard/left_arrow.png">'
                    }
                },
                "infoCallback": function (settings, start, end, max, total, pre) {
                    return "Showing " + start + " - " + end + " of " + total;
                },
                "bDestroy": true,
                "columns": [
                    {
                        "className": 'details-control',
                        "orderable": false,
                        "data": null,
                        "defaultContent": ''
                    },
                    { "data": "Contact" },
                    { "data": "Loan Officer" },
                    { "data": "File Status" },
                    { "data": "Status" },
                    { "data": "Rev. %" },
                    { "data": "Revenue" },
                    { "data": "Loan Amount" },
                    { "data": "Closed" },
                    { "data": "Funded" },
                    { "data": "Mark Complete" }
                ],
                'columnDefs': [{
                    "targets": [10],
                    'searchable': false,
                    'orderable': false,
                    'render': function (data, type, full, meta) {
                        return '<input type="checkbox" />';
                    }
                }],
                "createdRow": function (row, data, dataIndex) {
                    //$(row).addClass('hand-pointer company');
                    $(row).click(function () {
                        var selected = $(row).hasClass("highlight");
                        $("table.dataTable tbody tr").removeClass("highlight");
                        if (!selected)
                            $(row).addClass("highlight");
                    });
                },
            });
            $('#team_loan_finance').fadeIn('slow');
            $('table.dataTable').fadeIn('slow');
            $('#team_loan_finance').DataTable().draw();
            // Add event listener for opening and closing details
            $('#team_loan_finance tbody').on('click', 'td.details-control', function () {
                var tr = $(this).closest('tr');
                var row = team_loan_finance.row(tr);

                if (row.child.isShown()) {
                    // This row is already open - close it
                    row.child.hide();
                    tr.removeClass('shown');
                }
                else {
                    // Open this row
                    row.child(format(row.data())).show();
                    tr.addClass('shown');
                }
            });

            //jquery for export icon click event in loan finance tab
            $(document).on('click', '.export_loan_finance_btn', function (e) {
                $('#loan-finance-report-csv').submit();
            });
        }
    }

    /* Formatting function for row details - modify as you need */
    // function format(d) {
    //     // `d` is the original data object for the row
    //     return '<table style="padding-left:50px;width:100%;">' +
    //         '<tr>' +
    //         '<td>Full name:</td>' +
    //         '<td style="text-align:left">Test</td>' +
    //         '</tr>' +
    //         '<tr>' +
    //         '<td>Extension number:</td>' +
    //         '<td style="text-align:left">714</td>' +
    //         '</tr>' +
    //         '<tr>' +
    //         '<td style="border-bottom: none;">Extra info:</td>' +
    //         '<td style="border-bottom: none;text-align:left">And any further details here (images etc)...</td>' +
    //         '</tr>' +
    //         '</table>';
    // }
    function format(d) {
        // `d` is the original data object for the row
        return '<div class="d-flex">' +
        '<div class="loan-finance-accordion-table revenue-bg">' +
        '<div class="table-title justify-space-between">' +
        '<div><h5>Revenue</h5></div>' +
        '<div><h6>$0.00</h6></div>' +
        '</div>' +
        '<div class="loan-finance-accordion-table-data">' +
        '<table>' +
        '<thead>' +
        '<th>Amount</th>' +
        '<th>Description</th>' +
        '<th>Created</th>' +
        '</thead>' +
        '<tbody>' +
        '<tr>' +
        '<td>$195.00</td>' +
        '<td>Comapny Principle Reduction form First American Title(TX Team)</td>' +
        '<td>$195.00</td>' +
        '</tr>' +
        '<tr>' +
        '<td>$195.00</td>' +
        '<td>Comapny Principle Reduction form First American Title(TX Team)</td>' +
        '<td>$195.00</td>' +
        '</tr>' +
        '</tbody>' +
        '</table>' +
        '</div>' +
        '</div>' +
        '<div class="loan-finance-accordion-table expense-bg">' +
        '<div class="table-title justify-space-between">' +
        '<div><h5>Expense</h5></div>' +
        '<div><h6>$195.00</h6></div>' +
        '</div>' +
        '<div class="loan-finance-accordion-table-data">' +
        '<table>' +
        '<thead>' +
        '<th>Amount</th>' +
        '<th>Description</th>' +
        '<th>Created</th>' +
        '</thead>' +
        '<tbody>' +
        '<tr>' +
        '<td>$195.00</td>' +
        '<td>Comapny Principle Reduction form First American Title(TX Team)</td>' +
        '<td>$195.00</td>' +
        '</tr>' +
        '<tr>' +
        '<td>$195.00</td>' +
        '<td>Comapny Principle Reduction form First American Title(TX Team)</td>' +
        '<td>$195.00</td>' +
        '</tr>' +
        '</tbody>' +
        '</table>' +
        '</div>' +
        '</div>' +
        '</div>';
    }

    //jquery to bind the chart based on the tab viewed
    $('ul.all_reports li a').each(function () {
        $(this).click(function () {
            localStorage.setItem('report-activeTab', $(this).attr('href'));
            if ($(this).attr('href') == '#time') {
                setTimeout(function () {
                    bindTimeChart();
                }, 1000);
            } else if ($(this).attr('href') == '#call') {
                setTimeout(function () {
                    bindCallChart();
                }, 1000);
            } else if ($(this).attr('href') == '#revenue_tab') {
                setTimeout(function () {
                    bindRevenueChart();
                }, 1000);
            } else if ($(this).attr('href') == '#leads') {
                setTimeout(function () {
                    bindLeadChart();
                }, 1000);
            } else if ($(this).attr('href') == '#leaderboard') {
                setTimeout(function () {
                    bindLeaderboard();
                }, 1000);
            } else if ($(this).attr('href') == '#goals') {
                setTimeout(function () {
                    bindGoals();
                }, 1000);
            } else if ($(this).attr('href') == '#marketing') {
                setTimeout(function () {
                    bindMarketingRoi();
                    //bindMarketingRoiCharts();
                }, 1000);
            } else if ($(this).attr('href') == '#mailer') {
                setTimeout(function () {
                    bindMailer();
                }, 1000);
            } else if ($(this).attr('href') == '#loanfinance') {
                setTimeout(function () {
                    bindLoanFinanceChart();
                }, 1000);
            } else if ($(this).attr('href') == '#all-leads') {
                setTimeout(function () {
                    bindMarketingRoi();
                }, 1000);
            } else if ($(this).attr('href') == '#leads') {
                setTimeout(function () {
                    bindMarketingRoi();
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

    //comman function to load the chart on page load
    function initCharts() {
        setTimeout(function () {
            bindTimeChart();
            bindCallChart();
            bindRevenueChart();
            bindLeadChart();
            bindLeaderboard();
            bindGoals();
            bindGoalsDetails();
            bindMarketingRoi();
            bindMarketingRoiCharts();
            bindMailer();
            bindLoanFinanceChart();
        }, 500);
    }
    initCharts();
    //jquery to clear the search filter
    $('.btn_clear_filter').each(function () {
        $(this).click(function () {
            window.location.reload();
        });
    });
    $('[data-toggle=sidebar-colapse]').click(function () {
        setInterval(function () {
            if ($('#container2').is(':visible')) {
                $("#container2").highcharts().reflow();
            }
            if ($('#number_calls').is(':visible')) {
                $("#number_calls").highcharts().reflow();
                $("#number_talktime").highcharts().reflow();
                $("#number_lo").highcharts().reflow();
            }
            if ($('#revenue').is(':visible')) {
                $("#revenue").highcharts().reflow();
            }

            if ($('#lead').is(':visible')) {
                $("#lead").highcharts().reflow();
            }
            if ($('#pie-chart-container').is(':visible')) {
                $("#pie-chart-container").highcharts().reflow();
                $("#container").highcharts().reflow();
                $("#marketing-roi-container").highcharts().reflow();
            }

            if ($('#view_number_lo').is(':visible')) {
                $('#view_number_calls').highcharts().reflow();
                $('#view_number_talktime').highcharts().reflow();
                $('#view_number_lo').highcharts().reflow();
            }
        }, 1);
    });

    // ============================================================================================================
    // jquery for the marketing roi page
    //=============================================================================================================
    function bindMarketingRoi() {
        if ($('#marketing').is(':visible')) {
            //jQuery for initializing lead source dropdown
            $('.dropdown').dropdown({
                label: {
                    duration: 0,
                },
                debug: true,
                performance: true,
            });

            //jQuery for slide arrow click event
            $('.marketing_arrow_down').click(function () {
                if ($('.marketing_toggle_content').is(':visible') == false) {
                    $('.marketing_collapsible_integration_section').css({
                        "margin-top": "0",
                        "transform": "rotate(0deg)"
                    });
                    $('.content-wrapper').removeClass('empty_class');
                } else {
                    $('.marketing_collapsible_integration_section').css({
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


                $('.marketing_toggle_content').slideToggle('slow', function () {
                    //$('#marketing_target').DataTable().draw();
                });
            });

            //jQuery for initializing marketing roi datatable
            $('#marketing_target').DataTable({
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
            $('#marketing_target').fadeIn('slow');
            $('table.dataTable').fadeIn('slow');
            $('#marketing_target').DataTable().draw();

            //jquery to bind the table lead source expense popup
            $('#tablelead_source_expense').DataTable({
                bFilter: false,
                bInfo: false,
                "paging": false,
                "bDestroy": true,
                "createdRow": function (row, data, dataIndex) {
                    //$(row).addClass('hand-pointer company');
                    $(row).click(function () {
                        var selected = $(row).hasClass("highlight");
                        $("table.dataTable tbody tr").removeClass("highlight");
                        if (!selected)
                            $(row).addClass("highlight");
                    });
                },
            });

            //jquery to bind the table lead source revenue popup
            $('#tablelead_source_revenue').DataTable({
                bFilter: false,
                bInfo: false,
                "paging": false,
                "bDestroy": true,
                "createdRow": function (row, data, dataIndex) {
                    //$(row).addClass('hand-pointer company');
                    $(row).click(function () {
                        var selected = $(row).hasClass("highlight");
                        $("table.dataTable tbody tr").removeClass("highlight");
                        if (!selected)
                            $(row).addClass("highlight");
                    });
                },
            });

            //jquery to bind the table lead funded popup
            $('#tablelead_funded').DataTable({
                bFilter: false,
                bInfo: false,
                "paging": false,
                "bDestroy": true,
                "createdRow": function (row, data, dataIndex) {
                    //$(row).addClass('hand-pointer company');
                    $(row).click(function () {
                        var selected = $(row).hasClass("highlight");
                        $("table.dataTable tbody tr").removeClass("highlight");
                        if (!selected)
                            $(row).addClass("highlight");
                    });
                },
            });

            //jquery for export icon click event in marketing roi tab
            $(document).on('click', '.export_marketing_roi_btn', function (e) {
                $('#marketing-roi-csv').submit();
            });
        }

        // Pipline Leads Accordian-Script
        if ($('#pipeline-leads-accordian').is(':visible')) {
            //jQuery for initializing lead source dropdown
            $('.dropdown').dropdown({
                label: {
                    duration: 0,
                },
                debug: true,
                performance: true,
            });

            //jQuery for slide arrow click event
            $('#marketing_arrow_down').click(function () {
                if ($('.marketing_toggle_content').is(':visible') == false) {
                    $('.marketing_collapsible_integration_section').css({
                        "margin-top": "0",
                        "transform": "rotate(0deg)"
                    });
                    $('.content-wrapper').removeClass('empty_class');
                } else {
                    $('.marketing_collapsible_integration_section').css({
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


                $('.marketing_toggle_content').slideToggle('slow', function () {
                    //$('#marketing_target').DataTable().draw();
                });
            });

            //jQuery for initializing marketing roi datatable
            $('.marketing_target').DataTable({
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
            $('.marketing_target').fadeIn('slow');
            $('table.dataTable').fadeIn('slow');
            $('.marketing_target').DataTable().draw();

            //jquery to bind the table lead source expense popup
            $('#tablelead_source_expense').DataTable({
                bFilter: false,
                bInfo: false,
                "paging": false,
                "bDestroy": true,
                "createdRow": function (row, data, dataIndex) {
                    //$(row).addClass('hand-pointer company');
                    $(row).click(function () {
                        var selected = $(row).hasClass("highlight");
                        $("table.dataTable tbody tr").removeClass("highlight");
                        if (!selected)
                            $(row).addClass("highlight");
                    });
                },
            });

            //jquery to bind the table lead source revenue popup
            $('#tablelead_source_revenue').DataTable({
                bFilter: false,
                bInfo: false,
                "paging": false,
                "bDestroy": true,
                "createdRow": function (row, data, dataIndex) {
                    //$(row).addClass('hand-pointer company');
                    $(row).click(function () {
                        var selected = $(row).hasClass("highlight");
                        $("table.dataTable tbody tr").removeClass("highlight");
                        if (!selected)
                            $(row).addClass("highlight");
                    });
                },
            });

            //jquery to bind the table lead funded popup
            $('#tablelead_funded').DataTable({
                bFilter: false,
                bInfo: false,
                "paging": false,
                "bDestroy": true,
                "createdRow": function (row, data, dataIndex) {
                    //$(row).addClass('hand-pointer company');
                    $(row).click(function () {
                        var selected = $(row).hasClass("highlight");
                        $("table.dataTable tbody tr").removeClass("highlight");
                        if (!selected)
                            $(row).addClass("highlight");
                    });
                },
            });

            //jquery for export icon click event in marketing roi tab
            $(document).on('click', '.export_marketing_roi_btn', function (e) {
                $('#marketing-roi-csv').submit();
            });
        }
    }
    function bindMarketingRoiCharts() {

        // finance-chart
        Highcharts.chart('finance-revenue-chart', {
            chart: {
                plotBackgroundColor: null,
                align: 'left',
                plotBorderWidth: 0,
                plotShadow: false,
                reflow: false,
                height: 300
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
                    width: '28%',
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
                width: '72%',
                itemStyle : '{ "word-wrap": "break-word"}',
                itemPadding : 15,
                title: {
                    text: '<span class="legend-title">Revenue</span>',
                },
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
                    name: '<p class="graph_legends">Purchase deals</p> <h4 class="graph_value">&nbsp&nbsp $14,756.55 &nbsp&nbsp</h4> <p class="graph_percent">0.3%</p>',
                    color: '#99E891',
                    y: 61.41,
                    sliced: false,
                    selected: true
                }, {
                    name: '<p class="graph_legends">Refinance deals</p>&nbsp;<h4 class="graph_value">&nbsp&nbsp $14,756.55 &nbsp&nbsp</h4> <p class="graph_percent">0.3%</p>',
                    color: '#86D37F',
                    y: 11.84
                }, {
                    name: '<p class="graph_legends">Misc Revenue</p>&nbsp;<h4 class="graph_value">&nbsp&nbsp $14,756.55 &nbsp&nbsp</h4> <p class="graph_percent">0.3%</p>',
                    color: '#61C256',
                    y: 10.85
                }]
            }]
        });
        
        Highcharts.chart('finance-expense-chart', {
            chart: {
                plotBackgroundColor: null,
                align: 'left',
                plotBorderWidth: 0,
                plotShadow: false,
                height: 300
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
                    width: '28%',
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
                width: '72%',
                itemStyle : '{ "word-wrap": "break-word"}',
                itemPadding : 5,
                title: {
                    text: '<span class="legend-title">Expenses</span>',
                },
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
                    name: '<p class="graph_legends">Payroll </p> <h4 class="graph_value">&nbsp&nbsp $14,756.55 &nbsp&nbsp</h4> <p class="graph_percent">0.3%</p>',
                    color: '#EBB1DD',
                    y: 61.41,
                    sliced: false,
                    selected: true
                }, {
                    name: '<p class="graph_legends">UFMIP</p>&nbsp;<h4 class="graph_value">&nbsp&nbsp $14,756.55 &nbsp&nbsp</h4> <p class="graph_percent">0.3%</p>',
                    color: '#FFE483',
                    y: 11.84
                }, {
                    name: '<p class="graph_legends">Employee benefits</p>&nbsp;<h4 class="graph_value">&nbsp&nbsp $14,756.55 &nbsp&nbsp</h4> <p class="graph_percent">0.3%</p>',
                    color: '#8FD0F5',
                    y: 10.85
                },
                {
                    name: '<p class="graph_legends">Professional fees</p>&nbsp;<h4 class="graph_value">&nbsp&nbsp $14,756.55 &nbsp&nbsp</h4> <p class="graph_percent">0.3%</p>',
                    color: '#F37DA0',
                    y: 10.85
                },
                {
                    name: '<p class="graph_legends">Credit & VOE</p>&nbsp;<h4 class="graph_value">&nbsp&nbsp $110,004,756.55 &nbsp&nbsp</h4> <p class="graph_percent">90%</p>',
                    color: '#FDD2BD',
                    y: 10.85
                },
                {
                    name: '<p class="graph_legends">Software subscriptions</p>&nbsp;<h4 class="graph_value">&nbsp&nbsp $14,756.55 &nbsp&nbsp</h4> <p class="graph_percent">0.3%</p>',
                    color: '#8FCDD6',
                    y: 10.85
                },
                {
                    name: '<p class="graph_legends">Rent & mortgage</p>&nbsp;<h4 class="graph_value">&nbsp&nbsp $14,756.55 &nbsp&nbsp</h4> <p class="graph_percent">0.3%</p>',
                    color: '#B2B8FA',
                    y: 10.85
                },
                {
                    name: '<p class="graph_legends">Office expenses</p>&nbsp;<h4 class="graph_value">&nbsp&nbsp $14,756.55 &nbsp&nbsp</h4> <p class="graph_percent">0.3%</p>',
                    color: '#FAC7D6',
                    y: 10.85
                },
                {
                    name: '<p class="graph_legends">Utilities</p>&nbsp;<h4 class="graph_value">&nbsp&nbsp $14,756.55 &nbsp&nbsp</h4> <p class="graph_percent">0.3%</p>',
                    color: '#F6A5A5',
                    y: 10.85
                },
                {
                    name: '<p class="graph_legends">Marketing</p>&nbsp;<h4 class="graph_value">&nbsp&nbsp $14,756.55 &nbsp&nbsp</h4> <p class="graph_percent">0.3%</p>',
                    color: '#C5DFF7',
                    y: 10.85
                },
                {
                    name: '<p class="graph_legends">Appraisal</p>&nbsp;<h4 class="graph_value">&nbsp&nbsp $14,756.55 &nbsp&nbsp</h4> <p class="graph_percent">0.3%</p>',
                    color: '#F7A0EF',
                    y: 10.85
                },
                {
                    name: '<p class="graph_legends">Insurance</p>&nbsp;<h4 class="graph_value">&nbsp&nbsp $14,756.55 &nbsp&nbsp</h4> <p class="graph_percent">0.3%</p>',
                    color: '#869FF6',
                    y: 10.85
                },
                {
                    name: '<p class="graph_legends">IT</p>&nbsp;<h4 class="graph_value">&nbsp&nbsp $14,756.55 &nbsp&nbsp</h4> <p class="graph_percent">0.3%</p>',
                    color: '#A2DCE3',
                    y: 10.85
                },
                {
                    name: '<p class="graph_legends">Bank fees</p>&nbsp;<h4 class="graph_value">&nbsp&nbsp $14,756.55 &nbsp&nbsp</h4> <p class="graph_percent">0.3%</p>',
                    color: '#D091DF',
                    y: 10.85
                },
                {
                    name: '<p class="graph_legends">General</p>&nbsp;<h4 class="graph_value">&nbsp&nbsp $14,756.55 &nbsp&nbsp</h4> <p class="graph_percent">0.3%</p>',
                    color: '#7FB8D3',
                    y: 10.85
                },
                {
                    name: '<p class="graph_legends">Taxes</p>&nbsp;<h4 class="graph_value">&nbsp&nbsp $14,756.55 &nbsp&nbsp</h4> <p class="graph_percent">0.3%</p>',
                    color: '#A8FBFB',
                    y: 10.85
                }
                ]
            }]
        });

        //Chart 1
        Highcharts.chart('pie-chart-container', {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: 0,
                plotShadow: false
            },
            credits: {
                enabled: false
            },
            title: {
                text: '<p class="graph_label">Total Leads</p> <br><b class="graph_total">217</b>',
                align: 'center',
                verticalAlign: 'middle',
                y: 10
            },
            tooltip: {
                // formatter: function() {
                //     return this.point.name + '<br><b>'+this.point.y+'%</b>'
                // }
                shared: true,
                useHTML: true,
                borderWidth: 0,
                backgroundColor: "rgba(305,255,255,0)",
                borderRadius: 0,
                shadow: false,
                formatter: function () {
                    var html = '<div class="chart">' +
                        // '<div class="content_center m_t_10">'+
                        // '<div class="color_filled lightblue_filled">'+
                        // '</div>'+
                        // '<div>'+
                        '<div class="chart_value" style="margin-top:0px;">' +
                        this.point.name +
                        '</div>' +
                        '<div class="chart_expenses">' +
                        this.point.y +
                        '</div>' +
                        // '</div>'+
                        // '</div>'+
                        '</div>';

                    // var html = '<div class="chart">' +
                    //     '<div>' +
                    //     '<div class="chart_value">'+this.point.name+'</div>' +
                    //     '<div class="chart_expenses" style="color: rgba(50,70,211,0.5);">'+this.point.y+'</div>' +
                    //     '</div></div>';
                    return html;
                    //return '<b>'+this.x+'</b><br><b>No of loans </b>' + this.points[0].y + '<br> <b>Value </b>' + this.points[1].y;
                }
            },
            accessibility: {
                point: {
                    valueSuffix: '%'
                }
            },
            plotOptions: {
                pie: {
                    dataLabels: {
                        enabled: true,
                        distance: -50,
                        style: {
                            fontWeight: 'bold',
                            color: 'white'
                        }
                    },
                    /* startAngle: -90,
                     endAngle: 90, */
                    center: ['50%', '50%'],
                    size: '110%'
                },
                series: {
                    states: {
                        hover: {
                            enabled: false
                        },
                        inactive: {
                            opacity: 1
                        }
                    }
                }
            },
            series: [{
                type: 'pie',
                //name: 'Browser share',
                innerSize: '70%',
                data: [
                    {
                        name: 'Repeat Customer',
                        y: 58,
                        dataLabels: {
                            enabled: false
                        },
                        color: 'rgb(50,70,211)'
                    },
                    {
                        name: 'Facebook',
                        y: 13,
                        dataLabels: {
                            enabled: false
                        },
                        color: 'rgba(50,70,211, 0.2)'
                    },
                    {
                        name: 'Google',
                        y: 13,
                        dataLabels: {
                            enabled: false
                        },
                        color: 'rgba(50,70,211, 0.2)'
                    },
                    {
                        name: 'Mailiers',
                        y: 3,
                        dataLabels: {
                            enabled: false
                        },
                        color: 'rgba(50,70,211, 0.1)'
                    },
                    {
                        name: 'XFR',
                        y: 3,
                        dataLabels: {
                            enabled: false
                        },
                        color: 'rgba(50,70,211, 0.1)'
                    },
                    {
                        name: 'Zillow',
                        y: 7,
                        dataLabels: {
                            enabled: false
                        },
                        color: 'rgba(50,70,211, 0.1)'
                    },
                    {
                        name: 'Referrals',
                        y: 7,
                        dataLabels: {
                            enabled: false
                        },
                        color: 'rgba(50,70,211, 0.1)'
                    },
                    {
                        name: 'Rate table',
                        y: 7,
                        dataLabels: {
                            enabled: false
                        },
                        color: 'rgba(50,70,211, 0.1)'
                    },
                    {
                        name: 'MSA',
                        y: 7,
                        dataLabels: {
                            enabled: false
                        },
                        color: 'rgba(50,70,211, 0.1)'
                    },
                    {
                        name: 'FHA',
                        y: 7,
                        dataLabels: {
                            enabled: false
                        },
                        color: 'rgba(50,70,211, 0.1)'
                    },
                    {
                        name: 'Other',
                        y: 7,
                        dataLabels: {
                            enabled: false
                        },
                        color: 'rgba(50,70,211, 0.1)'
                    },
                    {
                        name: 'Other source',
                        y: 7,
                        dataLabels: {
                            enabled: false
                        },
                        color: 'rgba(50,70,211, 0.1)'
                    }
                ]
            }]
        });

        //jQuery for hovering over pie chart title
        $('.highcharts-title').hover(function () {
            $('.highcharts-title').tooltip({
                title: '<div class="">' +
                    // '<div class="content_center m_t_10">'+
                    // '<div class="color_filled lightblue_filled">'+
                    // '</div>'+
                    '<div>' +
                    '<div class="chart_value">' +
                    'Submitted' +
                    '</div>' +
                    '<div class="chart_expenses">' +
                    '70' +
                    '</div>' +
                    // '</div>'+
                    '</div>' +
                    // '<div class="content_center m_t_10">'+
                    // '<div class="color_filled lightblue_filled">'+
                    // '</div>'+
                    '<div>' +
                    '<div class="chart_value">' +
                    'Funded' +
                    '</div>' +
                    '<div class="chart_expenses">' +
                    '50' +
                    '</div>' +
                    // '</div>'+
                    '</div>' +
                    // '<div class="content_center m_t_10">'+
                    // '<div class="color_filled lightblue_filled">'+
                    // '</div>'+
                    '<div>' +
                    '<div class="chart_value">' +
                    'Ratio' +
                    '</div>' +
                    '<div class="chart_expenses">' +
                    '71%' +
                    '</div>' +
                    // '</div>'+
                    '</div>' +
                    '</div>',
                html: true,
                placement: 'top'
            });
        });

        //Chart 2
        Highcharts.chart('container', {
            chart: {
                zoomType: 'xy'
            },
            credits: {
                enabled: false
            },

            title: {
                text: ''
            },
            //        subtitle: {
            //            text: 'Source: WorldClimate.com'
            //        },
            xAxis: [{
                categories: ["Jun", "July", "Aug", "Sept", "Oct"],
                crosshair: true,
                labels: {
                    //enabled: false
                    style: {
                        color: '#9FA3C0'
                    }
                },
                lineWidth: 1
            }],
            plotOptions: {
                series: {
                    borderRadius: 10,
                    marker: {
                        enabled: false,
                        states: {
                            hover: {
                                lineWidth: 1.5,
                                lineWidthPlus: 0,
                                enabled: false,
                            }
                        }
                    }
                }
            },
            yAxis: [{ // Primary yAxis
                //            labels: {
                //                format: '{value}Â°C',
                //                style: {
                //                    color: Highcharts.getOptions().colors[1]
                //                }
                //            },
                opposite: true,
                title: {
                    text: null,
                    style: {
                        color: Highcharts.getOptions().colors[1]
                    }
                },
                labels: {
                    enabled: false,
                },
            },
            { // Secondary yAxis
                title: {
                    text: null,
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
                },
                lineWidth: 1,
                labels: {
                    //enabled: false
                    style: {
                        color: '#9FA3C0'
                    }
                }
            },
            ],
            tooltip: {
                shared: true,
                useHTML: true,
                borderWidth: 0,
                backgroundColor: "rgba(255,255,255,0)",
                borderRadius: 0,
                shadow: false,
                formatter: function () {
                    // var html = '<div class="chart">' +
                    //     '<div class="content_center m_t_10">'+
                    //     '<div class="color_filled lightblue_filled">'+
                    //     '</div>'+
                    //     '<div>'+
                    //     '<div class="chart_value">'+
                    //     'Avg' +
                    //     '</div>' +
                    //     '<div class="chart_expenses">'+
                    //     this.points[1].y+ '%' +
                    //     '</div>'+
                    //     '</div>'+
                    //     '</div>'+
                    //     '</div>';

                    var html = '<div class="chart">' +
                        '<div>' +
                        '<div class="chart_value">Avg</div>' +
                        '<div class="chart_expenses" style="color: #60698B;">' + this.points[1].y + '</div>' +
                        '</div></div>';
                    return html;
                    //return '<span style="font-size: 15px">Avg</span><br/><b>'+this.points[0].y+'</b>';
                    //return '<b>'+this.x+'</b><br><b>No of loans </b>' + this.points[0].y + '<br> <b>Value </b>' + this.points[1].y;
                }
            },
            legend: {
                enabled: false,
                layout: 'vertical',
                align: 'left',
                x: 120,
                verticalAlign: 'top',
                y: 100,
                floating: true,
                backgroundColor:
                    Highcharts.defaultOptions.legend.backgroundColor || // theme
                    'rgba(255,255,255,0.25)'
            },
            series: [{
                name: 'Number of loans',
                type: 'column',
                yAxis: 1,
                data: [16, 16, 4, 2, 21],
                color: 'rgba(50,70,211, 0.1)',
                pointWidth: 35,
                //            tooltip: {
                //                valueSuffix: ' mm'
                //            }

            }, {
                name: 'Value',
                type: 'spline',
                data: [28.54, 28.54, 28.54, 28.54, 28.54],
                color: 'rgb(50,70,211)',
                dashStyle: 'longdash',
                lineWidth: 1,
                states: {
                    hover: {
                        lineWidth: 1.5,
                        lineWidthPlus: 0,
                        enabled: false,
                    }
                }
                //            tooltip: {
                //                valueSuffix: 'Â°C'
                //            }
            }],
        }, function () { // on complete
            var chart = this;
            chart.renderer.text('Avg<br>' + chart.series[1].data[0].y + '%', 260, 80)
                .attr({
                    rotation: 0
                })
                .css({
                    fontFamily: '"Inter",serif',
                    fontStyle: 'normal',
                    fontWeight: '300',
                    fontSize: '10px',
                    lineHeight: '14px',
                    color: '#60698B',
                    whiteSpace: 'nowrap',
                    zIndex: '99999',
                    overflow: 'visible'
                })
                .add();

        });

        //Chart 3
        var d = new Date();
        var pointStart = d.getTime();
        Highcharts.setOptions({
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
            chart: {
                alignTicks: false,
                zoomType: 'x',
                type: 'line',
                //        margin: [60, 25, 100, 90],
                //borderRadius:10,
                //borderWidth:1,
                //borderColor:'rgba(156,156,156,.25)',
                //backgroundColor:'rgba(204,204,204,.25)',
                //plotBackgroundColor:'rgba(255,255,255,1)',
                //style: {
                //fontFamily: 'Abel,serif'
                //}
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
            plotOptions: {
                line: {
                    lineWidth: 1,
                    marker: {
                        enabled: true,
                        symbol: 'circle',
                        radius: 4
                    }
                },
            },
            xAxis: {
                title: {
                    text: '',
                    rotation: 0,
                    textAlign: 'center',
                    style: {
                        color: 'rgba(0,0,0,.9)'
                    }
                },
                labels: {
                    style: {
                        color: 'rgba(0,0,0,.9)',
                        fontSize: '9px'
                    }
                },
                lineWidth: .5,
                lineColor: 'rgba(0,0,0,.5)',
                tickWidth: .5,
                tickLength: 6,
                tickColor: 'rgba(0,0,0,.75)'
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
                        color: 'rgba(0,0,0,.9)',
                        fontSize: '9px'
                    }
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
            },
        });

        var chart;
        var pointStart = Date.UTC(2020, 0, 1);

        $('#marketing-roi-container').highcharts({
            chart: { type: 'line'},
            title: {},
            subtitle: {},
            legend: { enabled: false },
            plotOptions: {
                series: {
                    pointStart: pointStart,
                    pointInterval: 24 * 3600 * 1000 * 30
                }
            },
            xAxis: {
                //            min: Date.UTC(2020, 06, 0),
                //            max: Date.UTC(2020, 11, 1),
                //allowDecimals: false,
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
                labels: {
                    style: {
                        color: '#9FA3C0'
                    },
                    format: '{value}%',
                }
            }
        });
        chart = $('#marketing-roi-container').highcharts();


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
    }

    // ============================================================================================================
    // jquery for the mailer roi page
    //=============================================================================================================
    function bindMailer() {
        if ($('#mailer').is(':visible')) {
            //jQuery for initializing marketing roi datatable
            $('#mailer_table').DataTable({
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
                // "columnDefs" :[ {
                //     'targets': 0,
                //     'searchable': true,
                //     //'orderable': false,
                //     // 'className': 'dt-body-center',
                //     // 'render': function (data, type, full, meta) {
                //     //     return '';
                //     // },
                //     //"visible": false
                // }],
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
            $('#mailer_table').fadeIn('slow');
            $('table.dataTable').fadeIn('slow');
            $('#mailer_table').DataTable().draw();

            //jquery for export icon click event in mailer tab
            $('.export_mailer_btn').click(function () {
                $('#mailer-report-csv-form').submit();
            });
        }
    }
});