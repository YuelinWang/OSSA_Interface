function BackTop() {
    document.documentElement.scrollTop = window.pageYOffset = document.body.scrollTop = 0;
}

function BodyScroll() {
    var s = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    var t = document.getElementById('back');
    var flexs = window.scrollX;
    $('.headerBackground').css(
        'opacity',
        function() {
            return s / 1000;
        }
    );
    $('.header').css(
        'left',
        function() {
            return -flexs;
        }
    );
    //console.log(jq_opacity);
    //console.log(s);
    if (s >= 100) {
        t.classList.remove('hide');
    } else {
        t.classList.add('hide');
    }
}