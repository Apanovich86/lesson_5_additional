const form = document.forms.itemForm;
const name = form.name;
const count = form.count;
const price = form.price;
const image = form.image;
const ok = form.ok;
ok.onclick = function (ev) {
    ev.preventDefault();
    let storage = [];
    const storageJSON = localStorage.getItem('storage');
    if (storageJSON) {
        storage = JSON.parse(storageJSON);
    }
    storage.push({
        name: name.value,
        count: count.value,
        price: price.value,
        image: image.value,
        id: storage.length + 1});
    localStorage.setItem('storage', JSON.stringify(storage));
}
ok.style.margin = '10px 0';