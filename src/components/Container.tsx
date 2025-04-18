type ContainerProps = {
    styles:React.CSSProperties

}
export const Container = (props: ContainerProps) => {
    return (
        <div style={props.styles}>
            <h2>Hey there !!!!</h2>
        </div>
    )
}