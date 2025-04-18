type HelloProps = {
    name : string,
    messageCount? : number,
    isLoggedIn : boolean

}
export const Hello = (props: HelloProps) => {
    return (
        <div>
            <h1>
                {props.isLoggedIn
                    ? `Hello ${props.name}!. You have ${props.messageCount} unread messages in your inbox.`
                    : `Welcome There`
                }
            
            </h1>
          
        </div>
    )
}
