const handleChange = (s1, s2, lb1, lb2, t1, t2) => {
    // txt값들 초기화
    t1.value = '';
    t2.value = '';
    t1.focus(); // t1으로 커서 위치 이동

    if(s1.value === "℃"){
        s2.value = "℉";
        lb1.innerHTML = "℃";
        lb2.innerHTML = "℉";
    }
    else{
        s2.value = "℃"
        lb2.innerHTML = "℃";
        lb1.innerHTML = "℉";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const sel1 = document.querySelector("#sel1");
    const sel2 = document.querySelector("#sel2");

    const txt1 = document.querySelector("#txt1");
    const txt2 = document.querySelector("#txt2");

    const labels = document.querySelectorAll("label");

    sel1.addEventListener("change", ()=>{
        console.log(sel1.value); // form의 값은 .value로 가져옴
        handleChange(sel1, sel2, labels[0], labels[1], txt1, txt2);
    })
 
    sel2.addEventListener("change", ()=>{
        console.log(sel2.value);
        handleChange(sel2, sel1, labels[1], labels[0], txt1, txt2);
    })

    // txt1의 값이 입력되면 선택된 label값("℃", "℉"에 따라 계산하여 txt2에 출력)
    // input: 값이 바뀔때마다 바로 반영. change: enter 입력 후 반영
    txt1.addEventListener("input", () => {
        console.log(txt1.value);
        if(sel1.value === "℃")
            txt2.value = (parseFloat(txt1.value) * (9/5)) + 32;
        else
            txt2.value = (parseFloat(txt1.value)-32) * (5/9);
    })
})