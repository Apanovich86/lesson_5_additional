const getAllBtn = document.getElementById('getAll');
getAllBtn.onclick = function () {
    const allItemsJSON = localStorage.getItem('storage');
    if (!allItemsJSON) {
        return
    }
        const items = JSON.parse(allItemsJSON);
        for (const item of items) {
            const itemDiv = document.createElement('div');
            const button = document.createElement('button');
            button.innerHTML = 'DELETE';
            button.onclick = function (ev) {
                const divToRemove = ev.path[1];
                console.log(divToRemove);
              const id = itemDiv.innerText.split(')')[0];
              console.log(id);
              const  indexToRemove = items.findIndex(function (item){
                  return item.id == +id;
                });
              items.splice(id-1, 1);
              localStorage.setItem('storage', JSON.stringify(items));
                divToRemove.innerHTML = '';
            }
            itemDiv.innerHTML = `<div>${item.id}) NAME: ${item.name};</div><div>COUNT: ${item.count}</div> <div><img src="${item.image}"></div> <div>PRICE: ${item.price}</div> `;
            itemDiv.appendChild(button);
            document.body.appendChild(itemDiv);
        }
}