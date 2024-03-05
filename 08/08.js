document.addEventListener("DOMContentLoaded", () => {
    // DOM 생성후에 img, input, button 가져오기
    const upDownImg = document.querySelector("img");
    const numInput = document.getElementById("num1");
    const bt = document.querySelector("button");
    const msg = document.querySelector("#msg");

    // 랜덤수 생성 변수
    let n; // undefined(?)
    let flag = false;

    // 버튼의 클릭이벤트 달기
    bt.addEventListener("click", (e)=>{
        e.preventDefault();
        // 랜덤수 생성
        // if (flag == false) {
        if (!flag) {
            n = Math.floor(Math.random()*100+1); //1~100까지
            flag = true;
            bt.innerHTML = "확인";
            upDownImg.setAttribute("src", "./img/what.png");
            console.log("n=", n);
        }

        // input 박스 내용 가져오기
        if (numInput.value == ""){
            msg.innerHTML = "<sapne>숫자를 입력하세요.</span>";
            // alert("숫자를 입력하세요.");
            numInput.focus();
            return; // 아래코드가 더 실행되지 않음
        }

        msg.innerHTML = " "
        // 숫자비교
        if (n === parseInt(numInput.value)) {
            // msg.innerHTML = "<sapne>정답입니다.</span>";
            upDownImg.setAttribute("src", "./img/good.png");
            bt.innerHTML = "다시";
            flag = false;
        }
        else if (n > numInput.value) {
            // msg.innerHTML = "<sapne>UP</span>"
            upDownImg.setAttribute("src", "./img/up.png");
        }
        else {
            // msg.innerHTML = "<sapne>DOWN</span>"
            upDownImg.setAttribute("src", "./img/down.png");
        }
        numInput.value = "";
        numInput.focus();
    })

})