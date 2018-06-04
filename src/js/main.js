const $ = require('jquery');
const btn = $('<button>').html('Нажми на меня').css({
    color: 'red'
});
$('body').append(btn);