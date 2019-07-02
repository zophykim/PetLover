
function creatwork(order)
{
//1.创建计算的子线程
        var worker = new Worker("work.js");
     
        function sendorder(order1){
            var num = order1;
            //2.将指令传递给子线程
            worker.postMessage(num);
        }

	sendorder(order);
	
        //3.从子线程接收处理结果并展示
        worker.onmessage = function(event){
			if(event.data)
				{
					 alert('线程处理失败');
				}
            else
			{
				alert(event.data);
			}
        }
}