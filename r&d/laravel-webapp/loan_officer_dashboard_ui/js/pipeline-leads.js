jQuery.noConflict();
jQuery(document).ready(function ($) {
    $('.share-btn button.default-img').click(function () { 
        $('.share-btn').addClass('show');
    });
    $('.share-btn button.click-img').click(function () { 
        $('.share-btn').removeClass('show');
    });
// ================================================================= //
    function initCharts() {
        setTimeout(function () {
            proposalChart();
        }, 500);
    }
    $('.nav-tabs .nav-link').click(function(){
        if($(this).attr('href') == '#proposals'){
            initCharts(); 
        }
    });
    function setHighChartGlobalOpt() {
        Highcharts.setOptions({
            global: {
                useUTC: false
            },
            credits: {
                enabled: false
            },
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
                        '<div>' +
                        '<div class="chart_value">' +
                        'Total Interest Paid' +
                        '</div>' +
                        '<div class="chart_expenses">' +
                        '$' + this.points[0].y +
                        '</div>' +
                        '</div>' +
                        '</div>';
                    return html;
                }
            },/**/
        });
    }
    function proposalChart() {
        // Proposals Chart
        if ($('#proposals').is(':visible')) {
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
            $('#proposal-chart-1').highcharts({
                chart: {
                    type: 'line',
                    reflow: true
                },
                colors: [
                    '#3FB87E'
                ],
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
                yAxis: {
                    labels: {
                        rotation: 0,
                        formatter: function () {
                            return "$" + this.value + "k";
                        }
                    },
                }
            });
            var chart = $('#proposal-chart-1').highcharts();
            // add first series values
            chart.addSeries({
                data: dataArray,
                name: 'Total'
            });
            // proposal chart 2
            $('#proposal-chart-2').highcharts({
                chart: {
                    type: 'line',
                    reflow: true
                },
                colors: [
                    '#3F6FB8'
                ],
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
                yAxis: {
                    labels: {
                        rotation: 0,
                        formatter: function () {
                            return "$" + this.value + "k";
                        }
                    },
                }
            });
            var chart = $('#proposal-chart-2').highcharts();
            // add first series values
            chart.addSeries({
                data: dataArray,
                name: 'Total'
            });
            

        }        
    }
    var pipeline_leads;
    jcf.replace('.table-dropdown select');
    jcf.replace('input[type="number"]');

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
    // Columns Filter
    $('.all-select-columns .dt-checkboxes').click(function () {
        if ($(this).is(':checked')) {
            $('input.dt-checkboxes').prop('checked', true).change();
        }
        else {
            $('input.dt-checkboxes').prop('checked', false).change();
        }
    });
    // All Select Doc.
    $('.all-select-documents .dt-checkboxes').click(function () {
        if ($(this).is(':checked')) {
            $('input.dt-checkboxes').prop('checked', true).change();
        }
        else {
            $('input.dt-checkboxes').prop('checked', false).change();
        }
    });
    $('.category-1 .dt-checkboxes').click(function () {
        if ($(this).is(':checked')) {
            $('#collapseEight input.dt-checkboxes').prop('checked', true).change();
        }
        else {
            $('#collapseEight input.dt-checkboxes').prop('checked', false).change();
        }
    });
    $('.category-2 .dt-checkboxes').click(function () {
        if ($(this).is(':checked')) {
            $('#collapseNine input.dt-checkboxes').prop('checked', true).change();
        }
        else {
            $('#collapseNine input.dt-checkboxes').prop('checked', false).change();
        }
    });
    $('.category-3 .dt-checkboxes').click(function () {
        if ($(this).is(':checked')) {
            $('#collapseTen input.dt-checkboxes').prop('checked', true).change();
        }
        else {
            $('#collapseTen input.dt-checkboxes').prop('checked', false).change();
        }
    });
    $('.category-4 .dt-checkboxes').click(function () {
        if ($(this).is(':checked')) {
            $('#collapseEleven input.dt-checkboxes').prop('checked', true).change();
        }
        else {
            $('#collapseEleven input.dt-checkboxes').prop('checked', false).change();
        }
    });
    //All/UnSelect PDF Doc
    $('.document-list .dt-checkboxes').on('change',function(){  
        // console.log(this);
        if( $(this).is(":checked") ){
            $('#delete-tab .documents-tab').append('<div id="'+$(this).data('id')+'" class="doc-info-list justify-space-between"> <p class="doc-1">'+$(this).data('filename')+'</p>'+'<button class="bg-none" data-toggle="modal" data-target="#delete-document"><img src="images/x-circle-blk.svg" alt="delete-blk-ic"/></button> </div> ');
        }
        else{
            $('#delete-tab').find('.documents-tab').first().find('#'+$(this).data('id')).remove();
        }
    })
    $('.document-list .dt-checkboxes').on('change',function(){  
        // console.log(this);
        if( $(this).is(":checked") ){
            $('#download-tab .documents-tab').append('<div id="'+$(this).data('id')+'" class="doc-info-list justify-space-between"> <p class="doc-1">'+$(this).data('filename')+'</p>'+'<button class="bg-none" data-toggle="modal" data-target="#delete-document"><img src="images/x-circle-blk.svg" alt="delete-blk-ic"/></button> </div> ');
        }
        else{
            $('#download-tab').find('.documents-tab').first().find('#'+$(this).data('id')).remove();
        }
    })
    $('.document-list .dt-checkboxes').on('change',function(){  
        // console.log(this);
        if( $(this).is(":checked") ){
            $('#move-tab .documents-tab').append('<div id="'+$(this).data('id')+'" class="doc-info-list justify-space-between"> <p class="doc-1">'+$(this).data('filename')+'</p>'+'<button class="bg-none" data-toggle="modal" data-target="#delete-document"><img src="images/x-circle-blk.svg" alt="delete-blk-ic"/></button> </div> ');
        }
        else{
            $('#move-tab').find('.documents-tab').first().find('#'+$(this).data('id')).remove();
        }
    })
    
    //Add Assets Jquery
    var tbody = $('#add-assets').children('tbody');
    //Then if no tbody just select your table 
    var table = tbody.length ? tbody : $('#add-assets');
    //Add row
    $('.assets-blk .blue_btn').click(function(){
        table.append('<tr><td> <div class="form-group has-search"> <input type="text" class="form-control p_l_10" placeholder="Assets name" /> </div> </td> <td> <div class="form-group has-search"> <input type="text" class="form-control p_l_10" placeholder="Assets Value" /> </div> </td> <td class="text-center"> <button class="bg-none"><img src="images/profile_trash.png" class="img-fluid" data-toggle="modal" data-target="#delete-assets" /></button> </td></tr>');
    })
    //==================
    $('.tick-finalise').click(function(){
        var no = $(this).attr('data-bind');
         $('.tick_finalise_' + no).toggleClass('show');
     });
    // ================================================================= //
    //jquery to bind the chart based on the tab viewed
    $('ul.all_reports li a').each(function () {
        $(this).click(function () {
            localStorage.setItem('report-activeTab', $(this).attr('href'));
            if ($(this).attr('href') == '##all-leads') {
                setTimeout(function () {
                    bindPipelineLeads();
                }, 1000);
            } else if ($(this).attr('href') == '#leads') {
                setTimeout(function () {
                    bindPipelineLeads();
                }, 1000);
            } else if ($(this).attr('href') == '#disclosure-out') {
                setTimeout(function () {
                    bindPipelineLeads();
                }, 1000);
            } else if ($(this).attr('href') == '#processing') {
                setTimeout(function () {
                    bindPipelineLeads();
                }, 1000);
            } else if ($(this).attr('href') == '#closed') {
                setTimeout(function () {
                    bindPipelineLeads();
                }, 1000);
            } else if ($(this).attr('href') == '#declined') {
                setTimeout(function () {
                    bindPipelineLeads();
                }, 1000);
            } 
            //jquery to activate the tab which last visited
            if (activeTab) {
                $('ul.all_reports li.nav-item a').removeClass('active');
                if (activeTab) {
                    $('.tab-content .tab-pane').each(function () {
                        $(this).addClass('active');
                    });
                        $(this).removeClass('active');
                }
            }
        });
    });
    // ================================================================= //
    $('.columns-btn').each(function () { 
        $(this).click(function () {
            $('.columns-modal').toggle();  
            $('.filters-modal').hide();  
            $('.filters-btn') .removeClass('show')
            if($('.columns-modal').is(':visible')){
                $(this).addClass('show')
                $('.pipeline-leads-main-sec').addClass('show'); 
            } else {
                $(this).removeClass('show')
                $('.pipeline-leads-main-sec').removeClass('show'); 
            }
        });
    });
    $('.filters-btn').each(function () { 
        $(this).click(function () {
            $('.columns-modal').hide();  
            $('.filters-modal').toggle();
            $('.columns-btn') .removeClass('show')
            if($('.filters-modal').is(':visible')){
                $(this).addClass('show')
                $('.pipeline-leads-main-sec').addClass('show'); 
            } else {
                $(this).removeClass('show')
                $('.pipeline-leads-main-sec').removeClass('show'); 
            }
        });
    });
    $('.add-filter .add-filter-link').click(function () { 
        $('.filters-modal').addClass('show');
    });
    $('.add-filter .hide-filter-link').click(function () { 
        $('.filters-modal').removeClass('show');
    });
    $('.purchase-btn').each(function () { 
        $(this).click(function () {
            $('.refinance-btn') .removeClass('show')
            $('.purchase-link') .addClass('show')
            $('.refinance-link') .removeClass('show')
            if($('.purchase-btn').is(':visible')){      
                $(this).addClass('show') 
                $('.select-loan-type').removeClass('show');
            } else {
                $(this).removeClass('show') 
            }
        });
    });
    $('.refinance-btn').each(function () { 
        $(this).click(function () {
            $('.purchase-btn') .removeClass('show')
            $('.refinance-link') .addClass('show')
            $('.purchase-link') .removeClass('show')
            if($('.refinance-btn').is(':visible')){ 
                $(this).addClass('show')
                $('.select-loan-type').addClass('show');
            } else{
                $(this).removeClass('show')
                $('.select-loan-type').removeClass('show');
            }
        });
    });
    $('.action-btn button').click(function () { 
        $('.action-btn').toggleClass('show');
    });
    $('.proposal-action-btn button').click(function () { 
        $('.proposal-action-btn').toggleClass('show');
    })
    $('.show-more-link').click(function () { 
        $('.email-desc').toggleClass('show');
    });
    //jquery to clear the search filter
    $('.btn_clear_filter').each(function () {
        $(this).click(function () {
            window.location.reload();
        });
    });
    $('#sms-active').click(function () { 
        $('.send-email-sms-modal .nav-tabs .nav-link').addClass('active');
        $('.send-email-sms-modal .tab-pane.sms-tab-pane').addClass('active');
        $('.send-email-sms-modal .nav-tabs .nav-item.email-tab .nav-link').removeClass('active');
        $('.send-email-sms-modal .tab-pane.email-tab-pane').removeClass('active');
    });
    $('#email-active').click(function () { 
        $('.send-email-sms-modal .nav-tabs .nav-link').addClass('active');
        $('.send-email-sms-modal .tab-pane.email-tab-pane').addClass('active');
        $('.send-email-sms-modal .nav-tabs .nav-item.sms-tab .nav-link').removeClass('active');
        $('.send-email-sms-modal .tab-pane.sms-tab-pane').removeClass('active');
    });
    // ================================================================= //
    bindRunPricing();
    function bindRunPricing() {
        if ($('.run-pricing-table').is(':visible')) {
            var run_pricing = $('#run-pricing-table').DataTable({
                "columns": [
                    {
                        "className": 'details-control',
                        "orderable": false,
                        "data": null,
                        "defaultContent": ''
                    },
                    { "data": "Product / Investor" },
                    { "data": "Rate" },
                    { "data": "15 Days" },
                    { "data": "30 Days" },
                    { "data": "45 Days" },
                    { "data": "60 Days" },
                    { "data": "90 Days" }
                ],
            });
            $('#run-pricing-table').fadeIn('slow');
            $('table.dataTable').fadeIn('slow');
            $('#run-pricing-table').DataTable().draw();
            // Add event listener for opening and closing details
            $('.run-pricing-table #run-pricing-table tbody').on('click', 'td.details-control', function () {
                var tr = $(this).closest('tr');
                var row = run_pricing.row(tr);

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
        }
    }
    /* Formatting function for row details - modify as you need */
    function format(d) {
        // `d` is the original data object for the row
        return '<table style="width:100%;" class="accodion-run-pricing-table">' +
            '<tr>' +
            '<td></td>'+
            '<td></td>' +
            '<td><p>2.250%</p><p>2.300%</p><p>2.375%</p></td>' +
            '<td><a href="javascript:;" data-toggle="modal" data-target="#confirm-rate-modal">+6.750%<img src="http://sigmadev.beta.loanofficer.ai/svg/loanofficer/dashboard/info_blue.png"class="img-fluid area_code"><div class="tool_tip">Lorem ipsum, or lipsum as it issometimes known, is dummy text used inlaying out print, graphic or webdesigns.</div></a><a href="javascript:;" data-toggle="modal" data-target="#confirm-rate-modal">+6.750%<img src="http://sigmadev.beta.loanofficer.ai/svg/loanofficer/dashboard/info_blue.png"class="img-fluid area_code"><div class="tool_tip">Lorem ipsum, or lipsum as it issometimes known, is dummy text used inlaying out print, graphic or webdesigns.</div></a><a href="javascript:;" data-toggle="modal" data-target="#confirm-rate-modal">+6.750%<img src="http://sigmadev.beta.loanofficer.ai/svg/loanofficer/dashboard/info_blue.png"class="img-fluid area_code"><div class="tool_tip">Lorem ipsum, or lipsum as it issometimes known, is dummy text used inlaying out print, graphic or webdesigns.</div></a></td>'+
            '<td><a href="javascript:;" data-toggle="modal" data-target="#confirm-rate-modal">+6.750%<img src="http://sigmadev.beta.loanofficer.ai/svg/loanofficer/dashboard/info_blue.png"class="img-fluid area_code"><div class="tool_tip">Lorem ipsum, or lipsum as it issometimes known, is dummy text used inlaying out print, graphic or webdesigns.</div></a><a href="javascript:;" data-toggle="modal" data-target="#confirm-rate-modal">+6.750%<img src="http://sigmadev.beta.loanofficer.ai/svg/loanofficer/dashboard/info_blue.png"class="img-fluid area_code"><div class="tool_tip">Lorem ipsum, or lipsum as it issometimes known, is dummy text used inlaying out print, graphic or webdesigns.</div></a><a href="javascript:;" data-toggle="modal" data-target="#confirm-rate-modal">+6.750%<img src="http://sigmadev.beta.loanofficer.ai/svg/loanofficer/dashboard/info_blue.png"class="img-fluid area_code"><div class="tool_tip">Lorem ipsum, or lipsum as it issometimes known, is dummy text used inlaying out print, graphic or webdesigns.</div></a></td>'+
            '<td><a href="javascript:;" data-toggle="modal" data-target="#confirm-rate-modal">+6.750%<img src="http://sigmadev.beta.loanofficer.ai/svg/loanofficer/dashboard/info_blue.png"class="img-fluid area_code"><div class="tool_tip">Lorem ipsum, or lipsum as it issometimes known, is dummy text used inlaying out print, graphic or webdesigns.</div></a><a href="javascript:;" data-toggle="modal" data-target="#confirm-rate-modal">+6.750%<img src="http://sigmadev.beta.loanofficer.ai/svg/loanofficer/dashboard/info_blue.png"class="img-fluid area_code"><div class="tool_tip">Lorem ipsum, or lipsum as it issometimes known, is dummy text used inlaying out print, graphic or webdesigns.</div></a><a href="javascript:;" data-toggle="modal" data-target="#confirm-rate-modal">+6.750%<img src="http://sigmadev.beta.loanofficer.ai/svg/loanofficer/dashboard/info_blue.png"class="img-fluid area_code"><div class="tool_tip">Lorem ipsum, or lipsum as it issometimes known, is dummy text used inlaying out print, graphic or webdesigns.</div></a></td>'+
            '<td><a href="javascript:;" data-toggle="modal" data-target="#confirm-rate-modal">+6.750%<img src="http://sigmadev.beta.loanofficer.ai/svg/loanofficer/dashboard/info_blue.png"class="img-fluid area_code"><div class="tool_tip">Lorem ipsum, or lipsum as it issometimes known, is dummy text used inlaying out print, graphic or webdesigns.</div></a><a href="javascript:;" data-toggle="modal" data-target="#confirm-rate-modal">+6.750%<img src="http://sigmadev.beta.loanofficer.ai/svg/loanofficer/dashboard/info_blue.png"class="img-fluid area_code"><div class="tool_tip">Lorem ipsum, or lipsum as it issometimes known, is dummy text used inlaying out print, graphic or webdesigns.</div></a><a href="javascript:;" data-toggle="modal" data-target="#confirm-rate-modal">+6.750%<img src="http://sigmadev.beta.loanofficer.ai/svg/loanofficer/dashboard/info_blue.png"class="img-fluid area_code"><div class="tool_tip">Lorem ipsum, or lipsum as it issometimes known, is dummy text used inlaying out print, graphic or webdesigns.</div></a></td>'+
            '<td><a href="javascript:;" data-toggle="modal" data-target="#confirm-rate-modal">+6.750%<img src="http://sigmadev.beta.loanofficer.ai/svg/loanofficer/dashboard/info_blue.png"class="img-fluid area_code"><div class="tool_tip">Lorem ipsum, or lipsum as it issometimes known, is dummy text used inlaying out print, graphic or webdesigns.</div></a><a href="javascript:;" data-toggle="modal" data-target="#confirm-rate-modal">+6.750%<img src="http://sigmadev.beta.loanofficer.ai/svg/loanofficer/dashboard/info_blue.png"class="img-fluid area_code"><div class="tool_tip">Lorem ipsum, or lipsum as it issometimes known, is dummy text used inlaying out print, graphic or webdesigns.</div></a><a href="javascript:;" data-toggle="modal" data-target="#confirm-rate-modal">+6.750%<img src="http://sigmadev.beta.loanofficer.ai/svg/loanofficer/dashboard/info_blue.png"class="img-fluid area_code"><div class="tool_tip">Lorem ipsum, or lipsum as it issometimes known, is dummy text used inlaying out print, graphic or webdesigns.</div></a></td>'+
            '</tr>' +
            '</table>';
    }
    // ================================================================= //
    bindPipelineLeads();
    function bindPipelineLeads() {
        // Proposals Chart
        if ($('#proposal-chart-1').is(':visible')) {
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
            $('#proposal-chart-1').highcharts({
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
            var chart = $('#proposal-chart-1').highcharts();
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

        }        
        // Pipline Leads Accordian-Script
        if ($('.pipeline-leads-main-sec').is(':visible')) {
            //jQuery for initializing lead source dropdown
            $('.dropdown_states').dropdown({
                label: {
                    duration: 0,
                },
                debug: true,
                performance: true,
            });

            //jQuery for loan slide arrow click event
            $('.loan_arrow_down').click(function () {
                if ($('.loan_toggle_content').is(':visible') == false) {
                    $('.loan_arrow_down .marketing_collapsible_integration_section').css({
                        "margin-top": "0",
                        "transform": "rotate(0deg)"
                    });
                    $('.content-wrapper').removeClass('empty_class');
                } else {
                    $('.loan_arrow_down .marketing_collapsible_integration_section').css({
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


                $('.loan_toggle_content').slideToggle('slow', function () {
                    //$('#marketing_target').DataTable().draw();
                });
            });

            //jQuery for application slide arrow click event
            $('.application_arrow_down').click(function () {
                if ($('.application_toggle_content').is(':visible') == false) {
                    $('.application_arrow_down .marketing_collapsible_integration_section').css({
                        "margin-top": "0",
                        "transform": "rotate(0deg)"
                    });
                    $('.content-wrapper').removeClass('empty_class');
                } else {
                    $('.application_arrow_down .marketing_collapsible_integration_section').css({
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


                $('.application_toggle_content').slideToggle('slow', function () {
                    //$('#marketing_target').DataTable().draw();
                });
            });

            //jQuery for initializing pipline table 1
            pipeline_leads = $('#all-leads-table').DataTable({
                //"scrollY": "100%",
                "bDestroy": true,
                // "scrollX":        "100%",
                // "height": "350px;"
                "dom": 'rt<"bottom right"ip><"clear">',
                "dom": '<"top right">rt<"bottom right"ip><"clear">',
                "lengthChange": true,
                "lengthMenu": [[10, 20, 30, -1], [10, 20, 30, "All"]],
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
                }
                //"paging":         false,
                // "pagingType": "full_numbers",
                // "full_numbers": true
            });
            $('#all-leads-table').fadeIn('slow');
            $('table.dataTable').fadeIn('slow');
            $('#all-leads-table').DataTable().draw();

            $('#all-leads-table').fadeIn('slow', function () {
                bindcheckboxclick();
            });
            $('table.dataTable').fadeIn('slow', function () {
                bindcheckboxclick();
            });
            $('#all-leads-table').DataTable().draw();
                bindcheckboxclick();
            //jquery to select all & deselect all option
            $('.goals_checkboxes_all').click(function () {
                if ($(this).is(':checked')) {
                    pipeline_leads.column().checkboxes.select();
                } else {
                    pipeline_leads.column().checkboxes.deselect();
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
                        pipeline_leads.column().checkboxes.deselect();
                        $('#all-leads-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
                        $('.goals_checkboxes_all').prop('indeterminate', true);
                    } else if ($(this).attr('data-table-bind') == 'select_all') {
                        pipeline_leads.column().checkboxes.select();
                        $('.goals_checkboxes_all').prop('checked', true);
                        $('.goals_checkboxes_all').prop('indeterminate', false);
                    } else {
                        pipeline_leads.column().checkboxes.deselect();
                        $('.goals_checkboxes_all').prop('checked', false);
                    }
                    setTimeout(function () {
                        calculateTotalSelected();

                    }, 500);
                });
            });
            //jQuery for initializing pipline table 2
            pipeline_leads = $('#all-leads-table-2').DataTable({
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
                }
                //"paging":         false,
                // "pagingType": "full_numbers",
                // "full_numbers": true
            });
            $('#all-leads-table-2').fadeIn('slow');
            $('table.dataTable').fadeIn('slow');
            $('#all-leads-table-2').DataTable().draw();

            $('#all-leads-table-2').fadeIn('slow', function () {
                bindcheckboxclick();
            });
            $('table.dataTable').fadeIn('slow', function () {
                bindcheckboxclick();
            });
            $('#all-leads-table-2').DataTable().draw();
                bindcheckboxclick();
            //jquery to select all & deselect all option
            $('.goals_checkboxes_all').click(function () {
                if ($(this).is(':checked')) {
                    pipeline_leads.column().checkboxes.select();
                } else {
                    pipeline_leads.column().checkboxes.deselect();
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
                        pipeline_leads.column().checkboxes.deselect();
                        $('#all-leads-table-2 tbody input[type="checkbox"]:not(:checked)').trigger('click');
                        $('.goals_checkboxes_all').prop('indeterminate', true);
                    } else if ($(this).attr('data-table-bind') == 'select_all') {
                        pipeline_leads.column().checkboxes.select();
                        $('.goals_checkboxes_all').prop('checked', true);
                        $('.goals_checkboxes_all').prop('indeterminate', false);
                    } else {
                        pipeline_leads.column().checkboxes.deselect();
                        $('.goals_checkboxes_all').prop('checked', false);
                    }
                    setTimeout(function () {
                        calculateTotalSelected();

                    }, 500);
                });
            });
            //jQuery for initializing pipline table 3
            pipeline_leads = $('#disclosure-out-table').DataTable({
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
                }
                //"paging":         false,
                // "pagingType": "full_numbers",
                // "full_numbers": true
            });
            $('#disclosure-out-table').fadeIn('slow');
            $('table.dataTable').fadeIn('slow');
            $('#disclosure-out-table').DataTable().draw();

            $('#disclosure-out-table').fadeIn('slow', function () {
                bindcheckboxclick();
            });
            $('table.dataTable').fadeIn('slow', function () {
                bindcheckboxclick();
            });
            $('#disclosure-out-table').DataTable().draw();
                bindcheckboxclick();
            //jquery to select all & deselect all option
            $('.goals_checkboxes_all').click(function () {
                if ($(this).is(':checked')) {
                    pipeline_leads.column().checkboxes.select();
                } else {
                    pipeline_leads.column().checkboxes.deselect();
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
                        pipeline_leads.column().checkboxes.deselect();
                        $('#disclosure-out-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
                        $('.goals_checkboxes_all').prop('indeterminate', true);
                    } else if ($(this).attr('data-table-bind') == 'select_all') {
                        pipeline_leads.column().checkboxes.select();
                        $('.goals_checkboxes_all').prop('checked', true);
                        $('.goals_checkboxes_all').prop('indeterminate', false);
                    } else {
                        pipeline_leads.column().checkboxes.deselect();
                        $('.goals_checkboxes_all').prop('checked', false);
                    }
                    setTimeout(function () {
                        calculateTotalSelected();

                    }, 500);
                });
            });
            //jQuery for initializing pipline table 4
            pipeline_leads = $('#processing-table').DataTable({
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
                }
                //"paging":         false,
                // "pagingType": "full_numbers",
                // "full_numbers": true
            });
            $('#processing-table').fadeIn('slow');
            $('table.dataTable').fadeIn('slow');
            $('#processing-table').DataTable().draw();

            $('#processing-table').fadeIn('slow', function () {
                bindcheckboxclick();
            });
            $('table.dataTable').fadeIn('slow', function () {
                bindcheckboxclick();
            });
            $('#processing-table').DataTable().draw();
                bindcheckboxclick();
            //jquery to select all & deselect all option
            $('.goals_checkboxes_all').click(function () {
                if ($(this).is(':checked')) {
                    pipeline_leads.column().checkboxes.select();
                } else {
                    pipeline_leads.column().checkboxes.deselect();
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
                        pipeline_leads.column().checkboxes.deselect();
                        $('#processing-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
                        $('.goals_checkboxes_all').prop('indeterminate', true);
                    } else if ($(this).attr('data-table-bind') == 'select_all') {
                        pipeline_leads.column().checkboxes.select();
                        $('.goals_checkboxes_all').prop('checked', true);
                        $('.goals_checkboxes_all').prop('indeterminate', false);
                    } else {
                        pipeline_leads.column().checkboxes.deselect();
                        $('.goals_checkboxes_all').prop('checked', false);
                    }
                    setTimeout(function () {
                        calculateTotalSelected();

                    }, 500);
                });
            });
            //jQuery for initializing pipline table 5
            pipeline_leads = $('#close-table').DataTable({
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
                }
                //"paging":         false,
                // "pagingType": "full_numbers",
                // "full_numbers": true
            });
            $('#close-table').fadeIn('slow');
            $('table.dataTable').fadeIn('slow');
            $('#close-table').DataTable().draw();

            $('#close-table').fadeIn('slow', function () {
                bindcheckboxclick();
            });
            $('table.dataTable').fadeIn('slow', function () {
                bindcheckboxclick();
            });
            $('#close-table').DataTable().draw();
                bindcheckboxclick();
            //jquery to select all & deselect all option
            $('.goals_checkboxes_all').click(function () {
                if ($(this).is(':checked')) {
                    pipeline_leads.column().checkboxes.select();
                } else {
                    pipeline_leads.column().checkboxes.deselect();
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
                        pipeline_leads.column().checkboxes.deselect();
                        $('#close-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
                        $('.goals_checkboxes_all').prop('indeterminate', true);
                    } else if ($(this).attr('data-table-bind') == 'select_all') {
                        pipeline_leads.column().checkboxes.select();
                        $('.goals_checkboxes_all').prop('checked', true);
                        $('.goals_checkboxes_all').prop('indeterminate', false);
                    } else {
                        pipeline_leads.column().checkboxes.deselect();
                        $('.goals_checkboxes_all').prop('checked', false);
                    }
                    setTimeout(function () {
                        calculateTotalSelected();

                    }, 500);
                });
            });
            //jQuery for initializing pipline table 6
            pipeline_leads = $('#declined-table').DataTable({
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
                }
                //"paging":         false,
                // "pagingType": "full_numbers",
                // "full_numbers": true
            });
            $('#declined-table').fadeIn('slow');
            $('table.dataTable').fadeIn('slow');
            $('#declined-table').DataTable().draw();

            $('#declined-table').fadeIn('slow', function () {
                bindcheckboxclick();
            });
            $('table.dataTable').fadeIn('slow', function () {
                bindcheckboxclick();
            });
            $('#declined-table').DataTable().draw();
                bindcheckboxclick();
            //jquery to select all & deselect all option
            $('.goals_checkboxes_all').click(function () {
                if ($(this).is(':checked')) {
                    pipeline_leads.column().checkboxes.select();
                } else {
                    pipeline_leads.column().checkboxes.deselect();
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
                        pipeline_leads.column().checkboxes.deselect();
                        $('#declined-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
                        $('.goals_checkboxes_all').prop('indeterminate', true);
                    } else if ($(this).attr('data-table-bind') == 'select_all') {
                        pipeline_leads.column().checkboxes.select();
                        $('.goals_checkboxes_all').prop('checked', true);
                        $('.goals_checkboxes_all').prop('indeterminate', false);
                    } else {
                        pipeline_leads.column().checkboxes.deselect();
                        $('.goals_checkboxes_all').prop('checked', false);
                    }
                    setTimeout(function () {
                        calculateTotalSelected();

                    }, 500);
                });
            });
            //jQuery for initializing commision archived report data table
            $('.revenue-table').DataTable({
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
        }
    }
    // ================================================================= //
    //jQuery to display the number of selected records againsts the checkboxes
    function calculateTotalSelected() {
        //var selected_row_cnt = pipeline_leads.rows('.selected').data().length;
        var selected_row_cnt = pipeline_leads.column(0).checkboxes.selected().length;
        var total_row_cnt = pipeline_leads.rows().data().length;

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
    // ================================================================= //
    // jquery to handle the checkbox
    function bindcheckboxclick() {
        // Handle click on checkbox pipline 1
        $('.marketing_target tbody, .marketing_target thead').on('click', 'input[type="checkbox"]', function (e) {
            var $row = $(this).closest('tr');

            // Get row data
            var data = pipeline_leads.row($row).data();

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
                updateDataTableSelectAllCtrl(pipeline_leads);

                // Prevent click event from propagating to parent
                e.stopPropagation();
            } else {
                setTimeout(function () {
                    calculateTotalSelected();
                }, 500);
            }
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
});