$(()=>{
    //image switcher
    (() => {
        const $imgSwitchTop = $('.tm-active-image-top.tm-desctop-AI .tm-active-image');
        const $imgSwitchBottom = $('.tm-active-image-bottom.tm-desctop-AI .tm-active-image');
        const $imgTriggerTop = $('.tm-image-trigger');
        const $imgTriggerBottom = $('.tm-image-trigger-bottom');

        const $imgSwitchTopM = $('.tm-active-image-top.tm-mobile-AI .tm-active-image');
        const $imgSwitchBottomM = $('.tm-active-image-bottom.tm-mobile-AI .tm-active-image');

        const $imgTriggerTopMM = $('.tm-images-mobile .tm-image-trigger');
        const $imgTriggerBottomMM = $('.tm-images-mobile .tm-image-trigger-bottom');

        const $imgSwitchTopMM = $('.tm-images-mobile .tm-active-image-top.tm-mobile-AI .tm-active-image');
        const $imgSwitchBottomMM = $('.tm-images-mobile .tm-active-image-bottom.tm-mobile-AI .tm-active-image');

        $imgTriggerTopMM.on('click', function (e) {
            e.preventDefault();
            e.stopImmediatePropagation();

            const $elemIndex = $(this).index() - 4;

            const $elem = $($imgSwitchTopMM[$elemIndex]);

            if($elem.hasClass('uk-active')) return;

            $imgSwitchTopMM.removeClass('uk-active');
            $elem.addClass('uk-active');
        });

        $imgTriggerBottomMM.on('click', function (e) {
            e.preventDefault();
            e.stopImmediatePropagation();

            const $elemIndex = $(this).index() - 4;

            const $elem = $($imgSwitchBottomMM[$elemIndex]);

            if($elem.hasClass('uk-active')) return;

            $imgSwitchBottomMM.removeClass('uk-active');
            $elem.addClass('uk-active');
        });

        $imgTriggerTop.on('click', function () {

            const $elemIndex = $(this).index() - 6;
            const $elemIndexM = $(this).index() - 4;

            const $elem = $($imgSwitchTop[$elemIndex]);
            const $elemM = $($imgSwitchTopM[$elemIndexM]);

            if($elem.hasClass('uk-active') || $elemM.hasClass('uk-active')) return;

            $imgSwitchTop.removeClass('uk-active');
            $elem.addClass('uk-active');

            $imgSwitchTopM.removeClass('uk-active');
            $elemM.addClass('uk-active');
        });

        $imgTriggerBottom.on('click', function () {

            const $elemIndex = $(this).index() - 6;
            const $elemIndexM = $(this).index() - 4;

            const $elem = $($imgSwitchBottom[$elemIndex]);
            const $elemM = $($imgSwitchBottomM[$elemIndexM]);

            if($elem.hasClass('uk-active') || $elemM.hasClass('uk-active')) return;

            $imgSwitchBottom.removeClass('uk-active');
            $elem.addClass('uk-active');

            $imgSwitchBottomM.removeClass('uk-active');
            $elemM.addClass('uk-active');
        });
    })();
});