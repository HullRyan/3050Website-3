function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

function collapsible(id) {
    document.getElementById(id).classList.toggle(document.getElementById(id).classList[0] + "Active");
    console.log(document.getElementById(id).classList[0] + "Active");
    let sign = document.getElementById(id).children[0]
    let content = document.getElementById(id).nextElementSibling;
    if (content.style.maxHeight) {
        content.style.maxHeight = null;

        delay(200).then(() => content.style.padding = 0 + "%");
        sign.innerHTML = '+';
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
        content.style.padding = 1 + "%";
        sign.innerHTML = '-';
    }
    $(document).ready(function () {
        $("#slide").bxSlider({
            auto: false,
            minSlides: 1,
            maxSlides: 1,
            slideMargin: 10,
            slideWidth: 400,
            slideHeight: 400,
            adaptiveHeight: true,
            captions: false,
            pager: true,
            shrinkItems: false,
        });
    });
    $('.bx-next')[0].addEventListener('click', function () {
        $('#captionP')[0].innerText = $('ul li img')[parseInt($('a.bx-pager-link.active')[0].innerText)].title
    })
    $('.bx-prev')[0].addEventListener('click', function () {
        $('#captionP')[0].innerText = $('ul li img')[parseInt($('a.bx-pager-link.active')[0].innerText)].title
    })
    $('.bx-pager-link').each(function () {
        console.log(this);
        this.addEventListener('click', function () {
            $('#captionP')[0].innerText = $('ul li img')[parseInt(this.innerText)].title
            console.log('else')
        })
    })
}

