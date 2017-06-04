function simplify(path)
{
	var res=path.split('/');
	var stack=[];
for(i=0;i<res.length;i++)
{
	if(res[i]==""||res[i]==".")
	{
		//Nothing is done
	}
	else if(res[i]=="..")
	{
		stack.pop();
	}
	else
	{
stack.push(res[i]);
	}

}

	if(stack.length==0)
	{
		document.getElementById('SimplifyPath').value="/";

	}
	else
	{var ResultString="";
for(i=0;i<stack.length;i++)
{
ResultString+="/"+stack[i];
}
document.getElementById('SimplifyPath').value=ResultString;

	}
}