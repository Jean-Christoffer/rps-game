import clsx from 'clsx';
export default function Button (props){
    const {classes,children, ...rest} = props
    const classNames = clsx(
        {
            'rock' : classes === 'rock',
            'paper' : classes === 'paper',
            'scissors' : classes === 'scissors'
        }
    )
    return(
        <>
            <div className={classNames} {...rest}>{children}</div>
        </>
    )
}