$(function () {
    $('.code').on('click', function (e) {
        //alert($(this).data('product'));
        e.preventDefault();
        // first pause the audio (in case it is still playing)
        toast.pause();
        // reset the audio
        toast.currentTime = 0;
        // play audio
        toast.play();
        $('#toast').toast({ autohide: false }).toast('show');
        $("#product").html($(this).data('product'));
        $("#code").html($(this).data('code'));

    });

        $(this).on('keydown', function(e) {
            if (e.keyCode == 27) {
                // hide toast
                $('#toast').toast('dispose');
            }
        });

    // preload audio
    var toast = new Audio('toast.wav');

});