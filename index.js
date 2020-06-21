var pages = 0 ;
setInterval(() => {
    pages+=1
    $('.pages').text(pages)
    if (pages==3675){
        $('.candles').text(1)
    }
}, 500);