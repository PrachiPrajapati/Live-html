$(document).ready(function(){
    //jquery for the dashboard date range picker
    var start = moment().subtract(30, 'days');
    var end = moment();
	var template =
			'<div class="daterangepicker">' +
			'<div class="custom_title">Select period' +
			'<a href="javascript:void(0)">'+
			'<img src="images/cross.png" align="right" class="img-fluid datepicker_close">' +
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

    //trigger on page load
    cb(start, end);

	//customization of the Closing target date picker
	$('.reportrange').on('showCalendar.daterangepicker', function (ev, picker) {
		$('.ranges').find('.custom_data_preset_title').remove();
		$('.ranges').prepend('<div class="custom_data_preset_title">Date Presets</div>');
		bindClose();
	});

	//display full calendar on selecting any ranges
	$('.reportrange').on('apply.daterangepicker', function (ev, picker) {
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

    //jquery to reload the page on the page resize
    $(window).resize(function () {
        window.location.reload();
    });
});

//bind the datepicker calender range UI text
function cb(start, end) {
    $('span.reportrange').html(start.format('MMM D, YYYY') + ' - ' + end.format('MMM D, YYYY'));
}
