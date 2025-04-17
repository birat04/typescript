
type ButttonProps = {
    handleClick: (event:React.MouseEvent<HTMLButtonElement>,id:number) => void
}
export const Button = (props: ButttonProps) => {
    return <button onClick = {(event) => props.handleClick(event,1)}>Click Me</button>
}