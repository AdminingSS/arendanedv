import 'jquery.maskedinput/src/jquery.maskedinput';

$(()=>{
    //masked input
    (() => {
        const $phoneInputs = $("#form-apt-text-phone, #form-call-text-phone");

        $phoneInputs.mask("+7 (999) 999 - 99 - 99");
    })();
});