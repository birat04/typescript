import React from 'react'
import { Hello } from '../Hello'

export const CustomComponent = (props:React.ComponentProps<typeof Hello>) => {
  return (
    <div>
        {props.name}
    </div>
  )
}
