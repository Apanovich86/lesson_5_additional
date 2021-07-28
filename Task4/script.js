// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//     створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.

let idContent = document.getElementById('content');
let headTags = document.getElementsByTagName('h2');
let ul = document.createElement('ul');

for (const headTag of headTags) {
    let li = document.createElement('li');
    li.innerText=headTag.innerText;
    ul.append(li);
    idContent.append(ul);
}
