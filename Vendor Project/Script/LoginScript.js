idDiv= document.getElementById("Id-Div");
passwordDiv=document.getElementById("Password-Div");
id=document.getElementById("Id");
password=document.getElementById("Password");
IdSpan=document.getElementById("helpBlockId");
PasswordSpan=document.getElementById("helpBlockPassword");

function login()
{
if(id.value=="Jatin")
{
if(password.value=="Katoch")
{
 window.location.href = 'Dashboard.html';
}
else
{
	passwordDiv.className="form-group has-error";
	PasswordSpan.innerHTML="Wrong Password";
}
}
else
{
	idDiv.className="form-group has-error"
	IdSpan.innerHTML="Wrong Id";

}
}