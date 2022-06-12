$(document).ready(function () {
    $('.fa-thumbs-up').click(function (e) { 
        e.preventDefault();
        $(this).toggleClass('fas');
    });
    $('.fa-thumbs-down').click(function (e) { 
        e.preventDefault();
        $(this).toggleClass('fas');
    }); 
});