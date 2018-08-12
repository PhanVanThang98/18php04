function validateForm() {
	var user = document.getElementById('user').value;
	var date = document.getElementById('date').value;
	var phone = document.getElementById('phone').value;
	var email = document.getElementById('email').value;
	var noid = document.getElementById('noid').value;
	var tde = document.getElementById('tde').value;
	var male = document.getElementById('noid').checked;
	var other = document.getElementById('noid').checked;
	if(user =="" && date =="" && phone =="" && email == "" && noid =="" && male == false && other == false ){
		if(user == ""){
			document.getElementById('tuser').innerHTML = 'vui lòng nhập tên';
		}
		if(date == ""){
			document.getElementById('tdate').innerHTML = 'vui lòng nhập ngày sinh';
		}
		if(phone == ""){
			document.getElementById('tphone').innerHTML = 'vui lòng nhập số điện thoại';
		}
		if(email == ""){
			document.getElementById('temail').innerHTML = 'vui lòng nhập email';
		}
		if(tde == ""){
			document.getElementById('td').innerHTML = 'vui lòng nhập tiêu đề';
		}
		if(noid == ""){
			document.getElementById('nd').innerHTML = 'vui lòng nhập tiêu đề';
		}
		if (male == false && other == false) {
			document.getElementById('gender').innerHTML = 'vui lòng nhập giới tính';
		}
	}
	else{
		document.write('bạn đã đăng ký thành công')
	}

}