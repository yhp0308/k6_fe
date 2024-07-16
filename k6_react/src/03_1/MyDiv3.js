export default function MyDiv3({d11, d21, d31}) {
    const dname1 = 'div1' ;
    const dname2 = 'div2' ;
    const dname3 = 'div3' ;

    return (
        <div className="w-4/5 h-3/5 flex
        justify-center items-start
        bg-lime-500
        text-lime-50
        flex-col
        ">
            <p className="w-4/5
            flex justify-start
            font-bold text-2xl
            m-5
            ">
                {`${d11} > ${d21} > ${d31}`}
            </p>
        </div>
    )
}
