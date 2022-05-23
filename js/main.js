const products = [
    {id: 1, title: 'Notebook', price: 2000, img: 'laptop.png'},
    {id: 2, title: 'Mouse', price: 20, img: 'mouse.png'},
    {id: 3, title: 'Keyboard', price: 200, img: 'keyboard.png'},
    {id: 4, title: 'Gamepad', price: 50, img: 'gamepad.png'},
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = ({title, price, img, id}) => {
    return `<div class="product-item" data-id="${id}">
                <img src="images/${img}" alt="${title}">
                <h3 class="product-item__title">${title}</h3>
                <p>Цена: ${price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
};

// Эти запятые выводятся из массива который мы вставляем в DOM элемент
// Чтобы убрать запятые можно воспользоваться методом join('') без разделителя  
const renderPage = list => {
    const productsList = list.map(item => renderProduct({
        title: item.title,
        price: item.price,
        img: item.img,
        id: item.id
    })).join('');
    document.querySelector('.products').innerHTML = productsList;
};

renderPage(products);