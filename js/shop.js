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

        if (cart.style.right === "-100%" || cart.style.right === "") {
            // cart.style.display = "block";
            cart.style.right = "10px";
        } else {
            // cart.style.display = "none";
            cart.style.right = "-100%";
        }
    });
    document.getElementById('xb').addEventListener("click", () => {
        cart.style.right = "-100%";
    })


};
// 이미 리스트에 올라가있을때 알림창


// 카트추가

// .closest - 상위요소 탐색 후 일치요소 찾으면 검색 멈춤

let totalPrice = 0;

function addToCart(button) {
    let cart = document.getElementById("nav");
    // cart.style.display = "block";
    cart.style.right = "10px";
    const productDetails = button.closest('.product').querySelector('.product-details');
    const productName = productDetails.querySelector('h2').textContent;
    const productPrice = productDetails.querySelector('.price').childNodes[2].textContent.trim();
    // .childNodes : 모든자식 [2] - 세번째자식, .textContent 내용가져옴 (html무시하고 내용만 가져옴) .trim 공백제거

    const cartItems = document.getElementById('clear-items');
    // 총금액담는 li
    const listTotalPrice = document.getElementById('total');
    const existingItems = cartItems.querySelectorAll('li');

    // isExisting 선언 후 초기값 false
    // 중복된 제품이 카트에 있는지 여부 판단시 사용
    // 중복된 제품이 있을시 isExisting 을 true로 변경

    /* 포함되어있는 경우 안되게 */
    let isExisting = false;
    // .include ->포함되어있는지 확인하는 메서드


    existingItems.forEach(item => {
        if (item.textContent.includes(productName)) {
            isExisting = true;
            return //실행중지(종료)
            // 포함되어있으면 true 반환, 그렇지 않으면 false 반환
        }
    });

    // .createElement - 새로운 요소 생성

    // ! -> 논리부정연산자 - false일때 참, true일때 거짓으로
    // 새로운 요소 생성 - 제품명과 가격을 리스트 아이템에 넣어줌
    if (!isExisting) {
        const listItem = document.createElement('li');
        listItem.textContent = `${productName} - ${productPrice}`;
        // listItem.style.display = "inline";
        listItem.style.width = "600px"
        listItem.style.textAlign = "center"

        // 삭제버튼 span 생성
        const removeButton = document.createElement('span');
        removeButton.innerHTML = `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1.56525" width="14.757" height="2.21355" rx="1.10678" transform="rotate(45 1.56525 0)" fill="#FF4081"/>
    <rect x="0.707107" y="10.4348" width="13.757" height="1.21355" rx="0.606776" transform="rotate(-45 0.707107 10.4348)" fill="#FF4081" stroke="#FF4081"/>
    </svg>`;
        // .innerHTML - html 변경시 사용

        // 리스트 아이템 추가
        cartItems.appendChild(listItem);

        // 제품 가격을 총 가격에 더하기

        // 숫자가 아닌 문자열을 매칭하는 정규식

        let regex = /[^0-9]/g;
        // 원래 문자열에서 숫자가 아닌 모든 문자열을 빈 문자로 변경
        let result = productPrice.replace(regex, "");
        // 추출한 문자열을 숫자로 변환
        let productPriceNum = Math.floor(result)

        console.log(result);
        totalPrice += productPriceNum



        updateTotalPrice();

        // x버튼 추가
        listItem.appendChild(removeButton)

        // 마진값 추가
        removeButton.style.margin = '0 30px 0 7px';
        removeButton.style.cursor = 'pointer';

        // x버튼 클릭시 리스트 삭제
        removeButton.addEventListener("click", function () {
            listItem.remove();


            totalPrice -= productPriceNum;
            // 총 가격 업데이트
            updateTotalPrice()

        });

    }
    // 총가격 업데이트 함수
    function updateTotalPrice() {

        listTotalPrice.textContent = totalPrice + '원';
    }



}

function clearCart() {
    const cartItems = document.getElementById('clear-items');
    cartItems.innerHTML = ''; //모든 자식요소 삭제
    const listTotalPrice = document.getElementById('total');
    // 합계금액 0원으로 초기화
    totalPrice -= totalPrice;
    // listTotalPrice.remove();
    console.log(totalPrice)
    listTotalPrice.textContent =totalPrice + '원';
}




// 전체삭제





function toggleLike(button) {
    // 자바스크립트는, 특성상 매개변수에 (button) 로 써주면
    // html 요소로 간주
    // button.textContent = button.classList.contains('like-button') ? '싫어요' : '좋아요';
    button.classList.toggle('like-button');
    button.classList.toggle('unlike-button');
}