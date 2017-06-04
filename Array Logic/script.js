var array=[1,3,5,7,10];

 function getIndex(TargetValue)
{
var index;
for(i=0;i<array.length;i++)
{
	if(array[i]==TargetValue||array[i]>TargetValue)
	{
	index=i;
	break;
	}
	if(i==array.length-1||array[i]>TargetValue)
	{
	index=i+1;
	break;
	}


}
document.getElementById("IndexValue").value=index;
	
}