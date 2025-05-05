import React from 'react'

type TestOwnProps<E extends React.ElementType> = {
    size? : 'small' | 'medium' | 'large'
    color? : 'primary' | 'secondary' | 'tertiary'
    children : React.ReactNode
    as?: E
}
type TestProps<E extends React.ElementType> = TestOwnProps<E> & 
    Omit<React.ComponentPropsWithoutRef<E>, keyof TestOwnProps<E>>
  

export const Text = <E extends React.ElementType = 'div'>
({size,color,children,as}:TestProps<E>) => {
    const Component = as || 'div'

    return (
        <Component className={`class-with-${size} class-with-${color}`}>{children}</Component>
    )
}