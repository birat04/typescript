type Inputprops = React.ComponentProps<'input'>
export const CustomInput = (props:Inputprops) => {
    return <input {...props}/>
}