const main = () => {
    $('.more-btn').on('click', event => {
        // all direct siblings toggle
        $(event.currentTarget).siblings('.more-menu').toggle()
    })
    $('.share').on('click', event => {
        // next element toggle
        $(event.currentTarget).next().toggle()
    })
    $('.notification').on('click', event => {
        $(event.currentTarget).toggleClass('active')
    })
};

$(document).ready(main);