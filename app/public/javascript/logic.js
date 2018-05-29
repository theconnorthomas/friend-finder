$(document).ready(function () {
    $('select').material_select();
    $('.modal').modal({
        dismissible: false, // Modal can be dismissed by clicking outside of the modal
        opacity: .5, // Opacity of modal background
        inDuration: 300, // Transition in duration
        outDuration: 200, // Transition out duration
        startingTop: '4%', // Starting top style attribute
        endingTop: '10%' // Ending top style attribute
    });
});
// Activate submit button
$('#submitButton').on('click', function (event) {
    event.preventDefault();
    // Gather user inputs
    var userInput = {
        name: $('#userName').val().trim(),
        photo: $('#userPhoto').val().trim(),
        scores: [
            $('#question1').val().trim(),
            $('#question2').val().trim(),
            $('#question3').val().trim(),
            $('#question4').val().trim(),
            $('#question5').val().trim(),
            $('#question6').val().trim(),
            $('#question7').val().trim(),
            $('#question8').val().trim(),
            $('#question9').val().trim(),
            $('#question10').val().trim()
        ]
    };
    // console.log('userInput = ' + JSON.stringify(userInput));
    // Add user inputs to friends list
    $.post('/api/friends', userInput)
        .done(function (data) {
            // console.log('response = ' + JSON.stringify(data));
            // Set the name and image values of friend match
            $('#userMatch').html(data.matchName);
            $("#userMatchImage").attr("src", data.matchImage);
            // Pop open the modal dialog
            $('#modal1').modal('open');
        });
});