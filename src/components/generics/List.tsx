type ListProps<T> = {
    items : T[]
    onClick : (value : T) => void
}
export const List = <T extends string>({items,onClick} : ListProps<T>) => {
    return(
        <div>
            <h1>list of items</h1>
            {items.map((item,index) =>{
                return(
                    <div key={index} onClick = {() => alert(item)}>
                        {item}
                    </div>
                )
            })}
        </div>
    )
}