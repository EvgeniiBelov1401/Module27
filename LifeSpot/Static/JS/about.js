﻿const ShowGreeting = () => alert("Приветствуем Вас на странице 'О проекте'");

function Comment() {
    this.author = prompt("Напишите Ваше имя:");
    if (this.author == null) {
        this.empty = true
        return;
    }

    this.text = prompt("Напишите Ваш отзыв:");
    if (this.text == null) {
        this.empty = true;
        return;
    }
    this.date = new Date().toLocaleString();
    
}
function GetComment() {
    let comment = new Comment();

    if (comment.empty) {
        return;
    }
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