$(()=>{
    //image switcher
    (() => {
        const $imgSwitchTop = $('.tm-active-image-top .tm-active-image');
        const $imgSwitchBottom = $('.tm-active-image-bottom .tm-active-image');
        const $imgTriggerTop = $('.tm-image-trigger');
        const $imgTriggerBottom = $('.tm-image-trigger-bottom');

        $imgTriggerTop.on('click', function () {
            console.log($(this));
            const $elemIndex = $(this).index() - 6;
            console.log($elemIndex);
            const $elem = $($imgSwitchTop[$elemIndex]);
            if($elem.hasClass('uk-active')) return;
            $imgSwitchTop.removeClass('uk-active');
            $elem.addClass('uk-active');
        });

        $imgTriggerBottom.on('click', function () {
            const $elemIndex = $(this).index() - 6;
            const $elem = $($imgSwitchBottom[$elemIndex]);
            if($elem.hasClass('uk-active')) return;
            $imgSwitchBottom.removeClass('uk-active');
            $elem.addClass('uk-active');
        });
    })();
});