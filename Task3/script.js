let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];

// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
let addresses = [];
for (const user of users) {
    addresses.push(user.address);
}
console.log(addresses);

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
for (let i = 0; i < users.length; i++) {
    let user = users[i];
    const div = document.createElement("div");
    let userName = user.name;
    let userAge = user.age;
    let userStatus = user.status;
    let userAddress = ['city:' + user.address.city, 'country:' + user.address.country, 'street:' + user.address.street, 'houseNumber:' + user.address.houseNumber];
    div.innerText = `name: ${userName}\n age: ${userAge}\n status: ${userStatus}\n address: {${userAddress}}`
    document.body.appendChild(div);
}

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
for (let i = 0; i < users.length; i++) {
    const user = users[i];
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    let address = ['city: ' + user.address.city, ' country: ' + user.address.country, ' street: ' + user.address.street, ' houseNumber: ' + user.address.houseNumber];
    h2.innerText = user.name;
    p1.innerText = user.age;
    p2.innerText = address;
    div.appendChild(h2);
    div.appendChild(p1);
    div.appendChild(p2);
    document.body.appendChild(div)
}

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
for (let i = 0; i < users.length; i++) {
    const user = users[i];
    const div = document.createElement("div");
    const name = document.createElement("h2");
    const age = document.createElement("p");
    const status = document.createElement("p");
    const address = document.createElement("div");
    for (const item in user.address) {
        const adr = document.createElement("div");
        adr.innerHTML = user.address[item];
        address.appendChild(adr);
    }
    name.innerText = user.name;
    age.innerText = user.age;
    status.innerText = user.status;
    div.appendChild(name);
    div.appendChild(age);
    div.appendChild(status);
    div.appendChild(address);
    document.body.appendChild(div);
}

