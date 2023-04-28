function LaspViewAddArcByUrl(arcUrl)
{	
	//Called after LaspView is loaded
	unityInstance.SendMessage("Main Camera", "LaspViewAddArcByUrl", arcUrl);
}

function LaspViewAddArcByStr(fileContent)
{	
	//Called after LaspView is loaded
	unityInstance.SendMessage("Main Camera", "LaspViewAddArc", fileContent);
}

// defaultArcList = []
// function LaspViewAddDefaultArc()
// {	
// 	//Called once as soon as UnityLoader.js is done and LaspView is successfully loaded
// 	//example1
// 	if (defaultArcList.length == 0)
// 	{
// 		defaultArcList.push("./LASPView/PeriodicTable.arc")
// 		defaultArcList.push("./LASPView/Claisen.arc")
// 	}
// 	for (var i in defaultArcList)
// 	{
// 		unityInstance.SendMessage("Main Camera", "LaspViewAddArcByUrl", defaultArcList[i]);
// 	}
	
// 	//example2
// 	//var fileContent = "!BIOSYM archive 2\nPBC=ON\n        Energy         1          1.7466        -79.367960         1\n!DATE\nPBC   10.00000000   10.00000000   10.00000000   90.00000000   90.00000000   90.00000000\nH        3.108883129    4.487967483    6.733226725 CORE    1 H  H    0.0000    1"
// 	//unityInstance.SendMessage("Main Camera", "LaspViewAddArc", fileContent);
// }