
$( document ).ready(() => {
    //Init datepicker
    $( ".datepicker" ).datepicker({
        'prevText': '<i class="fa fa-angle-left fa-2x" aria-hidden="true"></i>',
        'nextText': '<i class="fa fa-angle-right fa-2x" aria-hidden="true"></i>',
        'showOtherMonths': true,
        'selectOtherMonths': true
    });

    let width = $('.facility_wrapper').width();
    $('.facility_wrapper').height(width);
    
});