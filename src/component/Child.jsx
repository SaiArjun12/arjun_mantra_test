
const Child=(props)=>{
    return(
        <>
        {
            props.key.map((element,index)=>{
                return(<>
                <h2>{element.date}</h2>
                <h2>{element.name}</h2>
                <h2>{element.message}</h2>
                <h2>{element.rating}</h2>
                </>)
            })
        }
        
        </>
    )

}