  // 四种彩蛋图比例 1:2:3:4
  var imgs=[
    // 10%
    "4-圣蛋礼物.png",
    // 20%
    "2-把好玩的游戏给我.png","2-把好玩的游戏给我.png",
    // 30%
    "5-叮叮当.png","5-叮叮当.png","5-叮叮当.png",
    // 40%
    "1-我是圣蛋.png","1-我是圣蛋.png","1-我是圣蛋.png","1-我是圣蛋.png"
  ]
  // 画图专用彩蛋   .puffIn
  var imgPic="3-达芬奇世界.png";


$(function(){
  
  //点赞     回复    发帖
  // #link  #reply  #posts
  $("#like").click(function(){
    delPaintedImg()
    getImage(RndNum(1));
  })
  $("#reply").click(function(){
    delPaintedImg()
    getImage(RndNum(1));
  })
  $("#posts").click(function(){
    delPaintedImg()
    getImage(RndNum(1));
  })

  // 固定彩蛋  lilith-submit  
  var text = ["达芬奇","快乐","一起做好玩的游戏","莉莉丝","礼物","牛魔王","喵莉丝","雪花","心心","林克","村长","王师傅"];
  $("#lilith-submit").click(function(){
    var wordLen = $(".lilith-input").val();
    for (let i = 0; i < text.length; i++) {
      var nextNode = wordLen.search(text[i])
      if(nextNode >=0){
        delPaintedImg()
        var imgValue = imgHtml("puffIn",imgPic);
        $("body").append(imgValue);
        return;
      }
    }
  })

  $(document).on('click', '.close-span',function(){
    $(".close-span").parent().remove()
  });

})

// 出现随机彩蛋
function getImage(rndNum){
  var classStyle = "";
  if(["0"].indexOf(rndNum)>-1){
    classStyle="foolishIn";
  }
  if(["1","2"].indexOf(rndNum)>-1){
    classStyle="spaceInUp";
  }
  if(["3","4","5"].indexOf(rndNum)>-1){
    classStyle="bounceBox";
  }
  if(["6","7","8","9"].indexOf(rndNum)>-1){
    classStyle="bounceJump";
  }
  // console.log(rndNum,classStyle)
  var imgValue = imgHtml(classStyle,imgs[rndNum]);
  $("body").append(imgValue);
}

// 动态加载DOM
function imgHtml(classStyle,img){
  var htmlVal = '<div id="paintedImg">'+
                '<span class="close-span"></span>'+
                '<img class="'+classStyle+'" src="img/'+img+'" alt="img">'+
                '<p> IDIDIDIDIDID </p>'+
              '</div>';
  return htmlVal;
}

// 删除动态DOM
function delPaintedImg(){
  $("#paintedImg").remove()
}

// 10以内的随机数字
function RndNum(n){
  var rnd="";
  for(var i=0;i<n;i++)
    rnd+=Math.floor(Math.random()*10);
  return rnd;
}


