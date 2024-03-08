document.addEventListener("DOMContentLoaded", () => {
    // DOM 생성후에 img, input, button 가져오기
    const upDownImg = document.querySelector("img");
    const numInput = document.getElementById("num1");
    const bt = document.querySelector("button");
    const msg = document.querySelector("#msg");

    // 랜덤수 생성 변수
    let n; // undefined(?)
    let flag = false;

    // input focus
    numInput.focus();

    // 버튼의 클릭이벤트 달기
    bt.addEventListener("click", (e) => {
        e.preventDefault();
        // 랜덤수 생성
        // if (flag == false) {
        if (!flag) {
            n = Math.floor(Math.random() * 100 + 1); //1~100까지
            flag = true;

            numInput.style.display = "inline";
            numInput.value = "";
            numInput.focus();
            bt.innerHTML = "확인";

            upDownImg.setAttribute("src", "./img/what.png");
            console.log("n=", n);
        }

        // input 박스 내용 가져오기
        if (numInput.value == "") {
            msg.innerHTML = "<span>숫자를 입력하세요.<span>";
            // alert("숫자를 입력하세요.");
            numInput.focus();
            return; // 아래코드가 더 실행되지 않음
        }

        if (numInput.value < 1 || numInput.value > 100) {
            msg.innerHTML = "<span>1에서 100까지 숫자만 입력하세요.<span>";
            // alert("숫자를 입력하세요.");
            numInput.focus();
            return; // 아래코드가 더 실행되지 않음
        }

        msg.innerHTML = " "
        // 숫자비교
        if (n === parseInt(numInput.value)) {
            // msg.innerHTML = "<span>정답입니다.<span>";
            upDownImg.setAttribute("src", "./img/good.png");
            numInput.style.display = "none";
            bt.innerHTML = "재시작";
            flag = false;
        }
        else if (n > numInput.value) {
            // msg.innerHTML = "<span>UP<span>"
            upDownImg.setAttribute("src", "./img/up.png");
        }
        else {
            // msg.innerHTML = "<span>DOWN<span>"
            upDownImg.setAttribute("src", "./img/down.png");
        }
    })

})