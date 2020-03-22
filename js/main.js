//----------各種scroll----------
$(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 500) {
			$('nav').stop().animate({ top: "0px" });
			$('#backtotop').stop().animate({ bottom: "20px" });
		}
		else {
			$('nav').stop().animate({ top: "-47px" });
			$('#backtotop').stop().animate({ bottom: "-65px" });
		}
	}).scroll();
});

$(function () {
	$('#itemH').click(function () { $('html,body').animate({ scrollTop: $('#HOME').offset().top }, 800); });
	$('#itemA').click(function () { $('html,body').animate({ scrollTop: $('#ABT').offset().top - 45 }, 800); });
	$('#itemI').click(function () { $('html,body').animate({ scrollTop: $('#INTRO').offset().top - 65 }, 800); });
	$('#itemC').click(function () { $('html,body').animate({ scrollTop: $('#RECOMMEND').offset().top - 45 }, 800); });
	$('#itemO').click(function () { $('html,body').animate({ scrollTop: $('#OTHERS').offset().top - 45 }, 800); });
	$('#btnA').click(function () { $('html,body').animate({ scrollTop: $('#ABT').offset().top - 45 }, 800); });
	$('#btnF').click(function () { $('html,body').animate({ scrollTop: $('#FOREWORD').offset().top - 45 }, 800); });
	$('#btnT').click(function () { $('html,body').animate({ scrollTop: $('#TAICHUNG').offset().top - 45 }, 800); });
	$('#btnB').click(function () { $('html,body').animate({ scrollTop: $('#BRT').offset().top - 45 }, 800); });
	$('#btnR').click(function () { $('html,body').animate({ scrollTop: $('#ROUTE').offset().top - 45 }, 800); });
	$('#btnI').click(function () { $('html,body').animate({ scrollTop: $('#INTRO').offset().top - 65 }, 800); });
	$('#btnC').click(function () { $('html,body').animate({ scrollTop: $('#RECOMMEND').offset().top - 45 }, 800); });
	$('#btnO').click(function () { $('html,body').animate({ scrollTop: $('#OTHERS').offset().top - 45 }, 800); });
	$('#backtotop').click(function () { $('html,body').animate({ scrollTop: $('#HOME').offset().top }, 800); });

	$("#flip").click(function () {
		$("#pane").slideToggle("");
		var btnVal = document.getElementById("title_btn");
		if (btnVal.value == "MORE PHOTO ＋") {
			btnVal.value = "MORE PHOTO －"
		}
		else btnVal.value = "MORE PHOTO ＋"
	});
});

//----------留言板----------
function no() { alert("警告！此為觀賞用留言板，僅能做輸入與清除工作，送出無效") };
function yes() {
	if (confirm("是否清除所有輸入文字") == true) {
		document.getElementById("username").value = "";
		document.getElementById("userplace").value = "";
		document.getElementById("textmessage").value = "";
	}
};

//----------圖片切換----------
//----B2----
$(document).ready(function () {
	for (i = 0; i < 2; i++) {
		$("#menu_dot2 img:eq(" + i + ")").click({ id: i }, function (e) {
			n = e.data.id
			change()
		}
		)
	}
	n = 0
	$("#clickB2U").click(function () {
		n--
		if (n < 0) { n = 1 }
		change()
	})
	$("#clickB2D").click(function () {
		n++
		if (n > 1) { n = 0 }
		change()
	})
	function change() {
		$("#products2 img").attr("src", "im/B2-" + n + ".jpg")
		$("#menu_dot2 img").attr("src", "im/dot-white.png")
		$("#menu_dot2 img:eq(" + n + ")").attr("src", "im/dot-color.png")
	}
})

//----B3----
$(document).ready(function () {
	for (i = 0; i < 2; i++) {
		$("#menu_dot3 img:eq(" + i + ")").click({ id: i }, function (e) {
			n = e.data.id
			change()
		}
		)
	}
	n = 0
	$("#clickB3U").click(function () {
		n--
		if (n < 0) { n = 1 }
		change()
	})
	$("#clickB3D").click(function () {
		n++
		if (n > 1) { n = 0 }
		change()
	})
	function change() {
		$("#products3 img").attr("src", "im/B3-" + n + ".jpg")
		$("#menu_dot3 img").attr("src", "im/dot-white.png")
		$("#menu_dot3 img:eq(" + n + ")").attr("src", "im/dot-color.png")
	}
})

//----------圖片展開----------

$(document).ready(function () {
	var docw = 300;
	var scroll = 0;
	$("#right").click(function () {
		scroll = scroll + docw;
		if (scroll > 4200) {
			$("#more_main").animate({
				scrollLeft: $("#more_main").scrollLeft() - 4200
			}, 700, function () { });
			scroll = 0;
		}
		else {
			$("#more_main").animate({
				scrollLeft: $("#more_main").scrollLeft() + docw
			}, 700, function () { });
		}
	});
	$("#left").click(function () {
		scroll = scroll - docw;
		if (scroll < 0) {
			$("#more_main").animate({
				scrollLeft: $("#more_main").scrollLeft() + 4200
			}, 700, function () { });
			scroll = 4200;
		}
		else {
			$("#more_main").animate({
				scrollLeft: $("#more_main").scrollLeft() - docw
			}, 700, function () { });
		}
	});
});
