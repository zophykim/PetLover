//添加关注，关注按钮切换成已关注按钮
function Checked(){
  document.getElementById('AddCheck').style.display = 'none';
  document.getElementById('CancleCheck').style.display = 'inline-block';
}
//取消关注，已关注按钮切换成关注按钮
function UnChecked(){
  document.getElementById('AddCheck').style.display = 'inline-block';
  document.getElementById('CancleCheck').style.display = 'none';
}
