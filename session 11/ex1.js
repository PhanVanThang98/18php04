
//$('.change').click(function() {
	//$('#demo3').text('hello world');
//});
$('.change1').click(function() {
	if( $('.change1').text() == 'Turn on') {
		$('img').attr('src' , 'pic_bulbon.gif');
		$('.change1').text('turn off');
	}else{
		$('img').attr('src' , 'pic_bulboff.gif');
		$('.change1').text('Turn on');
	}
});
$('.change3').click(function() {
	$('#demo4').css('color', 'red');
});
$('.change4').click(function() {
	$('#demo4').addclass('content');
});
$('.change5').click(function() {
	$('#demo4').removeclass('content');
});
$('#testForm').click(function(){
	var name, linkFB;
	name = $('#name').val();
	linkFB = $('#fb').val();
	$('.linkFB').attr('href',linkFB);
	$('.nameFB').text(name);
});
