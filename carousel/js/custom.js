$(".morebtn").click(function (e) {
	e.preventDefault();
	$(this).toggleClass("expandedtext");
	$(this).siblings('.hidetxt').slideToggle('slow');
});

$(document).ready(function () {

	$("a.nav:not(.dropbtn)").click(function (e) {
		$("#Body").removeClass("navactive");
	})
	$(document).on("scroll", onScroll);
	var defaultWidth = 1920;
	var currentWindowWidth = window.innerWidth;

	if (currentWindowWidth > 1024 && currentWindowWidth < defaultWidth) {
		var percent = (currentWindowWidth * 100) / defaultWidth;
		document.body.style.zoom = Math.round(percent) + '%';
	}


	//smoothscroll
	$('a[href^="#"]').on('click', function (e) {
		$('a').each(function () {
			$(this).removeClass('active');
		})
		$(this).addClass('active');
	});
});


function onScroll(event) {
	var scrollPos = $(document).scrollTop();
	$('.nav').each(function () {
		var percent = 100;
		var defaultWidth = 1920;
		var currentWindowWidth = window.innerWidth;
		if (currentWindowWidth > 1024 && currentWindowWidth < defaultWidth) {
			percent = (currentWindowWidth * 100) / defaultWidth;
		}
		var currLink = $(this);
		var refElement = $(currLink.attr("href"));
		if (refElement.position().top <= (scrollPos + (scrollPos * (1 - percent / 100) + (window.innerHeight/2)))) {
			$('.nav').removeClass("active");
			currLink.addClass("active");
		}
		else {
			currLink.removeClass("active");
		}
	});
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function openDropdown() {
	document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
	if (!event.target.matches('.dropbtn')) {
		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}