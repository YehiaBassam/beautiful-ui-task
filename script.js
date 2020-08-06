$(document).ready(function () {
	$(window).scroll(function () {
		let scroll = $(window).scrollTop();
		if (scroll > 900) {
            $(".white-background-scroll").css("left", "0%");
            $("#color-fade h2").addClass("h2_black");
		}
		else {
            $(".white-background-scroll").css("left", "100%");
            $("#color-fade h2").removeClass("h2_black");
		}
	})
})


