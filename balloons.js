$(function () {
    $('#birthday').pickadate({ format: 'mmmm d' });

    const random_animations = ['animate__bounce', 'animate__flash', 'animate__pulse', 'animate__pulse', 'animate__wobble'];
    const random_num = Math.floor(Math.random() * random_animations.length);
    $('#randomAnimation').addClass(random_animations[random_num]);

    $('.form-check-label').on('mouseover', function() {
        $('#randomAnimation').css('color', $(this).data("color"));
    })
    $('.form-check-label').on('mouseout', function() {
        $('#randomAnimation').css('color', "slategray");
    })
});

$('.form-check-input').each(function () {
    $(this).prop('checked', false);
});

// event listener for check/uncheck
$('.form-check-input').on('change', function () {
    // make the image visible
    $('#' + this.id + 'Img').css('visibility', 'visible')
    // animate balloon in/out based on checkbox
    $(this).is(':checked') ?
        $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown') :
        $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp');
});

$('#submit').on('click', function(){
    //loop through the collection of check boxes to figure out if any of them are checked
    var isChecked = false;
    $('.form-check-input').each(function () {
        //$(this).prop('checked', true);
        if ($(this).is(':checked')) 
         {
            isChecked = true;
         }
    });
    //console.log(isChecked);
    if (!isChecked){
        // display toast
        $('#toast').toast().toast('show');
    }
})

$('#selectAll').on('click', function() {
    $('.form-check-input').each(function () {
        $(this).prop('checked', true);
        $(this).is(':checked') ?
        $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown') :
        $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp');

    });
})

$('#deSelectAll').on('click', function() {
    $('.form-check-input').each(function () {
        $(this).prop('checked', false);
        $(this).is(':checked') ?
        $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown') :
        $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp');

    });
    
})