var maxLength = $('textarea').attr('maxlength');

$(document).ready(function loadinitial() {
    var textstring = maxLength + " Character(s) Remaining";
    $('#textarea-check').val(textstring);
});

$('textarea').keyup(function check() {
    var textlen = maxLength - $(this).val().length;
    var textstring = textlen + " Character(s) Remaining";
    $('#textarea-check').val(textstring);
});