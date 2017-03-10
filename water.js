<canvas id="myCanvas" style="display: none;" ></canvas>
    <img id="water_mark" src="/statics/images/common/watermark.png" alt="" style="display:none">

    /**
     * Created by Administrator on 2016/12/28 0028.
     */
    $(function(){
        $(".watermark").each(function(){
            var _thisimg = this;
            var img = new Image();
            img.src = $(this).attr("src");

            // 加载完成开始绘制
            img.onload=function(){
                //准备canvas环境
                var canvas=document.getElementById("myCanvas");
                $(canvas).attr("height", img.height);
                $(canvas).attr("width", img.width);
                var ctx=canvas.getContext("2d");
                ctx.clearRect(0,0,img.width,img.height);
                ctx.drawImage(img,0,0);
                var watermark = new Image();
                watermark.src= $("#water_mark").attr("src");
                var positionX = (img.width - watermark.width)/2
                var positionY = (img.height - watermark.height)/2
                ctx.drawImage(watermark,positionX,positionY);
                // 绘制图片
                var src = canvas.toDataURL("image/jpeg");
                $(_thisimg).attr("src",src);
            }
        });
    });