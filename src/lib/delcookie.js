const deleteCookie = () =>
{
 var expireDate = new Date();
 
 //어제 날짜를 쿠키 소멸 날짜로 설정한다.
 expireDate.setDate( expireDate.getDate() - 1 );
 document.cookie = 'token' + "= " + "; expires=" + expireDate.toGMTString() + "; path=/";
}
export {deleteCookie}