﻿const ShowGreeting = () => alert("Приветствуем Вас на странице 'О проекте'");

function GetComment() {
    let comment = {};
    comment.author = prompt("Напишите Ваше имя:");
    if (comment.author == null) {
        return;
    }
    comment.text = prompt("Напишите Ваш отзыв:");
    if (comment.text == null) {
        return;
    }
    comment.date = new Date().toLocaleString();

    let enableLikes = confirm('Разрешить пользователям оценивать ваш отзыв?');
    if (enableLikes) {
        let review = Object.create(comment);
        review.rate = 0;
        writeReview(review);
    }
    else {
        writeReview(comment);
    }

}
const writeReview = review => {
    let likeCounter = '';
    if (review.hasOwnProperty('rate')) {
        likeCounter += '           <b style="color: chocolate">Рейтинг:</b>   ' + review.rate;
    }
    document.getElementsByClassName('reviews')[0].innerHTML += '    <div class="review-text">\n' +
        `<p> <i> <b>${review['author']}</b>  ${review['date']}${likeCounter}</i></p>` +
        `<p>${review['text']}</p>` +
        '</div>';
}