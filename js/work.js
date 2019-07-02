onmessage = function(event){
   var result=0;
   order = event.data;

   switch(order) {
     case 1:
       changeinfo('123456','postinfo')；
        break;
     case 2:
     //   代码块
        break;
     default:
      //  默认代码块
} 
    //向主线程返回消息
	
	
	
    postMessage(result);
}


		 function changepic(location,picID)
		{
			// document.getElementById(picID).src=location;
			var src=location;
        document.getElementById(picID).src=src;
			
		}
		function changeinfo(info,infoID)
		{
			document.getElementById(infoID).innerText=info;
		}
	