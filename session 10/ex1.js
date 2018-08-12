function validateForm() {
	var user = document.getElementById('user').value;
	var date = document.getElementById('date').value;
	var phone = document.getElementById('phone').value;
	var email = document.getElementById('email').value;
	var noid = document.getElementById('noid').value;
	var tde = document.getElementById('tde').value;
	var male = document.getElementById('male').checked;
	var female = document.getElementById('female').checked;
	var other = document.getElementById('other').checked;
	var checked = true;
	if(user == ""){
		document.getElementById('tuser').innerHTML = 'vui lòng nhập tên';
		checked = false;
	}else{
		document.getElementById('tuser').innerHTML = '';
	}
	if(date == ""){
		document.getElementById('tdate').innerHTML = 'vui lòng nhập ngày sinh';
		checked = false;
	}else{
		document.getElementById('tdate').innerHTML = '';
	}
	if(phone == ""){
		document.getElementById('tphone').innerHTML = 'vui lòng nhập số điện thoại';
		checked = false;
	}else{
		document.getElementById('tphone').innerHTML = '';
	}
	if(email == ""){
		document.getElementById('temail').innerHTML = 'vui lòng nhập email';
		checked = false;
	}else{
		document.getElementById('temail').innerHTML = '';
	}
	if(tde == ""){
		document.getElementById('td').innerHTML = 'vui lòng nhập tiêu đề';
		checked = false;
	}else{
		document.getElementById('td').innerHTML = '';
	}
	if(noid == ""){
			document.getElementById('nd').innerHTML = 'vui lòng nhập tiêu đề';
			checked = false;
	}else{
		document.getElementById('nd').innerHTML = '';
	}
	if (male == false && other == false && female == false) {
		document.getElementById('gender').innerHTML = 'vui lòng nhập giới tính';
		checked = false;
	}else{
		document.getElementById('gender').innerHTML = '';
	}
	if(checked){
		document.getElementById('all').style.display = 'none';
		document.getElementById('dky').style.display = 'block';
	}
}