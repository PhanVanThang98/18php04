var myName = 'thang';
function functionName(){
	document.write('hello thang');
}
//gọi ham
functionName();
document.write('<br>');
function sumNumber(a = 8, b = 1){
	document.write(a + b);

}
sumNumber(6, 7);
document.write('<br>');
sumNumber();
/*
description: ham tính tổng 2 số
created 04/08/2018
created by thăng
*/
function sumNumber2(a = 5, b = 4){
	return a + b;
}
document.write('<br>');
document.write(sumNumber2(6, 7));
document.write('<br>');

if(sumNumber2(6, 4) > 12){
	document.write('tong lon hon 12');
}
///
var b = 5;
if (b > 5) {
	document.write('b lon hon 5');
}
else{
	document.write('b nho hon hoac bang 5');
}
////
document.write('<br>');
var b = 5;
var c;
c = (b > 5)?'b lon hon 5':'b nho hon hoac bang 5';
document.write(c);

//(condition)?true:false
document.write('<br>');
for (var i = 0; i < 3; i++) {
	document.write(i);	
	document.write('<br>');
}
//
document.write('<br>');
var j = 3 ;
var c;
c = ++j + 5;
document.write(c);

document.write('<br>');
var k = 3 ;
var d;
d = k++ + 5;
document.write(d);

