export default function MyDiv3(probs) {
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
                {`${probs.d1} > ${probs.d2} > ${probs.d3}`}
            </p>
        </div>
    )
}
