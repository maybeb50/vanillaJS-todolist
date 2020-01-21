(function(window) {
    'use strict';
    // Vanilla JS, Pure Javascript Code

    const inputBox = document.querySelector('input');
    const listParent = document.getElementById('list-area');
    const btnListDelete = document.getElementsByClassName('btn-list-delete')

    function listAdd(_this) {
        let inputValue = _this.value;
        let list = document.createElement('li');
        let paragraph = document.createElement('p');
        let createBtn =  document.createElement('button');

        list.className = 'list-item';
        paragraph.innerHTML = inputValue;
        createBtn.type = 'button'
        createBtn.className = 'btn-list-delete';
        createBtn.innerHTML = '&#x2715;';

        list.appendChild(paragraph);
        list.appendChild(createBtn);
        
        // 에러메세지 추가 필요함

        if(inputValue == '') {
            // input value null 
        } else {
            listParent.appendChild(list);
        }
    }

    function init() {
        inputBox.addEventListener('keydown', function(event) {
            if(event.keyCode == 13) {
                listAdd(this);
                this.value = '';
            }
        });

        btnListDelete[0].addEventListener('click', function(event) {
            console.log('클릭');
        }, false);

    }

    init();
   
})(window);