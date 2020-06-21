var pages = 10000 ;
setInterval(() => {
    pages+=1
    $('.pages').text(pages)
    if (pages==18500){
        $('.candles').text(2)
        $('.code').prop('hidden',false)
    }
}, 500);
