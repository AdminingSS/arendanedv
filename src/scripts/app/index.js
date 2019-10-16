$(() => {
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

            if ($elem.hasClass('uk-active')) return;

            $imgSwitchTopMM.removeClass('uk-active');
            $elem.addClass('uk-active');
        });

        $imgTriggerBottomMM.on('click', function (e) {
            e.preventDefault();
            e.stopImmediatePropagation();

            const $elemIndex = $(this).index() - 4;

            const $elem = $($imgSwitchBottomMM[$elemIndex]);

            if ($elem.hasClass('uk-active')) return;

            $imgSwitchBottomMM.removeClass('uk-active');
            $elem.addClass('uk-active');
        });

        $imgTriggerTop.on('mouseenter', function () {

            const $elemIndex = $(this).index() - 6;
            const $elemIndexM = $(this).index() - 4;

            const $elem = $($imgSwitchTop[$elemIndex]);
            const $elemM = $($imgSwitchTopM[$elemIndexM]);

            if ($elem.hasClass('uk-active') || $elemM.hasClass('uk-active')) return;

            $imgSwitchTop.removeClass('uk-active');
            $elem.addClass('uk-active');

            $imgSwitchTopM.removeClass('uk-active');
            $elemM.addClass('uk-active');
        });

        $imgTriggerBottom.on('mouseenter', function () {

            const $elemIndex = $(this).index() - 6;
            const $elemIndexM = $(this).index() - 4;

            const $elem = $($imgSwitchBottom[$elemIndex]);
            const $elemM = $($imgSwitchBottomM[$elemIndexM]);

            if ($elem.hasClass('uk-active') || $elemM.hasClass('uk-active')) return;

            $imgSwitchBottom.removeClass('uk-active');
            $elem.addClass('uk-active');

            $imgSwitchBottomM.removeClass('uk-active');
            $elemM.addClass('uk-active');
        });
    })();

    //modal number transfer
    (() => {
        const modalHolder = $('#modalApt');
        const modalTriggers = $('.tm-modal-apt-transfer-trigger');

        modalTriggers.on('click', function () {
            const $currentTrigger = $(this);
            const $itemNumber = modalHolder.find('[name ="item-number"]');
            const currentNumber = $currentTrigger.parents('tr').find('.tm-item-number').html();

            $itemNumber.val(currentNumber);
        });
    })();

    //modal submits
    // (() => {
    //     const modalHolders = $('#modalApt, #modalCall');
    //     const modalSubmits = modalHolders.find('.uk-button-primary');
    //
    //     modalSubmits.on('click', function () {
    //         UIkit.modal(modalHolders).hide();
    //     });
    // })();

    //file upload things
    (() => {
        const $fileTrigger = $('.tm-file-trigger');
        const $filePreview = $('.tm-files-preview');

        $fileTrigger.on('change', readURL)

        function readURL() {
            const input = this;
            if (input.files && input.files[0]) {
                let cntr = input.files.length;

                $filePreview.html('');

                while (cntr) {
                    const reader = new FileReader();

                    cntr--;

                    reader.onload = function (e) {
                        $filePreview.append('<div><img src="' + e.target.result + '"></div>');
                    };

                    reader.readAsDataURL(input.files[cntr]);
                }
            }
        }
    })();

    //ajax things
    (() => {
        const $modalHolders = $('#modalApt, #modalCall');
        const $modalSubmits = $modalHolders.find('.uk-button-primary');

        // $modalSubmits.on('click', function (e) {
        //     e.preventDefault();
        //     $(this).parents('form').validate();
        // })

        $modalHolders.on('submit', function (e) {
            e.preventDefault();
            // e.stopPropagation();
            // e.stopImmediatePropagation();

            const $formElement = $(this).find('form');
            const $aForm = $formElement[0];
            const $modalSuccess = $('#modalSuccess');
            const data = new FormData($aForm);

            $.ajax({
                url:     '/mail/mailer.php', //url страницы (action_ajax_form.php)
                type:     "POST", //метод отправки
                enctype: 'multipart/form-data',
                //dataType: "html", //формат данных
                processData: false,
                contentType: false,
                data: data, //data,  // Сеарилизуем объект
                success: function(response) { //Данные отправлены успешно
                    UIkit.modal($modalHolders).hide();
                    setTimeout(function () {
                        UIkit.modal($modalSuccess).show();
                    }, 2000);
                },
                error: function(response) { // Данные не отправлены
                    UIkit.modal($modalHolders).hide();
                    setTimeout(function () {
                        alert('Ошибка. Данные не отправлены.');
                    }, 2000);
                }
            });

            // const formData = $aForm.serialize();
            //
            // $.ajax({
            //     url: '/mail/mailer.php',
            //     type: 'POST',
            //     data: formData,
            //     async: false,
            //     cache: false,
            //     contentType: false,
            //     processData: false,
            //     success: function (response) { //Данные отправлены успешно
            //         UIkit.modal($modalHolders).hide();
            //         setTimeout(function () {
            //             UIkit.modal($modalSuccess).show();
            //         }, 2000);
            //     },
            //     error: function (response) { // Данные не отправлены
            //         UIkit.modal($modalHolders).hide();
            //         setTimeout(function () {
            //             alert('Ошибка. Данные не отправлены.');
            //         }, 2000);
            //     }
            // });
        });
    })();

    (() => {
        const $table = $('.tm-table');
        const $window = $(window);

        $window.on('scroll', scrollHandler);

        function scrollHandler() {

                if ( $window.scrollTop() + $window.height() > $table.offset().top + 300 ) {
                    animateTable();
                    $window.off('scroll', scrollHandler);
                }

        }

        function animateTable() {

            if($window.width() < $table.width()) {
                let cntr = 1;
                const tableInterval = setInterval(function () {

                    $table.parent('div').scrollLeft(cntr);
                    cntr += 1;
                }, 20);

                $table.on('click', function () {
                    clearInterval(tableInterval);
                });
            }
        }
    })();

});