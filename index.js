var pages = 19154 ;
setInterval(() => {
    pages+=1
    $('.pages').text(pages)
    if (pages==21000){
        $('.code').prop('hidden',false)
        $('.pages').prop('hidden',true)

    }
}, 500);
