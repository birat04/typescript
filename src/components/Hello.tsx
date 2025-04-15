type HelloProps = {
    name : string,
    messageCount? : number,
    isLoggedIn : boolean

}
export const Hello = (props: HelloProps) => {
    return (
        <div>
            <h1>Hello {props.name}!. You have {props.messageCount} messages in your inbox.
            {props.isLoggedIn ? "Logged In" : "Logged Out"}
            </h1>

          
        </div>
    )
}
