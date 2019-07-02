
/*

changeinfo修改文字 第一个参数info为修改成的内容 参数infoid为被修改控件id
changepic修改图片 第一个参数location为修改成的内容 参数picID为被修改控件id
*/
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
	
/*
监听函数，负责处理来自服务器的请求

*/
    