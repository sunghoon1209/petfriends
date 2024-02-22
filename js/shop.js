window.onload = function () {
    // 검색영역에 focus시 영역등장
    let search = document.getElementById("searchBox");
    let serachPage = document.getElementById("searchPage");

    search.addEventListener("focus", () => {
        serachPage.style.display = "block";
    });

    search.addEventListener("blur", () => {
        serachPage.style.display = "none";
    });

    let cartBtn = document.getElementById("cartBtn");
    let cart = document.getElementById("nav");
    // 장바구니 아이콘 클릭시 열림/닫힘
    cartBtn.addEventListener("click", () => {

        if (cart.style.display === "none" || cart.style.display === "") {
            cart.style.display = "block";
        } else {
            cart.style.display = "none";
        }
    });



};

// 카트추가
// .closest - 상위요소 탐색 후 일치요소 찾으면 검색 멈춤
function addToCart(button) {
    cart.style.display = "block";
    const productDetails = button.closest('.product').querySelector('.product-details');
    const productName = productDetails.querySelector('h2').textContent;
    const productPrice = productDetails.querySelector('.price').childNodes[2].textContent.trim();
    // .childNodes : 모든자식 [2] - 세번째자식, .textContent 내용가져옴 (html무시하고 내용만 가져옴) .trim 공백제거

    const cartItems = document.getElementById('clear-items');
    const listItem = document.createElement('li');
    // .createElement - 새로운 요소 생성

    // 새로운 요소 생성 - 제품명과 가격을 리스트 아이템에 넣어줌
    listItem.textContent = `${productName} - ${productPrice}`;
    listItem.style.display = "inline";

    // 삭제버튼 span 생성
    const removeButton = document.createElement('span');
    removeButton.innerHTML = `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1.56525" width="14.757" height="2.21355" rx="1.10678" transform="rotate(45 1.56525 0)" fill="#FF4081"/>
    <rect x="0.707107" y="10.4348" width="13.757" height="1.21355" rx="0.606776" transform="rotate(-45 0.707107 10.4348)" fill="#FF4081" stroke="#FF4081"/>
    </svg>`;
    // .innerHTML - html 변경시 사용


    // 리스트 아이템 추가
    cartItems.appendChild(listItem);
    // let existingItem = cartItems.querySelector('li').textContent;
    // if (existingItem) {
    //     // 이미 해당 요소가 존재하는 경우 알림창 띄우기
    //     alert('이미 장바구니에 추가되었습니다.');
    // } else {
    //     // 요소를 추가
    //     cartItems.appendChild(listItem);

    // }
    
 


    // x버튼 추가
    listItem.appendChild(removeButton)

    // 마진값 추가
    removeButton.style.margin = '0 30px 0 7px';
    removeButton.style.cursor = 'pointer';

    // x버튼 클릭시 리스트 삭제
    removeButton.addEventListener("click", function () {
        listItem.remove();

    });
}



// 전체삭제
function clearCart() {
    const cartItems = document.getElementById('clear-items');
    cartItems.innerHTML = ''; //모든 자식요소 삭제
}




function toggleLike(button) {
    // 자바스크립트는, 특성상 매개변수에 (button) 로 써주면
    // html 요소로 간주
    // button.textContent = button.classList.contains('like-button') ? '싫어요' : '좋아요';
    button.classList.toggle('like-button');
    button.classList.toggle('unlike-button');
}