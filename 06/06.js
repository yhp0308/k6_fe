const handleClick = (n) => {
    const img1 = document.querySelector("#img1");
    const img2 = document.querySelector("#img2");


    const nc = Math.floor(Math.random() * 6) + 1;

    img1.setAttribute("src", `./img/${nc}.png`);
    img2.setAttribute("src", `./img/${n}.png`);
    
    if (n == nc) {
        document.querySelector("#msg").innerHTML = "맞음";
    } else {
        document.querySelector("#msg").innerHTML = "틀림";
    }
}

    //for of => 파이썬의 for in 
    // for(let bt of bts) {
    //     const n = Math.floor(Math.random() * 6) + 1;
    //     bt.setAttribute("src", `./img/${n}.png`);
    // }
  
  
  
    // //for in
    // for(let i in bts) {
    //     const n = Math.floor(Math.random() * 6) + 1;
    //     // bts[i].setAttribute("src", `./img/${n}.png`);

    //     console.log("for in i=", bts[i])
    // }

    //기본 for
    // for(let i = 0; i < bts.length; i++) {
    //     const n = Math.floor(Math.random() * 6) + 1;
    //     bts[i].setAttribute("src", `./img/${n}.png`) 
    // }

    // bts.forEach((bt) => {
    //     const n = Math.floor(Math.random() * 6) +1;
    //     bt.setAttribute("src", `./img/${n}.png`);
    //     console.log("click", n);
    // });
