import React, { useState } from 'react'
import TailButton from '../UI/TailButton'
import TailBall from '../UI/TailBall'


export default function Lotto() {
    
    const [ballTags, setBallTags] = useState();

    const handleLottoClick = () => {

        let nums = [];

        while(nums.length < 7) {
            let n = Math.floor(Math.random() * 45) + 1;
            if (!nums.includes(n)) nums.push(n) ;
            // console.log(nums)
        }

        nums.splice(6 , 0, '+') ;
        
        const tm = nums.map((item,idx) => 
            idx === 6 ? 
                        <span className='text-xl font-bold' key={`sp${item}`}> 
                        {item} 
                        </span>
                            : <TailBall n={item} key={`ball${item}`}/>
        )

        setBallTags(tm) ;

    }

    return (
        <div className='flex flex-col 
                        justify-center items-center
                        w-full h-full'>
            <div className='flex justify-center items-center
                            mx-5 my-10'>
                {ballTags}
            </div>
            <div>
            {/* 같은 TailButton 컴포넌트를 호출하지만 전달받은 함수가 달라 다른 기능 수행 */}
            <TailButton caption='로또번호 생성'
                color='sky'
                handleClick={handleLottoClick} />
            </div>
        </div>
    )
}