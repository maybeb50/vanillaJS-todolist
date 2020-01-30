(function(window) {
    'use strict';
    // Vanilla JS, Pure Javascript Code

    const inputBox = document.querySelector('input');
    const inputArea = document.querySelector('.input-area');
    const listParent = document.getElementById('list-area');
    const btnListDelete = document.querySelectorAll('.btn-list-delete');

    function listChecked(_list) {
        listParent.appendChild(_list);
    }

    function listCheck(list) {
        const check = document.createElement('span');
        const isCheck = list.querySelector('.check');

        check.className = 'check';
        check.innerHTML = '&#x2713;'

        if(isCheck !== null) {
            list.querySelector('.check').remove();
            listParent.prepend(list);
        } else {
            list.appendChild(check);
            listChecked(list);
        }
    }

    function listAdd(_this) {
        const inputValue = _this.value;
        const list = document.createElement('li');
        const paragraph = document.createElement('p');
        const createBtn =  document.createElement('button');
        const errorElement =  document.createElement('p');
        const isError = inputArea.querySelector('.error');

        list.className = 'list-item';
        paragraph.innerHTML = inputValue;
        createBtn.type = 'button'
        createBtn.className = 'btn-list-delete';
        createBtn.innerHTML = '&#x2715;';

        errorElement.className = 'error';
        errorElement.innerHTML = 'Please enter a list!';

        list.appendChild(paragraph);
        list.appendChild(createBtn);
        
        if(inputValue == '') {
            // input value null 
            if(isError === null) {
                inputArea.appendChild(errorElement);
            } 
        } else {
            listParent.prepend(list);
            if(isError !== null) {
                inputArea.querySelector('.error').remove();
            };
        }
    }

    function init() {
        inputBox.addEventListener('keydown', function(event) {
            if(event.keyCode == 13) {
                listAdd(this);
                this.value = '';
            }
        });

        // 동적으로 생성된 요소에 이벤트를 위임해야함. 제이쿼리랑 비슷하네.
        document.addEventListener('click', function(event) {
            if(event.target && event.target.className == 'btn-list-delete') {
                let btnParentNode = event.target.parentNode;
                btnParentNode.remove();
            } 

            if(event.target && event.target.parentNode.className == 'list-item') {
                let listParentNode = event.target.parentNode;
                listCheck(listParentNode);
            }
        });
    }

    init();
   
})(window);