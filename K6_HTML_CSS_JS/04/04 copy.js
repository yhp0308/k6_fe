//DOM tree가 완성된 후 실행
document.addEventListener("DOMContentLoaded" , () => {
    const bt1 = document.querySelector("#btn")  

    //버튼 이벤트 달기
    bt1.addEventListener("click", ()=>{
        const num = Math.floor(Math.random() * 6) +1;
        console.log("문자열은 = ", num)
        const img = document.querySelector("img");
        img.setAttribute("src", `img/${num}.png`)
    });
  }) ;