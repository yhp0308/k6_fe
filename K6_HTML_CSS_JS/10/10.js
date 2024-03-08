document.addEventListener("DOMContentLoaded", () => {
  const bt = document.querySelector("button");
  const numDisp = document.querySelector("#numDisp");

  let nums = [] ;

  bt.addEventListener("click", () => {
    // 배열 초기화가 필요
    // nums = [] ;
    nums.length = 0; //JS에만 있는 문법 - 초기화 시키기

    // 1 ~ 45 까지 랜덤수가 (중복되지 않게) 7개 만들기
    while(nums.length < 7) {
      let n = Math.floor(Math.random() * 45) + 1;
      if(!nums.includes(n)) nums.push(n);
    }

    nums = nums.map( (v) =>
          `<span class = "sp${parseInt(v/10)}">${v}</span>`
    );

    nums.splice(6,0, `<span> + </span>`);
    // let s = nums.toString().replaceAll(',' , '') ;
    // console.log(s)

    numDisp.innerHTML = nums.toString().replaceAll(',' , '') ;


    // let tags = '' ;
    // nums.map((v, i) => {
    //   tags = tags + `<span class = "sp${parseInt(v/10)}">${v}</span>` ;  
    //   if (i === 5) 
    //     tags = tags +  `<span> + </span>` ;
    // });



    // numDisp.innerHTML = tags;

  });

});
