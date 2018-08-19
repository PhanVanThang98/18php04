$('#no').mouseover(function() {
	if($('#no').val() == "Không"){
		$('#no').val("Có");
		$('#yes').val("Không");
	}
});
$('#yes').mouseover(function() {
	if($('#yes').val() == "Không"){
		$('#yes').val("Có");
		$('#no').val("Không");
	}
});
$('#no').click(function() {
	$('#troll').show();
	$('#all').hide();
});
$('#yes').click(function() {
	$('#troll').show();
	$('#all').hide();
});