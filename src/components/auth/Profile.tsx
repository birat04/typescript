export type ProfileProps = {
    name : string
}
export const Profile = ({name} : ProfileProps) => {
    
    return <div>private Profile component. Name: {name}</div>
}