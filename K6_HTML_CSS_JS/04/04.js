document.addEventListener("DOMContentLoaded", ()=>{
    //버튼 가져오기
    const bt1 = document.querySelector("#bt1");


    //버튼에 이벤트 달기
    bt1.addEventListener("click", ()=> {
        handleClick();
    
    }) ;

    const bt2 = document.querySelector("#bt2");


    //버튼에 이벤트 달기
    bt2.addEventListener("click", ()=> {
        handleClick();
    
    }) ;
}) ;

const handleClick = () => {
    const n = Math.floor(Math.random() * 6) + 1;

    const img = document.querySelector("#img") ;
    img.setAttribute("src", `./img/${n}.png`);
    console.log(("click", n))
}