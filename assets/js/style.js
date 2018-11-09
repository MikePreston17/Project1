$(document).on('click', '#account-icon', function () {
    $('.menu').addClass('animate-menu-out').removeClass('animate-menu-in');
    $('.menu-container').css('display', 'initial');
})

$(document).on('click', '#close-menu', function () {
    $('.menu').addClass('animate-menu-in').removeClass('animate-menu-out');

    function hideMenu() {
        $('.menu-container').css('display', 'none');
    }
    setTimeout(hideMenu, 300)
});

/**
 * Back Arrow
 */
$(document).on('click', '#back-arrow', function () {
    $("#recipe-info").show();
    $("#search-form").show();
    $("#recipe-view-div").hide();
    $('#back-arrow').addClass('color-none')
})

$(document).on('click', 'favorite-btn', function () {

    // repo.get();

    //todo: notify user w/o alert that their favorite was saved.
})

$(document).on('click', 'notes-btn', function () {
    //todo: fire event 

})
// ==============================================
// code for modals
// ==============================================

//brings up login modal
$(document).on('click', "#login-link", function () {
    $('#login-modal').show();
    $('#login-form-div').addClass('animate-modal-out').removeClass('animate-modal-in')
})

// use this function to hide the login modal
function hideLoginModal() {
    $('#login-form-div').addClass('animate-modal-in').removeClass('animate-modal-out');
    setTimeout((function () {
        $('#login-modal').hide();
    }), 250);
}

function hideSignupModal() {
    $('#signup-form-div').addClass('animate-modal-in').removeClass('animate-modal-out');
    setTimeout((function () {
        $('#signup-modal').hide();
    }), 250);
}

// function removeSignupModal() {
//     $('#signup-form-div').addClass('animate-modal-in').removeClass('animate-modal-out');
//     setTimeout((function () {
//         $('#signup-modal').remove();
//     }), 250);
// }

// function removeLoginModal() {
//     $('#login-form-div').addClass('animate-modal-in').removeClass('animate-modal-out');
//     setTimeout((function () {
//         $('#login-modal').remove();
//     }), 250);
// }

//hides the signup modal when cancel is clicked
$(document).on('click', '#cancel-signup', hideSignupModal)

// bring up add notes modal
$(document).on('click', '#notes-btn', function () {
    var textArea = $('#recipe-view-list').children().text();
    console.log(textArea);
    $('#add-note-area').text(textArea);
    $('#text-area-div').show();
    $('#text-area-modal').addClass('animate-modal-out').removeClass('animate-modal-in')

})

// hide notes modal
$(document).on('click', '#confirm-note-button', function () {
    if (!userID) {
        alert('You must be signed in first');
        return;
    }
    //todo: call amend here?
    var amendment = $("#add-note-area").val()
    $("#recipe-view-list").text(amendment);
    console.log("AMEND" + amendment);

    currentRecipe.directions = amendment;

    update(currentRecipe);

    $('#text-area-modal').addClass('animate-modal-in').removeClass('animate-modal-out');
    setTimeout((function () {
        $('#text-area-div').hide();
    }), 250);
})

//hides login modal when cancel is clicked
$(document).on('click', '#cancel-login', hideLoginModal)

//bring up the sign up modal
$(document).on('click', "#signup-link", function () {
    $('#signup-modal').show();
    $('#signup-form-div').addClass('animate-modal-out').removeClass('animate-modal-in')
})

// ==============================================
// end code for modals
// ==============================================

$(document).on('click', '#signup-form-submit', function (event) {
    event.preventDefault();
    newUser();
    hideSignupModal();
})
$(document).on('click', '#login-form-submit', function (event) {
    event.preventDefault();
    login();
    hideLoginModal();
})
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.
        // email = user.email;
        // alert(email);
    } else {
        // No user is signed in.

    }
});