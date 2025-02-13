function copyText() {
    const text = $(this).data('value');
    navigator.clipboard.writeText(text);
    myNotify('Text copied', 'information', 3);
}
$(document).ready(function () {
    $(".umenu").hover(function () {
        $(".umenu").removeClass("active");
        $(this).addClass("active");
    });

    $(function (e) {
        var url = document.location.toString();
        if (url.match('#')) {
            $('.nav-tabs a[href="#' + url.split('#')[1] + '"]').tab('show');
        }

        // Change hash for page-reload
        $('.nav-tabs a').on('shown', function (e) {
            window.location.hash = e.target.hash;
        })
    });

//AJAX NOTIFICATOR:
    jQuery(document).ajaxStart(function () {
        ajaxNoty = myNotify('<img src="/images/ajax-loader(2).gif" /> Sending your request..', 'information', false);
    });

    jQuery(document).ajaxStop(function () {
        ajaxNoty.close();
    });

    jQuery.fn.center = function () {
        this.css("position", "absolute");
        this.css("top", Math.max(0, (($(window).height() - this.outerHeight()) / 2) +
            $(window).scrollTop()) + "px");
        this.css("left", Math.max(0, (($(window).width() - this.outerWidth()) / 2) +
            $(window).scrollLeft()) + "px");
        return this;
    }


});

