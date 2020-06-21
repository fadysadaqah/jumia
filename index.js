var pages = 20145 ;
setInterval(() => {
    pages+=1
    $('.pages').text(pages)
    if (pages==21000){
        $('.code').prop('hidden',false)
        $('.pages').prop('hidden',true)
        $('.title').prop('hidden',true)
        $('.body').css('background','red')
    }
}, 500);
