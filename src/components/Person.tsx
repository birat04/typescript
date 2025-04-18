import { PersonProps } from './Person.types'
export const Person = ({name}: PersonProps) => {
    return (
        <h2>
            {name.first} {name.last}
        </h2>
    )
}