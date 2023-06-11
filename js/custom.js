
//
$(document).ready(function() {
			$('#fullpage').fullpage({
				'verticalCentered': false,
				'scrollingSpeed': 600,
				'autoScrolling': false,
				'css3': true,
				'navigation': true,
				'navigationPosition': 'right',
			});
		});

// wow
$(function()
{
    new WOW().init();
    $(".rotate").textrotator();
})

$("#fileEng").click(function() {
    // hope the server sets Content-Disposition: attachment!
    window.location = '../cvs/EnglishCV.pdf';
});
$("#fileEs").click(function() {
    // hope the server sets Content-Disposition: attachment!
    window.location = '../cvs/CurriculumEspañol.pdf';
});