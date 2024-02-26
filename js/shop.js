$(function () {
    // 탭버튼
    /* 
        카테고리 탭매뉴 ul li 를 tab 변수설정 
        

        변수를 클릭할때 이벤트 발생 

        클릭한 li에 tabOn class 추가 tab 제거

        형제들 요소에 tabOn 제거 후 tab추가
        
    */
    let tab = $("#tab li");
    tab.on("click", function () {
        $(this).addClass("tabOn");
        $(this).removeClass("tab");
        $(this).siblings().removeClass("tabOn");
        $(this).siblings().addClass("tab");

        // 내용 변경

    });

    let sausage = $(".sausage");
    sausage.on("click", function () {
        let img01 = $(".produceMenu01 img");
        let popularProduct01 = $(".produceMenu01 h3");
        let red01 = $(".produceMenu01 .red strong");
        let discoutPrice01 = $(".produceMenu01 span");
        let ea01 = $(".produceMenu01 .ea")
        img01.attr("src", "./images/popularProduct/petmorningchicken.jpeg");
        popularProduct01.text("[30개] 펫모닝 닭가슴살 22g");
        red01.text("33%");
        discoutPrice01.text("12,000원");
        ea01.text("개당 400원 (30개묶음 구매시)");

        let img02 = $(".produceMenu02 img");
        let popularProduct02 = $(".produceMenu02 h3");
        let red02 = $(".produceMenu02 .red strong");
        let discoutPrice02 = $(".produceMenu02 span");
        let ea02 = $(".produceMenu02 .ea")
        img02.attr("src", "./images/popularProduct/wowdogche.jpeg");

        popularProduct02.text("바우와우 독 치즈소세지");
        red02.text("11%");
        discoutPrice02.text("4,000원");
        ea02.text("개당 4,000원(1개묶음 구매시)");

        let img03 = $(".produceMenu03 img");
        let popularProduct03 = $(".produceMenu03 h3");
        let red03 = $(".produceMenu03 .red strong");
        let discoutPrice03 = $(".produceMenu03 span");
        let ea03 = $(".produceMenu03 .ea")
        img03.attr("src", "./images/popularProduct/sticktype.jpeg");
        popularProduct03.text("브리더랩 월간통살 닭가슴살 스틱타입 20g*30p");
        red03.text("");
        discoutPrice03.text("10,900원");
        ea03.text("");

    });
    let bisket = $(".bisket");
    bisket.on("click", function () {
        let img01 = $(".produceMenu01 img");
        let popularProduct01 = $(".produceMenu01 h3");
        let red01 = $(".produceMenu01 .red strong");
        let discoutPrice01 = $(".produceMenu01 span");
        let ea01 = $(".produceMenu01 .ea")
        img01.attr("src", "./images/popularProduct/vegetableMix.png");
        popularProduct01.text("델리마켓 독 마이C리얼 야채믹스 100g");
        red01.text("19%");
        discoutPrice01.text("6,500원");
        ea01.text("개당 5,500원(3개묶음 구매시)");

        let img02 = $(".produceMenu02 img");
        let popularProduct02 = $(".produceMenu02 h3");
        let red02 = $(".produceMenu02 .red strong");
        let discoutPrice02 = $(".produceMenu02 span");
        let ea02 = $(".produceMenu02 .ea")
        img02.attr("src", "images/popularProduct/candyChicken.jpeg");

        popularProduct02.text("너를위한디저트 독 캔디 치킨맛 L 21g");
        red02.text("17%");
        discoutPrice02.text("5,000원");
        ea02.text("개당 4,933원(12개묶음 구매시)");

        let img03 = $(".produceMenu03 img");
        let popularProduct03 = $(".produceMenu03 h3");
        let red03 = $(".produceMenu03 .red strong");
        let discoutPrice03 = $(".produceMenu03 span");
        let ea03 = $(".produceMenu03 .ea")
        img03.attr("src", "images/popularProduct/honeyCake.jpeg");
        popularProduct03.text("도기맨 고구마 벌꿀 케익 100g");
        red03.text("");
        discoutPrice03.text("3,500원");
        ea03.text("");
    });
    let can = $(".can");
    can.on("click", function () {
        let img01 = $(".produceMenu01 img");
        let popularProduct01 = $(".produceMenu01 h3");
        let red01 = $(".produceMenu01 .red strong");
        let discoutPrice01 = $(".produceMenu01 span");
        let ea01 = $(".produceMenu01 .ea")
        img01.attr("src", "images/popularProduct/allinonepackage.jpeg");
        popularProduct01.text("마이베프 별자리스틱 올인원패키지 15g*7p");
        red01.text("2%");
        discoutPrice01.text("5,900원");
        ea01.text("");

        let img02 = $(".produceMenu02 img");
        let popularProduct02 = $(".produceMenu02 h3");
        let red02 = $(".produceMenu02 .red strong");
        let discoutPrice02 = $(".produceMenu02 span");
        let ea02 = $(".produceMenu02 .ea")
        img02.attr("src", "images/popularProduct/ilike.jpeg");

        popularProduct02.text("조공 나 산양유 좋아해  15g 49");
        red02.text("17%");
        discoutPrice02.text("5,000원");
        ea02.text("");

        let img03 = $(".produceMenu03 img");
        let popularProduct03 = $(".produceMenu03 h3");
        let red03 = $(".produceMenu03 .red strong");
        let discoutPrice03 = $(".produceMenu03 span");
        let ea03 = $(".produceMenu03 .ea")
        img03.attr("src", "images/popularProduct/yellowchicken.jpeg");
        popularProduct03.text("조공 오키로스틱 옐로우 닭가슴살 14g*4p");
        red03.text("20%");
        discoutPrice03.text("3,200원");
        ea03.text("");
    });


});


window.onload = function () {
    // 인기검색어 
    let today = new Date();

    let year = today.getFullYear();
    let month = ('0' + (today.getMonth() + 1)).slice(-2);
    let day = ('0' + today.getDate()).slice(-2);

    let dateString = year + '년' + month + '월' + day + '일 기준';
    let time = document.getElementById("time");
    time.textContent = dateString;
    console.log(time);


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
        listItem.textContent = `${productName} | ${productPrice}`;
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
    listTotalPrice.textContent = totalPrice + '원';
}




// 전체삭제





function toggleLike(button) {
    // 자바스크립트는, 특성상 매개변수에 (button) 로 써주면
    // html 요소로 간주
    // button.textContent = button.classList.contains('like-button') ? '싫어요' : '좋아요';
    button.classList.toggle('like-button');
    button.classList.toggle('unlike-button');
}