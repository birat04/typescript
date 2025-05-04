type RandomNumberProps = {
    value: number
    isPositive: boolean
    isNegative: boolean
    isZero: boolean
}
export const RandomNumber = ({
    value,
    isPositive,
    isNegative,
    isZero,
}: RandomNumberProps) => {
    return (
        <div>
            {value} {isPositive && "isPositive"} {isNegative && "isNegative"} {""}
            {isZero && "isZero"}
        </div>
    )
}


