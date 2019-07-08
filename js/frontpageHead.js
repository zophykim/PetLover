//访问数据库，获取头像图片资源
var headImgPath ='../img/HeadPortrait_default.jpg' ;

//填充原来的头像
function getHeadImgPath() {
  document.getElementById('HeadCut').src = headImgPath;
}

//更换头像,保存图片到服务器
function updateHeadImagPath(file){
  var file=file.files[0];

  var reader=new FileReader();

  reader.readAsDataURL(file);

  reader.onload=function(){
    var img = document.getElementById('HeadCut');
    headImgPath = this.result;
    img.src = headImgPath;

    var imgFill = document.getElementById('fillPic');
    imgFill.style.display = 'inline-block';
    imgFill.src = headImgPath;
  };
}

function sumbitPic(){
  var imgFill = document.getElementById('fillPic');
  imgFill.style.display = 'none';
}

window.onload=function () {
  getHeadImgPath();
};
