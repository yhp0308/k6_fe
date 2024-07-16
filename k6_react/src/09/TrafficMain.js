import { useState, useEffect } from "react"
import TrafficNav from "./TrafficNav";

export default function TrafficMain() {
    
    const [tdata, setTdata] = useState() ;   //전체 fetch 데이터(17개 배열)

    const [c1, setC1] = useState();          //대분류(중복제거)
    const [selC1, setSelC1] = useState();    //선택된 대분류

    const [c2, setC2] = useState();          //중분류(중복제거)
    const [selC2, setSelC2] = useState();    //선택된 중분류
    
    const [detail, setDetail] = useState();  //상세 정보
    const [info, setInfo] = useState();      //상세 정보

    const getDataFetch = (url) => {          //자바스크립트 fetch 문법
        fetch(url) //then chaining
        .then(resp => resp.json())
        .then(data => setTdata(data.data))   //공식처럼 외워도된다.

        .catch(err => console.log(err)) ;
    }
    
    useEffect(() => {
        let url = `https://api.odcloud.kr/api/15070282/v1/uddi:00e5cb5a-ecdf-4190-a499-ba3a6b2a8db9?`;
        url = `${url}page=1&perPage=20&`;
        url = `${url}serviceKey=${process.env.REACT_APP_APIKEY}`;

        console.log(url)

        getDataFetch(url);

    }, []);
    
    useEffect(() => {
        if (!tdata) return;

        let tm = tdata.map(item => item['사고유형_대분류']);
        tm = new Set(tm) ; // 중복 제거 방법
        tm = [...tm] ; // 전개 연산자

        setC1(tm) ;

        console.log(' tdata tm => ', tm)

    },[tdata])

    useEffect(() => {
        if (!tdata) return;
        console.log("selC1", selC1);

        let tm = tdata.filter(item => item.사고유형_대분류 === selC1).map(item => item.사고유형_중분류) ;
        
        setInfo('');
        setC2(tm);
    }, [selC1])

    useEffect(() => {
        if (!tdata) return;

        let tm = tdata.filter(item => item.사고유형_대분류 === selC1 &&
                                item.사고유형_중분류 === selC2)

                                setDetail(tm[0]) ;

    }, [selC2])

    useEffect(() => {
        if (!tdata) return;
        console.log(detail)
        const keyArr = ['사고건수', '사망자수', '중상자수', '경상자수', '부상신고자수'];

        let tm = keyArr.map(k => 
            <div className="w-full mt-5 flex justify-center items-center"
                key={k}>
                <div className="w-1/2 h-10
                                font-bold
                                flex justify-center items-center   
                             bg-slate-200">
                    {k}
                </div>
                <div className="w-1/2 h-10
                                font-bold
                                flex justify-center items-center   
                             ">
                    {parseInt(detail[k]).toLocaleString()}
                </div>
            </div>
            );

            setInfo(tm);
    }, [detail])
    
    return (
        <div className="w-11/12 h-full mt-5
                        flex flex-col
                        justify-start item-center">

            {c1 && <TrafficNav title = "대분류"
                        category = {c1}
                        sel = {selC1}
                        setSel ={setSelC1} />
            }

            {c2 && <TrafficNav title = "중분류"
                        category = {c2}
                        sel = {selC2}
                        setSel ={setSelC2} />
            }
            <div className="w-full grid grid-cols-2
                            sm:grid-cols-3
                            md:grid-cols-5
                            gap-4">
                {info}
            </div>
        </div>
    )
}
