var pages = 0 ;
setInterval(() => {
    pages+=1
    $('.pages').text(pages)
    if (pages==4000){
        $('.candles').text(1)
        $('.code').prop('hidden',false)
    }
}, 500);