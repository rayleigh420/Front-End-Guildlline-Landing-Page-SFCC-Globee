// const toggleIcons = document.querySelectorAll('.toggle-icon');
// const contents = document.querySelectorAll('.content');

// toggleIcons.forEach((toggleIcon, index) => {
//     toggleIcon.addEventListener('click', () => {
//         if (contents[index].classList.contains('d-none')) {
//             contents[index].classList.remove('d-none');
//             toggleIcon.textContent = '-';
//         } else {
//             contents[index].classList.add('d-none');
//             toggleIcon.textContent = '+';
//         }
//     });
// });

$(document).ready(function () {
    $('.toggle-icon').on('click', function () {
        var $content = $(this).closest('.footer_info').find('.content');
        if ($content.hasClass('d-none')) {
            $content.removeClass('d-none');
            $(this).text('-');
        } else {
            $content.addClass('d-none');
            $(this).text('+');
        }
    });
});