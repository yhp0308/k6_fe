import { FaHeart } from "react-icons/fa";
import { useState } from "react";

export default function MyList({title, imgUrl, content}) {
  //지역변수
  let cnt = 0;

  //state 변수명, 세터명
  const [stCnt, setStCnt] = useState(0); //Hook 호출

  const handleLike = (t) => {
    console.log('handleLike' + t);
    cnt = cnt + 1;
    console.log(`cnt = ${cnt}`)
    setStCnt(stCnt + 1);
  }

  return (
    <div className="w-10/12 flex border rounded">
      <div className="w-1/4 max-w-40">
        <img src={imgUrl} alt={title} />
      </div>
      <div className="w-3/4 px-8 py-3">
        <h1 className="text-2xl font-bold 
        text-gray-700">
            {title}
        </h1>
        <p className="w-full text-gray-600 text-sm">
            {content}
        </p>
        <p className="w-full flex justify-end mt-5
        font-bold text-base items-center">
            <span className="text-xl" 
                //  매개변수를 전달할때는 콜백함수 형태로 작성
                onClick={() => {handleLike(title)}}> 
                <FaHeart className="text-orange-400 hover:text-red-600 hover:cursor-pointer"/>
            </span>
            <span className="mx-2">좋아요</span>
            <span>{stCnt}</span>
        </p>
      </div>
    </div>
  )
}
