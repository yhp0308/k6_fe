import './Hello.css' ;

function Hello() {
    let n = Math.floor(Math.random() * 99) + 1 ;


    const st1 = {
        backgroundColor: "darkblue",
        color: "white"
    }

    // let s = '';
    // if (n % 2 === 0) s = "짝수" ;
    // else s = "홀수" ;

    // 인라인 스타일을 사용하고 싶을 때 오브젝트로 만들어서 여기서 바로 할 수 있다. 카멜표기법으로 사용해야한다.

    // let x ;

    return (
        <h1>
            <span style={st1}>Hello</span>
            <span style={{display:"inline-flex", margin:"10px"}}>{n}</span>
            {/* 앞에 조건이 나오면 뒤에 것이 나온다. */}
            {/* { n < 10 && "0"}  */}
            {/* 이렇게 바로 중괄호 치고 스타일 적용가능하다. */}
            {/* { n % 2 === 0 ? "짝수" : "홀수"} */}
            { n % 2 === 0 
                ? <span style={{color:"red"}}>짝수</span>
                : <span style={{color:"blue"}}>홀수</span>
            }
            { n < 10 ? `0${n}` : n}
            {/* 리액트에서는 삼항연산자를 자주쓴다. */}
            { n % 2 === 0 && "🍎" }
            { n % 2 === 1 && "🥕" }
            {/* <p>{ x || "x는 undefineded입니다."}</p> */}

        </h1>
    );
}

export default Hello;