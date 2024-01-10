jQuery.noConflict();
jQuery(document).ready(function ($) {

    function setEqualContainer() {
        if ($(window).width() > 768) {
            $('.container_company_setting').each(function () {
                $(this).css('min-height', null);
            });
            setTimeout(function () {
                var highestBox = 0;
                // Select and loop the elements you want to equalise
                $('.container_company_setting').each(function () {
                    if ($(this).outerHeight() > highestBox) {
                        highestBox = $(this).outerHeight();
                    }
                    console.log('height box ' + highestBox);

                    // Set the height of all those children to whichever was highest
                    $('#sidebar-container').css({'min-height': highestBox + 'px'});
                    $('.container_company_setting').css({'min-height': highestBox + 'px'});
                });
            }, 1000);
        }
    }

    //jquery to set equal height to both the containers
    setEqualContainer();

    // //jQuery for displaying phone numbers in a format
    $('.phone_number').each(function () {
        var value = $('.phone_number').html().trim();
        console.log(value);
        // keep only digits and number symbols
        var num = (value || '').replace(/[^0-9]/g, '');
        const strlen = num.length;
        if (strlen < 10 || strlen > 11) {
            return num;
        }
        // If it starts with one remove it
        if (strlen === 11 && num[1] == 1) {
            num = num.slice(1);
        }
        // Returns only the first 10 digits so if the first digit isn't 1
        // we wont't send the last one.  It's a phone number after all!!
        if (strlen === 10) {
            $('.phone_number').html('(' + num.slice(0, 3) + ') ' + num.slice(3, 6) + '-' + num.slice(6, 10));
        }
    });

    //jquery to bind the datatable
    // var company_directory = $('#company_directory').DataTable({
    //     // 'processing': true,
    //     // 'serverSide': true,
    //     // 'ajax': {
    //     //     url: $('#company_directory_paginate_url').val()
    //     // },
    //     // "scrollY": "600px",
    //     // "scrollCollapse": true,
    //     // "pageLength": 25,
    //     'stateSave': false,
    //     "dom": 'rt<"bottom right"ip><"clear">',
    //     // 'columns': [
    //     //     {'data': 'id'},
    //     //     {'data': 'profile_picture'},
    //     //     {'data': 'job_title'},
    //     //     {'data': 'is_active'},
    //     //     {'data': 'display_name'},
    //     //     {'data': 'email'},
    //     //     {'data': 'ext'},
    //     //     {'data': 'direct_phone'},
    //     //     {'data': 'sms'},
    //     //     {'data': 'cell'},
    //     //     {'data': 'fax'},
    //     //     {'data': 'nmls'}
    //     // ],
    //     'columnDefs': [
    //         {
    //             'targets': 0,
    //             'searchable': true,
    //             'orderable': false,
    //             'className': 'dt-body-center',
    //             'render': function (data, type, full, meta) {
    //                 return '';
    //             },
    //             "visible": false
    //         },
    //         {
    //             "targets": [1],
    //             "visible": false
    //         },
    //         {
    //             "targets": [2],
    //             "visible": false
    //         },
    //         {
    //             "targets": [3],
    //             "visible": false
    //         },
    //         {
    //             "targets": [4],
    //             'render': function (data, type, full, meta) {
    //                 var profile_url = 'svg/loanofficer/dashboard/profile.png';
    //                 if (full.profile_picture != null) {
    //                     profile_url = full.profile_picture;
    //                 }
    //                 if (full.is_active == 1) {
    //                     var is_active_class = 'profile_green_dot';
    //                 } else {
    //                     var is_active_class = '';
    //                 }
    //                 return '' +
    //                     '<div class="content_center">' +
    //                     '<div class="profile_img">' +
    //                     '<img src="'+profile_url+'" class="img-fluid with_img">' +
    //                     '<div class="'+is_active_class+'"></div>' +
    //                     '</div>' +
    //                     '<div class="profile_details">' +
    //                     '<div class="profile_name">' +
    //                     data +
    //                     '</div>' +
    //                     '<div class="profile_desgination text_left">' +
    //                     full.job_title +
    //                     '</div>' +
    //                     '</div>' +
    //                     '</div>';
    //             }
    //         }, {
    //             "targets": [5]
    //         }, {
    //             "targets": [6]
    //         }, {
    //             "targets": [7],
    //             'createdCell':  function (td, cellData, rowData, row, col) {
    //                 //$(td).addClass('phone_number');
    //                 var value = cellData;
    //                 console.log(value);
    //                 value = value.toString();
    //                 // keep only digits and number symbols
    //                 var num = value.replace(/[^0-9]/g, '');
    //                 //var num = value;
    //                 const strlen = num.length;
    //                 if (strlen < 10 || strlen > 11) {
    //                     return num;
    //                 }
    //                 // If it starts with one remove it
    //                 if (strlen === 11 && num[1] == 1) {
    //                     num = num.slice(1);
    //                 }
    //                 // Returns only the first 10 digits so if the first digit isn't 1
    //                 // we wont't send the last one.  It's a phone number after all!!
    //                 if (strlen === 10) {
    //                     $(td).html('(' + num.slice(0, 3) + ') ' + num.slice(3, 6) + '-' + num.slice(6, 10));
    //                 }
    //                 // $(td).parent('tr').attr('data-id', rowData[0]); // adds the data attribute to the parent this cell row
    //             }
    //         }, {
    //             "targets": [8],
    //             'createdCell':  function (td, cellData, rowData, row, col) {
    //                 //$(td).addClass('phone_number');
    //                 var value = cellData;
    //                 console.log(value);
    //                 value = value.toString();
    //                 // keep only digits and number symbols
    //                 var num = value.replace(/[^0-9]/g, '');
    //                 //var num = value;
    //                 const strlen = num.length;
    //                 if (strlen < 10 || strlen > 11) {
    //                     return num;
    //                 }
    //                 // If it starts with one remove it
    //                 if (strlen === 11 && num[1] == 1) {
    //                     num = num.slice(1);
    //                 }
    //                 // Returns only the first 10 digits so if the first digit isn't 1
    //                 // we wont't send the last one.  It's a phone number after all!!
    //                 if (strlen === 10) {
    //                     $(td).html('(' + num.slice(0, 3) + ') ' + num.slice(3, 6) + '-' + num.slice(6, 10));
    //                 }
    //                 // $(td).parent('tr').attr('data-id', rowData[0]); // adds the data attribute to the parent this cell row
    //             }
    //         }, {
    //             "targets": [9],
    //             'createdCell':  function (td, cellData, rowData, row, col) {
    //                 //$(td).addClass('phone_number');
    //                 var value = cellData;
    //                 console.log(value);
    //                 value = value.toString();
    //                 // keep only digits and number symbols
    //                 var num = value.replace(/[^0-9]/g, '');
    //                 //var num = value;
    //                 const strlen = num.length;
    //                 if (strlen < 10 || strlen > 11) {
    //                     return num;
    //                 }
    //                 // If it starts with one remove it
    //                 if (strlen === 11 && num[1] == 1) {
    //                     num = num.slice(1);
    //                 }
    //                 // Returns only the first 10 digits so if the first digit isn't 1
    //                 // we wont't send the last one.  It's a phone number after all!!
    //                 if (strlen === 10) {
    //                     $(td).html('(' + num.slice(0, 3) + ') ' + num.slice(3, 6) + '-' + num.slice(6, 10));
    //                 }
    //                 // $(td).parent('tr').attr('data-id', rowData[0]); // adds the data attribute to the parent this cell row
    //             }
    //         } , {
    //             "targets": [10],
    //             'createdCell':  function (td, cellData, rowData, row, col) {
    //                 //$(td).addClass('phone_number');
    //                 var value = cellData;
    //                 console.log(value);
    //                 value = value.toString();
    //                 // keep only digits and number symbols
    //                 var num = value.replace(/[^0-9]/g, '');
    //                 //var num = value;
    //                 const strlen = num.length;
    //                 if (strlen < 10 || strlen > 11) {
    //                     return num;
    //                 }
    //                 // If it starts with one remove it
    //                 if (strlen === 11 && num[1] == 1) {
    //                     num = num.slice(1);
    //                 }
    //                 // Returns only the first 10 digits so if the first digit isn't 1
    //                 // we wont't send the last one.  It's a phone number after all!!
    //                 if (strlen === 10) {
    //                     $(td).html('(' + num.slice(0, 3) + ') ' + num.slice(3, 6) + '-' + num.slice(6, 10));
    //                 }
    //                 // $(td).parent('tr').attr('data-id', rowData[0]); // adds the data attribute to the parent this cell row
    //             }
    //         } , {
    //             "targets": [11]
    //         }

    //     ],
    //     "createdRow": function (row, data, dataIndex) {
    //         //$(row).addClass('hand-pointer company');
    //         $(row).attr('data-bind', data.id);
    //     },
    //     // "aaSorting": [],
    //     // 'aoColumnDefs': [
    //     //     {
    //     //         'bSortable': false,
    //     //         'aTargets': [6]
    //     //     }
    //     // ],
    //     'language': {
    //         'paginate': {
    //             'next': '<img src="svg/loanofficer/dashboard/right_arrow.png">',
    //             'previous': '<img src="svg/loanofficer/dashboard/left_arrow.png">'
    //         },
    //         'processing' : '<div class="spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>',
    //         'zeroRecords' : ''
    //     },
    //     "infoCallback": function (settings, start, end, max, total, pre) {
    //         return "Showing " + start + " - " + end + " of " + total;
    //     }
    // });
    // $('#company_directory').fadeIn('slow');
    // $('table.dataTable').fadeIn('slow');
    // $('#company_directory').DataTable().draw();
    // $('#company_directory').on('draw.dt', function () {
    //     if (company_directory.rows().data().length == 0) {
    //         $('#company_directory').parents('div.dataTables_wrapper').first().fadeOut('slow', function(){
    //             $('.empty_company_directory_listing').fadeIn();
    //         });
    //     } else {
    //         $('.empty_company_directory_listing').fadeOut('slow', function(){
    //             $('#company_directory').parents('div.dataTables_wrapper').first().fadeIn();
    //         });

    //     }
    // });

    //jquery to bind the Commission Schedule Search filter
    // $(".company_directory_search").autoSave(function() {
    //     $('#company_directory').DataTable().search(
    //         $('.company_directory_search').val()
    //     ).draw();
    // }, 1000);
});