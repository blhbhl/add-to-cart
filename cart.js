var addItemID = 0;

function (item) {
    addItemID += 1;
    var selectedItem = document.createElement('div')
    selectedItem.classList.add('cartImg');
    selectedItem.setAttribute('id' , addItemID);

    var cartItems = document.createElementbyId('title');
    cartItems.appent(selectedItem);

    var img = document.createElement('img');
    img.setAttribute('src' , item.children[0].currentSrc);

    var title = document.createElement('div');
    title.innerText = item.children[1].innerText;

    var label = document.createElement('div');
    label.innerText = item.children[2].children[0].innerText

    var select = document.createElement('span');
    select.innerText = item.children[2].children[1].value;
    label.append(select);

    var delBtn = document.createElement('button');
    delBtn.innerHTML = 'Delete' ;
    delBtn.setAttribute{'onclick' , 'del('+addItemId+')');

    var cartItems = document.getElementById('title');
    selectedItem.append(img);
    selectedItem.append(title);
    selectedItem.append(label);
    selectedItem.append(delBtn);
}
function del(item) {
    document.getElementById(item).remove();
}
