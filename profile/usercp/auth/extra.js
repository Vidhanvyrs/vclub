// SUPPORT POPUP START

$(document).ready(function() {
    $('.support-button').click(function() {
        $('.form-popupS').modal({
            show: true,
        });
    });
});

// SUPPORT POPUP END


// INVITE POPUP START

$(document).ready(function() {
    $('.invite-button, .invite-href').click(function() {
        $('.form-popupI').modal({
            show: true,
        });
    });
});

// INVITE POPUP END


// RULES POPUP START

$(document).ready(function() {
    // initially popup is hidden:
    $('.form-popup').modal({
        show: false
    });
    // Check for the "Rules" cookie, if not found then show the dialog and save the cookie.
    // The cookie will expire on every 30 mins and the dialog will show again.
    if ($.cookie('Rules') == null) {
        // Create expiring cookie, 30 mins from now:
        $.cookie('Rules', 'yes', {
            expires: 120 / 1440,
            path: '/'
        });
        // Show dialog
        setTimeout(function() {
            $('.form-popup').modal({
                show: true
            });
        }, 500);
    }
});

// RULES POPUP END