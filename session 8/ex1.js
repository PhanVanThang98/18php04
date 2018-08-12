var a;
var a = 15;
var b = 10;
var c, d, e;
var userName;//camel
var user_Name;
var myUserName;
var my_User_Name;
var name;
var age;
var birthday;
var country;
//comment
/* comment dài 
nhiều dòng
*/
document.write("kết quả của a + b là: ");
document.write(a + b);
document.write("<br>");
document.write("kết quả của a - b là: ");
document.write(a - b);
document.write("<br>");
document.write("kết quả của a * b là: ");
document.write(a * b);
document.write("<br>");
document.write("kết quả của a / b là: ");
document.write(a / b);
document.write("<br>");
document.write("kết quả của a % b là: ");//chia lấy dư
document.write(a % b);
//-----------------------------------ư
var f;
var h = 5;
var g = "hello";
document.write("<br>");
document.write(typeof f);
document.write("<br>");
document.write(typeof h);
document.write("<br>");
document.write(typeof g);
var myUserName = 'Thang';// no var my username = 'Thang';
var myPhone = '01629969090'//no var soDienThoai;
//------------------------
//if 
	//true- code
//else
	//fase- code
//if 
	//true- code
//else if
	//true-code	
//else 
	//fase- code

document.write("<br>");
var birthday = 1998;
if (birthday % 2 == 0){ 
	document.write("Bạn sinh năm chẵn")
}
else{
	document.write("Bạn sinh năm lẻ ");
}
/*!= khác 
===so sánh bằng cả giá trị và kiểu dữ liệu
!== so sánh khác giá trị và kiểu dữ liệu 
*/
/*document.write("<br>");
for (i=0; i<10; i++){
document.write(i);	
}*/
document.write("<br>");
for (i=0; i<=100; i++){
	if (i % 15 == 0) {
		document.write(i+ "chia hết cho 15")
		document.write("<br>");
	}
	else{
		if (i % 3 == 0) {
		document.write(i+ "chia hết cho 3")
		document.write("<br>");
		}
		if (i % 5 == 0) {
		document.write(i+ "chia hết cho 5")
		document.write("<br>");
		}
	}
}
/* while(condition){
	true - code
}
do{
	true - code
}while(condition)
*/
var i = 10;
while (i > 0){
	document.write(i);
	document.write("<br>");
	i--;
}
var i = 15;
do {
	document.write(i);
	document.write("<br>");
	i--;
} while (i > 0);
var today = 5;
switch(today){
	case 2:
	document.write(monday);
	break;
	case 3:
	document.write(tuesdat);
	break;
	case 4:
	document.write(wednesday);
	break;
	case 5:
	document.write();
	break;
	case 6:
	document.write(i);
	break;
	case 7:
	document.write(i);
	break;
}
