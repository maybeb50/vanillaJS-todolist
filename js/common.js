(function(window) {
    'use strict';
    // Vanilla JS, Pure Javascript Code

    const inputBox = document.querySelector('input');
    const listParent = document.getElementById('list-area');
    const btnListDelete = document.querySelectorAll('.btn-list-delete');

    function listCheck(list) {
        list.childNodes;
        console.log(list.childNodes);
    }

    function listAdd(_this) {
        const inputValue = _this.value;
        const list = document.createElement('li');
        const paragraph = document.createElement('p');
        const createBtn =  document.createElement('button');

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

        // 동적으로 생성된 요소에 이벤트를 위임해야함. 제이쿼리랑 비슷하네.
        document.addEventListener('click', function(event) {
            console.log(event.target.parentNode.className);
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