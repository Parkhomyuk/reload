/*
document.body.onload=function(){
    var loader=document.getElementById('load');
    if(!loader.classList.contains('done')){
        setTimeout(function(){
            loader.classList.add('done');
        }, 5000);
    }
}*/
/*
document.body.onload=function(){
    var loader=document.getElementById('load2');
    if(!loader.classList.contains('done')){
        setTimeout(function(){
            loader.classList.remove('loader2');
            loader.classList.add('done');
        }, 5000);
    }
}*/

var images=document.images;
var images_total_count=images.length;
console.log('images.length '+images.length);
var images_loaded_count=0;
var perc_display=document.getElementById('loader_perc');
for(var i=0;i<images_total_count;i++){
    console.log(images_total_count);
    var image_clone= new Image();
    image_clone.onload=image_load;
    image_clone.onerror=image_load;
    image_clone.src=images[i].src;
}

function image_load(){
    images_loaded_count++;
    perc_display.innerHTML=(((100/images_total_count)*images_loaded_count)<<0)+'%';
    if(images_loaded_count>=images_total_count){
        document.body.onload=function(){
            var loader=document.getElementById('load2');
            if(!loader.classList.contains('done')){
                setTimeout(function(){
                    loader.classList.remove('loader2');
                    loader.classList.add('done');
                }, 1000);
            }
        }
    }

}



function test() {
    var loader = document.getElementById('load2');
    if (!loader.classList.contains('done')) {
        setTimeout(function () {
            loader.classList.remove('loader2');
            loader.classList.add('done');
        }, 5000);
    }
}