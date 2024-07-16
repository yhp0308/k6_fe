import BoxOfficeData from './BoxOffice.json'
import { FaArrowDown, FaArrowUp, FaEquals } from "react-icons/fa";
import { useState } from 'react';

export default function BoxOfficeTb() {

    const boxList = BoxOfficeData.boxOfficeResult.dailyBoxOfficeList

    const [selMv, setSelMv] = useState(0); //state 함수 만드는 법
    
    const handleClick = (mv) => {
        console.log(mv)
        setSelMv(mv);
    }
    const trs = boxList.map( item => 

        <tr key = {item.movieCd}
        onClick={() => 
        {handleClick(item)}}
        className='h-10 p-1 
            hover:bg-slate-400 hover:font-bold'>
            <td className='text-center'>
                <span className='
                 inline-flex
                 w11/12 p-1 rounded-lg
                 justify-center
                 items-center'>
                {item.rank}
                </span>
            </td>
            <td className=''>
                {item.movieNm}
            </td>
            <td className='text-right text-sm'>
                {parseInt(item.salesAmt).toLocaleString()}원
            </td>
            <td className='text-right text-base'>
                {parseInt(item.audiAcc).toLocaleString()}명
            </td>
            <td className='pt-5 text-center flex justify-center items-center'>
                {parseInt(item.rankInten) === 0 ? <FaEquals />
                    : parseInt(item.rankInten) > 0 ? <FaArrowUp className='text-red-600'/>
                        : <FaArrowDown className='text-blue-600'/>
                }
                {parseInt(item.rankInten) !==0 && Math.abs(item.rankInten)}
            </td>
        </tr>
        ) ;

  return (
    <div className='w-full flex flex-col justify-center items-center'>
        <table className="w-4/5 border">
        <thead>
            <tr className='h-10 text-center
             bg-indigo-300 text-white'>
            <th className='w-30'>순위</th>
            <th>영화명</th>
            <th className='w-1/5'>매출액</th>
            <th className='w-1/5'>관객수</th>
            <th className='w-30'>증감률</th>
            </tr>
        </thead>
        <tbody>
            {trs}
        </tbody>
        </table>
        <div className="w-4/5 border h-30 flex 
            justify-center items-center
            text-bold text-center
            bg-indigo-300 text-yellow-100">
        { selMv === undefined && '영화를 선택해 주세요.'}
        {  selMv && 
            `${selMv.movieNm}
            - 누적관객수 : ${parseInt(selMv.audiAcc).toLocaleString()}명
            / 누적매출액 : ${parseInt(selMv.salesAcc).toLocaleString()}원`
        }
        </div>
    </div>
  )
}
