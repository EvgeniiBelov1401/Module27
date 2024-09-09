let age = prompt("Введите Ваш возраст");
if (age >= 18) {
    alert("Приветствуем Вас на LifeSpot " + new Date().toLocaleString());
}
else {
    alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
    window.location.href = "http://www.google.com";
}
