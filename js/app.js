let active_item = document.querySelectorAll('#active_item_Group li');
let arr_active_item = Array.from(active_item);
arr_active_item.forEach(element => {
    element.addEventListener('click', function(){
        arr_active_item.forEach(ele => {
            ele.classList.remove('active_item')
        });
        element.classList.add('active_item')
    })
});